import React from "react";

export default function StoriesImg({ imagePath, alt }) {
    const imageFormat = `.${imagePath.split(".").pop()}`;
    // console.log(imageFormat);
    // Проверяем, что imagePath не пустой
    if (!imagePath) {
        return <img src="/path/to/default-image.jpg" alt="default" />;
    }

    const webp1920 = imagePath.replace(imageFormat, "-1920.webp");
    const webp1200 = imagePath.replace(imageFormat, "-1200.webp");
    const webp900 = imagePath.replace(imageFormat, "-900.webp");
    const webp500 = imagePath.replace(imageFormat, "-small-500.webp");

    const avif1920 = imagePath.replace(imageFormat, "-1920.avif");
    const avif1200 = imagePath.replace(imageFormat, "-1200.avif");
    const avif900 = imagePath.replace(imageFormat, "-900.avif");
    const avif500 = imagePath.replace(imageFormat, "s-mall-500.avif");

    const source1920 = imagePath.replace(imageFormat, `-1920${imageFormat}`);
    const source1200 = imagePath.replace(imageFormat, `-1200${imageFormat}`);
    const source900 = imagePath.replace(imageFormat, `-900${imageFormat}`);
    const source500 = imagePath.replace(imageFormat, `-small-500${imageFormat}`);

    return (
        <picture>
            <source type="image/webp" srcSet={webp1920} media="(min-width: 1201px)" />
            <source
                type="image/webp"
                srcSet={webp1200}
                media="(min-width: 901px) and (max-width: 1200px)"
            />
            <source
                type="image/webp"
                srcSet={webp900}
                media="(min-width: 551px) and (max-width: 900px)"
            />
            <source type="image/webp" srcSet={webp500} media="(max-width: 550px)" />
            <source type="image/avif" srcSet={avif1920} media="(min-width: 1201px)" />
            <source
                type="image/avif"
                srcSet={avif1200}
                media="(min-width: 901px) and (max-width: 1200px)"
            />
            <source
                type="image/avif"
                srcSet={avif900}
                media="(min-width: 551px) and (max-width: 900px)"
            />
            <source type="image/avif" srcSet={avif500} media="(max-width: 550px)" />
            <source type="image/jpg" srcSet={source1920} media="(min-width: 1201px)" />
            <source
                type="image/jpg"
                srcSet={source1200}
                media="(min-width: 901px) and (max-width: 1200px)"
            />
            <source
                type="image/jpg"
                srcSet={source900}
                media="(min-width: 551px) and (max-width: 900px)"
            />
            <source type="image/jpg" srcSet={source500} media="(max-width: 550px)" />
            <img loading="lazy" src={imagePath} alt={alt} />
        </picture>
    );
}
