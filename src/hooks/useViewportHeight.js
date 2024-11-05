import { useState, useEffect } from 'react';

const useViewportHeight = () => {
    const [vh, setVh] = useState(window.innerHeight * 0.01);

    useEffect(() => {
        const handleResize = () => {
            setVh(window.innerHeight * 0.01);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }
    , []);

    return vh;
}

export default useViewportHeight;