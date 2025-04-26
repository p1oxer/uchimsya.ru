import { supabase } from "./src/supaBaseClient.js";
import fs from "fs/promises";

const file = await fs.readFile("./src/data/courses.json", "utf-8");
const courses = JSON.parse(file);

const { data, error } = await supabase.from("courses").insert(courses);

if (error) {
    console.error("❌ Ошибка при загрузке:", error);
} else {
    console.log("✅ Курсы успешно загружены:", data);
}