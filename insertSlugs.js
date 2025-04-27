import { translit } from "./src/helpers.js";
import { supabase } from "./src/supaBaseClient.js";

async function updateSlugs() {
    const { data: courses, error } = await supabase.from("courses").select("id, name");

    if (error) {
        console.error("Ошибка при получении курсов:", error);
        return;
    }

    for (const course of courses) {
        const slug = translit(course.name);

        const { error: updateError } = await supabase
            .from("courses")
            .update({ slug })
            .eq("id", course.id);

        if (updateError) {
            console.error(`Ошибка при обновлении курса ${course.id}:`, updateError);
        } else {
            console.log(`Курс ${course.id} обновлён: ${slug}`);
        }
    }
}

updateSlugs();
