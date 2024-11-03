import React from "react";
import { LogoBox, ProgressiveText } from "../../ui";
import { nodeLogo, mongodbLogo, oracleLogo, nestLogo } from "../../../assets/logos";
import { useTranslation } from "react-i18next";
import './backendslide.css';

const BackendSlide = ({ animate }) => {
    const [t] = useTranslation("global");
    
    return (
        <div className="bes-container">
            <div className="bes-title">
                <ProgressiveText
                    text={t("backend.title")}
                    animate={animate}
                />
            </div>
            <div className="bes-content">
                <div className="bes-list">
                    {Array.from({ length: 5 }, (_, i) => (
                        <div key={i} className="bes-list-li">
                            <div className="best-list-subtitle">
                                <ProgressiveText
                                    text={t(`backend.skills.${i + 1}.t`)}
                                    animate={animate}
                                />
                            </div>
                            <div className="best-list-description">
                                <ProgressiveText
                                    text={t(`backend.skills.${i + 1}.d`)}
                                    animate={animate}
                                />
                            </div>
                        </div>
                    ))}
                </div>
                <div className="bes-logos">
                    <div className="logo-node">
                        <LogoBox
                            logoImg={nodeLogo}
                            logoSize={window.innerWidth > 900 ? 80 : 50}
                            animate={animate}
                            y={-window.innerHeight}
                            animateOptions={[{
                                duration: 2,
                                y: 0,
                                delay: 1,
                                ease: "elastic(0.75, 0.3)",
                            }]}
                        />
                    </div>
                    <div className="logo-mongodb">
                        <LogoBox
                            logoImg={mongodbLogo}
                            logoSize={window.innerWidth > 900 ? 100 : 50}
                            clipPath={'inset(0 100% 0 0)'}
                            animate={animate}
                            animateOptions={[{ duration: 2, clipPath: 'inset(0 0% 0 0)', delay: 1 }]}
                        />
                    </div>
                    <div className="logo-oracle">
                        <LogoBox
                            logoImg={oracleLogo}
                            logoSize={window.innerWidth > 900 ? 120 : 50}
                            opacity={0}
                            x={-window.innerWidth}
                            animate={animate}
                            animateOptions={[{ duration: 2, x: 0, opacity: 1, delay: 1, ease: "power1.in" }]}
                        />
                    </div>
                    <div className="logo-nest">
                        <LogoBox
                            logoImg={nestLogo}
                            logoSize={window.innerWidth > 900 ? 140 : 50 }
                            animate={animate}
                            scale={0}
                            animateOptions={[{ duration: 2, scale: 1, delay: 1, ease: "elastic(0.75, 0.3)" }]}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BackendSlide;