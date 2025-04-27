import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../../supaBaseClient";
import { translit } from "../../helpers";
import Loading from "../UI/Loading";

export default function CoursePage() {
    const { courseName } = useParams();
    const [course, setCourse] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchCourse() {
            const { data, error } = await supabase
                .from("courses")
                .select("*")
                .eq("slug", courseName)
                .single();
            if (error) {
                console.error("Произошла ошибка! ", error);
            } else {
                setCourse(data);
            }
            setLoading(false);
        }
        fetchCourse();
    }, [courseName]);
    return (
        <>
            <Loading isFading={!loading}/>
            <section className="page-course">
                <div className="container"></div>
            </section>
        </>
    );
}
