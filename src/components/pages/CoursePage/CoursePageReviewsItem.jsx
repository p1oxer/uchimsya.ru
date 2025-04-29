import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { supabase } from "../../../supaBaseClient";

export default function CoursePageReviewsItem({ review }) {
    const [user, setUser] = useState(""); 

    useEffect(() => {
        async function fetchUserName() {
            try {
                const { data, error } = await supabase
                    .from("profiles")
                    .select("fullname") 
                    .eq("id", review.user_id) 
                    .single();

                if (error) {
                    console.error("Ошибка при загрузке имени пользователя: ", error);
                } else {
                    setUser (data.fullname || "Аноним"); 
                }
            } catch (err) {
                console.error("Ошибка при загрузке имени пользователя: ", err);
            }
        }

        fetchUserName();
    }, [review]); 

    return (
        <div className="reviews-course__item item-reviews-course">
            <div className="item-reviews-course__rating">
                {[...Array(review.rating)].map((_, index) => (
                    <FaStar key={index} color={"#f1d533"} size={30} />
                ))}
            </div>
            <p className="item-reviews-course__text text">{review.text}</p>
            <p className="item-reviews-course__username heading-small">
                {user || "Аноним"}
            </p>
            <p className="item-reviews-course__date">
                {new Date(review.created_at).toLocaleDateString("ru-RU")}
            </p>
        </div>
    );
}
