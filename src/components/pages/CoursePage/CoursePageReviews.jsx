import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { supabase } from "../../../supaBaseClient";
import Modal from "../../UI/Modal";
import CoursePageReviewsItem from "./CoursePageReviewsItem";

export default function CoursePageReviews({ courseId, user, isPurchased }) {
    const [rating, setRating] = useState(5);
    const [hover, setHover] = useState(null);
    const [reviews, setReviews] = useState(null);
    const [openThankyou, setOpenThankyou] = useState(false);
    const [open, setOpen] = useState(false);
    const [reviewText, setReviewText] = useState("");
    const [existingReview, setExistingReview] = useState(null); // Для хранения существующего отзыва
    useEffect(() => {
        if (user?.id && courseId && isPurchased) {
            fetchExistingReview();
        }
    }, [user?.id, courseId, isPurchased]);
    useEffect(() => {
        if (!courseId) return;
        async function fetchReviews() {
            const { data, error } = await supabase
                .from("reviews")
                .select("*")
                .eq("course_id", courseId);

            if (error) {
                console.error("Ошибка при загрузке отзывов: ", error);
            } else {
                setReviews(data);
            }
        }
        fetchReviews();
    }, [courseId]);
    async function fetchExistingReview() {
        if (!user?.id || !courseId) return;

        try {
            const { data, error } = await supabase
                .from("reviews")
                .select("*")
                .eq("user_id", user.id)
                .eq("course_id", courseId)
                .maybeSingle();

            if (error) {
                console.error("Ошибка при загрузке отзыва: ", error);
            } else if (data) {
                setExistingReview(data);
                setRating(data.rating);
                setReviewText(data.text);
            }
        } catch (err) {
            console.error("Ошибка при загрузке отзыва: ", err);
        }
    }
    async function deleteReview(e) {
        e.preventDefault();

        if (!existingReview) return;

        try {
            const { error } = await supabase
                .from("reviews")
                .delete()
                .eq("id", existingReview.id);

            if (error) {
                console.error("Ошибка при удалении отзыва: ", error);
                return;
            }

            setReviews((prevReviews) =>
                prevReviews.filter((review) => review.id !== existingReview.id)
            );

            setExistingReview(null);
            setRating(5);
            setReviewText("");
            setOpen(true);
        } catch (err) {
            console.error("Ошибка при удалении отзыва: ", err);
        }
    }
    async function handleSubmit(e) {
        e.preventDefault();

        try {
            let response;

            if (existingReview) {
                // Обновление отзыва
                response = await supabase
                    .from("reviews")
                    .update({
                        text: reviewText,
                        rating: rating,
                    })
                    .eq("id", existingReview.id)
                    .select(); // чтобы получить обновлённые данные

                if (response.error) {
                    console.error("Ошибка при обновлении отзыва: ", response.error);
                    return { success: false, error: response.error };
                }

                // Обновляем отзыв в списке
                setReviews((prevReviews) =>
                    prevReviews.map((review) =>
                        review.id === existingReview.id ? response.data[0] : review
                    )
                );

                setExistingReview(response.data[0]);
                setReviewText(response.data[0].text);
            } else {
                // Добавление нового отзыва
                response = await supabase
                    .from("reviews")
                    .insert([
                        {
                            text: reviewText,
                            rating: rating,
                            course_id: courseId,
                            user_id: user.id,
                        },
                    ])
                    .select(); // чтобы получить вставленный отзыв

                if (response.error) {
                    console.error("Ошибка при создании отзыва: ", response.error);
                    return { success: false, error: response.error };
                }

                // Добавляем новый отзыв в список
                setReviews((prevReviews) => [...prevReviews, response.data[0]]);
                setExistingReview(response.data[0]);
                setReviewText(response.data[0].text);
            }

            // Очистка формы и открытие модального окна "спасибо"
            setRating(5);
            setOpenThankyou(true);
        } catch (error) {
            console.error("Ошибка при отправке отзыва: ", error);
        }
    }

    return (
        <section className="course__reviews reviews-course">
            <Modal open={openThankyou} onClose={() => setOpenThankyou(false)}>
                <p className="heading-medium">Спасибо за ваш отзыв</p>
            </Modal>
            <Modal open={open} onClose={() => setOpen(false)}>
                <p className="heading-medium">Ваш отзыв был удалён!</p>
            </Modal>

            {user && isPurchased ? (
                <>
                    <p className="page-course__heading heading-small">
                        {existingReview ? "Редактировать отзыв" : "Оставить отзыв"}
                    </p>
                    <form
                        onSubmit={handleSubmit}
                        className="reviews-course__form form-reviews-course"
                    >
                        <div className="form-reviews-course__rating">
                            {[...Array(5)].map((_, index) => {
                                const currentRating = index + 1;
                                return (
                                    <label key={index}>
                                        <input
                                            type="radio"
                                            name="rating"
                                            value={currentRating}
                                            onClick={() => setRating(currentRating)}
                                            style={{ display: "none" }}
                                        />
                                        <FaStar
                                            size={30}
                                            color={
                                                currentRating <= (hover || rating)
                                                    ? "#f1d533"
                                                    : "#e4e5e9"
                                            }
                                            onMouseEnter={() => setHover(currentRating)}
                                            onMouseLeave={() => setHover(null)}
                                            style={{ cursor: "pointer" }}
                                        />
                                    </label>
                                );
                            })}
                        </div>
                        <textarea
                            placeholder="Текст отзыва"
                            name="review"
                            id="review"
                            className="form-reviews-course__textarea"
                            onChange={(e) => setReviewText(e.target.value)}
                            value={reviewText}
                        />
                        <div className="form-reviews-course__buttons">
                            <button
                                type="submit"
                                className="button-main-mini button-main"
                            >
                                {existingReview ? "Обновить отзыв" : "Отправить отзыв"}
                            </button>
                            {existingReview && (
                                <button
                                    type="button"
                                    className="button-main-mini button-main reversed"
                                    onClick={deleteReview}
                                >
                                    Удалить отзыв
                                </button>
                            )}
                        </div>
                    </form>
                </>
            ) : null}

            <p className="page-course__heading heading-small">Отзывы</p>
            {reviews?.length > 0 ? (
                <div className="reviews-course__body">
                    {reviews?.map((item, index) => {
                        return <CoursePageReviewsItem key={index} review={item} />;
                    })}
                </div>
            ) : (
                <p className="text">Отзывов на курс пока нет.</p>
            )}
        </section>
    );
}
