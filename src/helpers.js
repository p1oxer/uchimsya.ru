export const mapCoursesWithImages = (courses, imagePaths) => {
    return courses.map((course) => {
        const imagePath = imagePaths.find((path) => {
            const imageName = path.split("/").pop().split(".")[0]; // Получаем имя файла без расширения
            return imageName === course.img; // Сравниваем с img
        });
        return {
            ...course,
            img: imagePath || "", // Если изображение не найдено, присваиваем пустую строку
        };
    });
};
