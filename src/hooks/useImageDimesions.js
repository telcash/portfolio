import { useState, useEffect } from 'react';

const useImageDimensions = (src) => {
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        if (!src) return;

        const img = new Image();
        img.src = src;

        if (img.complete) {
            setDimensions({
                width: img.naturalWidth,
                height: img.naturalHeight,
            });
        } else {
            img.onload = () => {
                setDimensions({
                    width: img.naturalWidth,
                    height: img.naturalHeight,
                });
            };
        }

        return () => {
            img.onload = null;
        }
    }, [src]);

    return dimensions;
}

export default useImageDimensions;