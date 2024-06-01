 
import css from "../styles/hero.module.scss"
import ProfileBar from "./ProfileBar"

const Hero = () => {


  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Hamza Bhutta FD cv.pdf'; // Updated path to your CV file
    link.download = 'Hamza Bhutta FD cv.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  

  return (
    <div className={css.container}>

    
        <p className={css.name}>Hamza Ahmad Bhutta </p>
        <p className={css.role}>Software Engineer </p>
        <ProfileBar/><button onClick={handleDownload} className={css.button}>
      Download CV
    </button>
    </div>
  )
}

export default Hero
