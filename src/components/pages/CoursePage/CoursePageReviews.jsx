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
        // Загрузка существующего отзыва при монтировании компонента
        if (user && isPurchased) {
            fetchExistingReview();
        }
    }, [user, isPurchased]);
    useEffect(() => {
        async function fetchReviews() {
            const { data, error } = await supabase.from("reviews").select("*");

            if (error) {
                console.error("Ошибка при загрузке отзывов: ", error);
            } else {
                setReviews(data);
            }
        }
        fetchReviews();
    }, []);
    async function fetchExistingReview() {
        try {
            const { data, error } = await supabase
                .from("reviews")
                .select("*")
                .eq("user_id", user.id)
                .eq("course_id", courseId)
                .single(); // Ожидаем только один отзыв для данного пользователя и курса

            if (error) {
                console.error("Ошибка при загрузке отзыва: ", error);
            } else if (data) {
                // Если отзыв существует, обновляем состояние
                setExistingReview(data);
                setRating(data.rating);
                setReviewText(data.text);
            }
        } catch (err) {
            console.error("Ошибка при загрузке отзыва: ", err);
        }
    }
    async function deleteReview(e) {
        if (!existingReview) return;
        e.preventDefault();
        const { error } = await supabase
            .from("reviews")
            .delete()
            .eq("id", existingReview.id);
        if (error) {
            console.error("Ошибка при удалении отзыва: ", error);
            return;
        }
        setExistingReview(null);
        setRating(5);
        setReviewText("");
    }
    async function handleSubmit(e) {
        e.preventDefault();

        try {
            let response;

            if (existingReview) {
                // Обновление существующего отзыва
                response = await supabase
                    .from("reviews")
                    .update({
                        text: reviewText,
                        rating: rating,
                    })
                    .eq("id", existingReview.id); // Используем ID существующего отзыва
            } else {
                // Создание нового отзыва
                response = await supabase.from("reviews").insert([
                    {
                        text: reviewText,
                        rating: rating,
                        course_id: courseId,
                        user_id: user.id,
                    },
                ]);
            }

            if (response.error) {
                console.error("Ошибка при отправке отзыва: ", response.error);
                return { success: false, error: response.error };
            }

            setRating(5);
            setReviewText("");
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
            <div className="reviews-course__body">
                {
					reviews?.map((item,index) => {
						return (
							<CoursePageReviewsItem key={index} review={item} />
						)
					})
				}
            </div>
        </section>
    );
}
