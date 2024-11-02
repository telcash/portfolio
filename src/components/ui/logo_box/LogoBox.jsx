import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import "./logobox.css";

const LogoBox = ({ logoImg, logoSize, animate, animateOptions, x, y, scale }) => {
    const container = useRef(null);

    useEffect(
        () => {
            gsap.set(container.current, { x: x ?? 0, y: y ?? 0 , rotation: 0, scale: scale ?? 1 });
            if (animate) {
                gsap.to(container.current, animateOptions || {});
            }
        },
        [animate, animateOptions, x, y, scale]
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
