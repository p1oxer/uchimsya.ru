export const loadImages = async (imagePaths) => {
    const promises = Object.keys(imagePaths).map((key) => imagePaths[key]());
    const resolvedImages = await Promise.all(promises);
    return resolvedImages.map((img) => img.default); // Получаем URL изображений
};
