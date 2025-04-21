export const loadImages = async (imagePaths) => {

    const filteredImagePaths = Object.keys(imagePaths).filter((key) => {
        const filename = key.split("/").pop(); // Получаем только имя файла
        return /^[0-9]{2}\.(jpg|jpeg|png|svg)$/.test(filename);
    });
    const promises = filteredImagePaths.map((key) => imagePaths[key]());
    const resolvedImages = await Promise.all(promises);

    return resolvedImages.map((img) => img.default); // Получаем URL изображений
};
