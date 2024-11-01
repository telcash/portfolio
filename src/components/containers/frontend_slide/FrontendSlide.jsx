import React from "react";
import { LogoBox, ProgressiveText } from "../../ui";
import { figmaLogo, reactLogo, angularLogo } from "../../../assets/logos";
import { useTranslation } from "react-i18next";
import "./frontendslide.css";

const FrontendSlide = ({ animate }) => {
    const [t] = useTranslation("global");

    return (
        <div className="fes-container">
            <div className="fes-title">
                <ProgressiveText
                    text={t("frontend.title")}
                    textStyle={{
                        fontSize: 70,
                        color: '#d9d9d9',
                        fontWeight: 'bold',
                    }}
                    animate={animate}
                />
            </div>
            <div className="fes-content">
                <div className="fes-logos">
                    <div className="logo-figma">
                        <LogoBox
                            logoImg={figmaLogo}
                            logoSize={80}
                            animate={animate}
                            x={-window.innerWidth}
                            animateOptions={{ duration: 1.5, x: 0, rotation: 720, delay: 1 }}
                        />
                    </div>
                    <div className="logo-react">
                        <LogoBox
                            logoImg={reactLogo}
                            logoSize={150}
                            animate={animate}
                            scale={0}
                            animateOptions={{ duration: 1.5, rotation: 360, delay: 1, scale: 1 }}
                        />
                    </div>
                    <div className="logo-angular">
                        <LogoBox
                            logoImg={angularLogo} 
                            logoSize={120}
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
                </div>
                <div className="fes-list">
                    {Array.from({ length: 5 }, (_, i) => (
                        <div key={i} className="fest-list-li">
                            <ProgressiveText
                                text={t(`frontend.skills.${i + 1}.t`)}
                                textStyle={{
                                    textAlign: 'left',
                                    fontSize: 24,
                                    color: '#5E17EB',
                                    fontWeight: 'bold',
                                }}
                                animate={animate}
                            />
                            <ProgressiveText
                                text={t(`frontend.skills.${i + 1}.d`)}
                                textStyle={{
                                    textAlign: 'left',
                                    marginLeft: 20,
                                    fontSize: 18,
                                    color: '#d9d9d9',
                                    fontWeight: 'bold',
                                }}
                                animate={animate}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FrontendSlide;
