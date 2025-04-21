import { useState, useEffect } from 'react';

// Функция для загрузки изображений
const loadImages = async (imagePaths) => {
    const filteredImagePaths = Object.keys(imagePaths).filter((key) => {
        const filename = key.split("/").pop(); // Получаем только имя файла
        return /^[a-zA-Z0-9]+\.(jpg|jpeg|png|svg)$/.test(filename); // Обновленное регулярное выражение
    });

    const promises = filteredImagePaths.map((key) => imagePaths[key]());
    const resolvedImages = await Promise.all(promises);

    return resolvedImages.map((img) => img.default); // Получаем URL изображений
};

const useImageLoader = (imageFolderUrl) => {
    const [imagePaths, setImagePaths] = useState([]);

    useEffect(() => {
        let images;

        switch (imageFolderUrl) {
            case "reviews":
                images = import.meta.glob("/src/assets/images/reviews/*.{png,jpg,jpeg,svg}");
                break; // Добавляем break для предотвращения "проваливания"
            case "hero":
                images = import.meta.glob("/src/assets/images/hero/*.{png,jpg,jpeg,svg}");
                break;
            case "popularCourses":
                images = import.meta.glob("/src/assets/images/popularCourses/*.{png,jpg,jpeg,svg}");
                break;
            default:
                images = {}; // Если не найдено, присваиваем пустой объект
                break;
        }

        if (images) {
            loadImages(images).then(setImagePaths);
        }
    }, [imageFolderUrl]); // Зависимость от imageFolderUrl

    return imagePaths;
};

export default useImageLoader;
