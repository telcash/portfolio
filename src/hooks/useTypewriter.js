import { useState, useEffect } from 'react';

export const useTypewriter = (text, speed = 30, delay = 0) => {
    const [displayText, setDisplayText] = useState('');

    useEffect(() => {
        let i = 0;
        const time = setTimeout(() => {
            const typingInterval = setInterval(() => {
                if(i === text.length - 1) {
                    setDisplayText(text.substring(0, i+1));
                    i++;
                }
                else if(i < text.length) {
                    setDisplayText(text.substring(0, i+1) + "|");
                    i++;
                } else {
                    clearInterval(typingInterval);
                }
            }, speed);

        }, delay)

        return () => {
            clearTimeout(time);
        };
    }, [text, speed, delay]);

    return displayText;
}