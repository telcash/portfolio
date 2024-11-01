import React from "react";
import { LogoBox, ProgressiveText } from "../../ui";
import { angularLogo, reactLogo, figmaLogo } from "../../../assets/logos";
import { useTranslation } from "react-i18next";
import "./frontendslide.css";

const FrontendSlide = ({ animate }) => {
    const [t] = useTranslation("global");

    return (
        <div className="fes-container">
            <div className="fes-item fes-title">
                <ProgressiveText
                    text={t("frontend.title")}
                    textStyle={{
                        fontSize: 100,
                        color: '#5E17EB',
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
                {Array.from({ length: 5 }, (_, i) => (
                    <div key={i} className="fest-list-li">
                        <ProgressiveText
                            text={t(`frontend.skills.${i + 1}`)}
                            textStyle={{
                                fontSize: 36,
                                color: 'white',
                                fontWeight: 'bold',
                            }}
                            animate={animate}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FrontendSlide;
