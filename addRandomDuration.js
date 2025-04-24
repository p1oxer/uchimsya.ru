// Импортируем необходимые модули (если используете Node.js)
import fs from "fs";

// Исходный массив durations
const durations = [
    "1 месяц",
    "2 месяца",
    "3 месяца",
    "4 месяца",
    "5 месяцев",
    "6 месяцев",
];

// Функция для получения случайного элемента из массива
function getRandomElement(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

// Чтение JSON-документа (замените 'input.json' на путь к вашему файлу)
const rawData = fs.readFileSync("./src/data/courses.json", "utf8");
const data = JSON.parse(rawData);

// Добавление случайной продолжительности в каждый объект
data.forEach((course) => {
    course.duration = getRandomElement(durations);
});

// Сохранение обновленного JSON-документа
const updatedJson = JSON.stringify(data, null, 2); // Форматируем JSON с отступами
fs.writeFileSync("./src/data/courses1.json", updatedJson, "utf8");

console.log("JSON-документ успешно обновлен и сохранен как output.json");
