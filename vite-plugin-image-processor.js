import { processImages } from "./imageProcessor";

export default function ImageProcessorPlugin() {
    return {
        name: "vite-plugin-image-processor",
        closeBundle: async () => {
            console.log("Processing images...");
            await processImages();
            console.log("Image processing completed.");
        },
    };
}
