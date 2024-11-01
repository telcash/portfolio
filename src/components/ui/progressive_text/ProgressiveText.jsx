import React, { useEffect } from "react";
import { gsap } from "gsap";

const ProgressiveText = ({ text, textStyle, animate }) => {
    useEffect(() => {
        gsap.set(".progressive-text", { clipPath: 'inset(0 100% 0 0)' });
        if (animate)
        {
            gsap.to(".progressive-text", {
                clipPath: 'inset(0 0% 0 0)',
                duration: 1,
                delay: 1,
            });
        }
    }, [animate]);
    
    return (
        <div className="progressive-text" style={{...textStyle, display: 'inline-block', whiteSpace: 'nowrap'}}>{text}</div>
    );
}
export default ProgressiveText;