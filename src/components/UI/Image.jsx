import React from "react";

export default function Image({ imagePath, alt, sizes, preload = false }) {
    // Проверяем, что imagePath не пустой
    if (!imagePath) {
        return <img src="/path/to/default-image.jpg" alt="default" />;
    }

    const imageFormat = `.${imagePath.split(".").pop()}`;

    // Генерация источников для picture в зависимости от размеров
    const sources = sizes.map((size) => {
        const webpSrc = imagePath.replace(imageFormat, `-${size}.webp`);
        const avifSrc = imagePath.replace(imageFormat, `-${size}.avif`);
        const jpgSrc = imagePath.replace(imageFormat, `-${size}${imageFormat}`);

        // Определяем медиа-запросы на основе размера
        const mediaQuery =
            size === "500"
                ? "(min-width: 320px)"
                : size === "900"
                ? "(min-width: 501px)"
                : size === "1200"
                ? "(min-width: 901px)"
                : "(min-width: 1201px)";

        return (
            <React.Fragment key={size}>
                <source
                    key={`webp-${size}`}
                    type="image/webp"
                    srcSet={webpSrc}
                    media={mediaQuery}
                />
                <source
                    key={`avif-${size}`}
                    type="image/avif"
                    srcSet={avifSrc}
                    media={mediaQuery}
                />
                <source
                    key={`jpg-${size}`}
                    type="image/jpeg"
                    srcSet={jpgSrc}
                    media={mediaQuery}
                />
            </React.Fragment>
        );
    });

    return (
        <picture>
            {sources}
            <img
                rel={preload ? "preload" : ""}
                loading="lazy"
                src={imagePath}
                alt={alt}
            />
        </picture>
    );
}
