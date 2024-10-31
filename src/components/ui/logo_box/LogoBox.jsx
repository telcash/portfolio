import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import "./logobox.css";

const LogoBox = ({ logoImg }) => {
  const container = useRef(null);
  useGSAP(() => {
    gsap.to('.logo-box', { duration: 1, rotation: 720 });
  },
  { scope: container }
);
  return (
    <div ref={container} className="container">
      <div className="logo-box">
        <img src={logoImg} alt="logo" />
      </div>
    </div>
  );
};
export default LogoBox;
