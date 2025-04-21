import React from "react";

export default function Image({ imagePath, alt, sizes }) {
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

        return (
            <>
                {size == "500" && (
                    <>
                        <source
                            key={`webp-${size}`}
                            type="image/webp"
                            srcSet={webpSrc}
                            media={`(min-width: 320px)`}
                        />
                        <source
                            key={`avif-${size}`}
                            type="image/avif"
                            srcSet={avifSrc}
                            media={`(min-width: 320px)`}
                        />
                        <source
                            key={`source-${size}`}
                            type="image/jpg"
                            srcSet={jpgSrc}
                            media={`(min-width: 320px)`}
                        />
                    </>
                )}
                {size == "900" && (
                    <>
                        <source
                            key={`webp-${size}`}
                            type="image/webp"
                            srcSet={webpSrc}
                            media={`(min-width: 501px)`}
                        />
                        <source
                            key={`avif-${size}`}
                            type="image/avif"
                            srcSet={avifSrc}
                            media={`(min-width: 501px)`}
                        />
                        <source
                            key={`source-${size}`}
                            type="image/jpg"
                            srcSet={jpgSrc}
                            media={`(min-width: 501px)`}
                        />
                    </>
                )}
                {size == "1200" && (
                    <>
                        <source
                            key={`webp-${size}`}
                            type="image/webp"
                            srcSet={webpSrc}
                            media={`(min-width: 901px)`}
                        />
                        <source
                            key={`avif-${size}`}
                            type="image/avif"
                            srcSet={avifSrc}
                            media={`(min-width: 901px)`}
                        />
                        <source
                            key={`source-${size}`}
                            type="image/jpg"
                            srcSet={jpgSrc}
                            media={`(min-width: 901px)`}
                        />
                    </>
                )}
                {size == "1920" && (
                    <>
                        <source
                            key={`webp-${size}`}
                            type="image/webp"
                            srcSet={webpSrc}
                            media={`(min-width: 1201px)`}
                        />
                        <source
                            key={`avif-${size}`}
                            type="image/avif"
                            srcSet={avifSrc}
                            media={`(min-width: 1201px)`}
                        />
                        <source
                            key={`source-${size}`}
                            type="image/jpg"
                            srcSet={jpgSrc}
                            media={`(min-width: 1201px)`}
                        />
                    </>
                )}
            </>
        );
    });

    return (
        <picture>
            {sources}
            <img loading="lazy" src={imagePath} alt={alt} />
        </picture>
    );
}
