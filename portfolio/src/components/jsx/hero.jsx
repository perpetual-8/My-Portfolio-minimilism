import { useEffect, useRef } from "react";
import css from "../styles/hero.module.scss";
import ProfileBar from "./ProfileBar";
import { gsap } from "gsap";
 
const Hero = () => {
   
  const textRef = useRef(null);

  useEffect(() => {
    const text = textRef.current;
    const chars = text.innerText.split('');

    text.innerHTML = chars.map(char => `<span>${char}</span>`).join('');

    gsap.timeline()
      .fromTo(
        text.children,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out', stagger: 0.05 }
      );
  }, []);
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Hamza Bhutta FD cv.pdf"; // Updated path to your CV file
    link.download = "Hamza Bhutta FD cv.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  

  return (
    <div className={css.container}>
      
      <p className={css.name} ref={textRef}>Hamza Ahmad Bhutta </p>
      <p className={css.role}>Software Engineer </p>
      <ProfileBar />
      {/* <button onClick={handleDownload} className={css.button}>
        Download CV
      </button> */}
    </div>
  );
};

export default Hero;
