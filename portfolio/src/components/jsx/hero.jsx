import { useEffect, useRef } from "react";
import css from "../styles/hero.module.scss";
import ProfileBar from "./ProfileBar";
import { gsap } from "gsap";
import SplitTextJS from "split-text-js";
import { useGSAP } from "@gsap/react";

const Hero = () => {
  gsap.registerPlugin(useGSAP);
 
  const role = useRef([]);

  useGSAP(() => {
    
    const tl = gsap.timeline({ repeat: -1,ease: "bounce"});

    role.current.forEach((roleElement, index) => {
      const splitText = new SplitTextJS(roleElement, { type: "chars" });

      tl.from(splitText.chars, {
        opacity: 0, 
        y: 10, 
        rotateX: -90, 
        stagger: {amount:0.3},
        duration: 0.3

      },  ">") // Start the next animation after the previous one
      .to(splitText.chars, {
        delay:2,
        opacity: 1, 
        y: -10, 
        rotateX: 90, 
        stagger: {amount:0.3},
        duration: 0.3
      });
   
    });



  });

  return (
    <div className={css.container}>
      <p className={css.name}>Hamza Ahmad Bhutta</p>
      <div className={css.textwrapper}>
        <p className={css.role} ref={(el) => (role.current[0] = el)}>Software Engineer</p>
        <p className={css.role} ref={(el) => (role.current[1] = el)}>Frontend Developer</p>
        <p className={css.role} ref={(el) => (role.current[2] = el)}>Web App Developer</p>
      </div>
      <ProfileBar />
      {/* <button onClick={handleDownload} className={css.button}>
        Download CV
      </button> */}
    </div>
  );
};

export default Hero;
