import { useState, useEffect } from 'react';

export const useImageLoader = (imageFolder) => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchImageList = async () => {
            try {
                const response = await fetch(`/assets/images/${imageFolder}/images.json`);
                if (!response.ok)
                    throw new Error("Не удалось загрузить список изображений");

                const filenames = await response.json(); // ["hero1", "hero2", ...]
                setImages(filenames);
            } catch (error) {
                console.error("Ошибка загрузки изображений:", error);
                setImages([]);
            }
        };

        fetchImageList();
    }, [imageFolder]);

    return images; // ["hero1", "hero2", ...]
};
