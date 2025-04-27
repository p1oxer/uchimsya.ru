import { useEffect, useState } from "react";

export function useLoadingScreen(delay) {
    const [loading, setLoading] = useState(true);
    const [showLoading, setShowLoading] = useState(true);

    useEffect(() => {
        if (!loading) {
            const timer = setTimeout(() => {
                setShowLoading(false);
            }, delay);

            return () => clearTimeout(timer);
        }
    }, [loading, delay]);

    return { loading, showLoading, setLoading };
}
