import React, { useEffect } from "react";
import { LogoBox, ProgressiveText } from "../../ui";
import { angularLogo, reactLogo, figmaLogo } from "../../../assets/logos";
import { gsap } from "gsap";
import "./frontendslide.css";

const FrontendSlide = ({ animate }) => {
    useEffect(() => {
        gsap.set(".fes-title", { clipPath: 'inset(0 100% 0 0)' });
        if (animate)
        {
            gsap.to(".fes-title", {
                clipPath: 'inset(0 0% 0 0)',
                duration: 1,
                delay: 1,
            });
        }
    }, [animate]);

    return (
        <div className="fes-container">
            <div className="fes-item fes-title">
                <ProgressiveText 
                    text="Frontend Development"
                    textStyle={{
                        fontSize: 72,
                        color: 'white',
                        fontWeight: 'bold',
                    }}
                    animate={animate}
                />
            </div>
            <div className="fes-item logo-angular">
                <LogoBox
                    logoImg={angularLogo}
                    logoSize={190}
                    animate={animate}
                    y={window.innerHeight}
                    animateOptions={{ 
                        duration: 2.5,
                        y: 0,
                        delay: 1,
                        ease: "elastic(0.75, 0.3)", 
                    }}
                />
            </div>
            <div className="fes-item logo-react">
                <LogoBox
                    logoImg={reactLogo}
                    logoSize={250}
                    animate={animate}
                    scale={0}
                    animateOptions={{ duration: 1.5, rotation: 360, delay: 1, scale: 1 }}
                />
            </div>
            <div className="fes-item logo-figma">
                <LogoBox
                    logoImg={figmaLogo}
                    logoSize={120}
                    animate={animate}
                    x={-window.innerWidth}
                    animateOptions={{ duration: 1.5, x: 0, rotation: 720, delay: 1 }}
                />
            </div>
            <div className="fes-item fes-list">
                <p style={{fontSize: 36, color: 'white'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, facere voluptate! Cupiditate perspiciatis nemo excepturi suscipit animi iste veritatis harum eveniet nihil ipsum, libero dolor voluptatum saepe in pariatur quos.</p>
            </div>
        </div>
    );
};

export default FrontendSlide;
