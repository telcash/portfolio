import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import "./logobox.css";

const LogoBox = ({ logoImg, logoSize, animate, animateOptions, x, y, rotation, scale, opacity, clipPath }) => {
    const container = useRef(null);

    useEffect(
        () => {
            gsap.set(container.current, 
                { 
                    x: x ?? 0,
                    y: y ?? 0,
                    rotation: rotation ?? 0,
                    scale: scale ?? 1,
                    opacity: opacity ?? 1,
                    clipPath: clipPath ?? 'inset(0 0 0 0)',
                }
            );
            if (animate) {
                animateOptions.forEach((option) => {
                    gsap.to(container.current, option);
                });
            };
        },
        [animate, animateOptions, x, y, rotation, scale, opacity, clipPath]
    );
    return (
        <div ref={container} className="container">
            <div className="logo-box" style={{height: logoSize, width: logoSize}}>
                <img src={logoImg} alt="logo" />
            </div>
        </div>
    );
};
export default LogoBox;
