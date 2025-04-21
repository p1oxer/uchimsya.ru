#!/bin/bash

# Папка с исходными изображениями
INPUT_DIR="./src/assets/images/hero"
# Папка для сохранения конвертированных изображений
OUTPUT_DIR="./src/assets/images/hero"

# Создаем папку для выходных изображений, если она не существует
mkdir -p "$OUTPUT_DIR"

# Рекурсивный поиск изображений в подкаталогах
find "$INPUT_DIR" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) | while read -r img; do
    # Получаем относительный путь к изображению
    relative_path="${img#$INPUT_DIR/}"
    output_subdir="$OUTPUT_DIR/$(dirname "$relative_path")"

    # Создаем выходную папку, если она не существует
    mkdir -p "$output_subdir"

    # Получаем имя файла без расширения
    filename=$(basename "$img")
    filename_no_ext="${filename%.*}"

    # Конвертация исходного изображения в размеры 1920, 1200, 900 и 500 с автоматической высотой
    for size in 1920 1200 900 500; do
        # Конвертация в исходном формате
        magick "$img" -resize "${size}x" -quality 90 "$output_subdir/${filename_no_ext}-${size}.${filename##*.}"
    done

    # Конвертация в WebP
    for size in 1920 1200 900 500; do
        magick "$img" -resize "${size}x" -quality 90 "$output_subdir/${filename_no_ext}-${size}.webp"
    done
    
    # Конвертация в AVIF
    for size in 1920 1200 900 500; do
        magick "$img" -resize "${size}x" -quality 90 "$output_subdir/${filename_no_ext}-${size}.avif"
    done
done

echo "Конвертация завершена!"
