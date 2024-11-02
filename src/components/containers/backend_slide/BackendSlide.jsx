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
                    textStyle={{
                        fontSize: 70,
                        color: '#d9d9d9',
                        fontWeight: 'bold',
                    }}
                    animate={animate}
                />
            </div>
            <div className="bes-content">
                <div className="bes-list">
                    {Array.from({ length: 5 }, (_, i) => (
                        <div key={i} className="bes-list-li">
                            <ProgressiveText
                                text={t(`backend.skills.${i + 1}.t`)}
                                textStyle={{
                                    textAlign: 'left',
                                    fontSize: 24,
                                    color: '#5E17EB',
                                    fontWeight: 'bold',
                                }}
                                animate={animate}
                            />
                            <ProgressiveText
                                text={t(`backend.skills.${i + 1}.d`)}
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
                <div className="bes-logos">
                    <div className="logo-node">
                        <LogoBox
                            logoImg={nodeLogo}
                            logoSize={80}
                            animate={animate}
                        />
                    </div>
                    <div className="logo-mongo">
                        <LogoBox
                            logoImg={mongodbLogo}
                            logoSize={80}
                            animate={animate}
                        />
                    </div>
                    <div className="logo-oracle">
                        <LogoBox
                            logoImg={oracleLogo}
                            logoSize={80}
                            animate={animate}
                        />
                    </div>
                    <div className="logo-nest">
                        <LogoBox
                            logoImg={nestLogo}
                            logoSize={80}
                            animate={animate}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BackendSlide;