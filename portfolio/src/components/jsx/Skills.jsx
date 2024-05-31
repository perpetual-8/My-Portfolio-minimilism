import css from "../styles/Skills.module.scss"
import { FaReact } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { PiFileHtmlLight } from "react-icons/pi";
import { PiFileCss } from "react-icons/pi";
import { FaGitAlt } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";



const Skills = () => {
  return (
    <div className={css.container}>
        <div className={css.wrapper}>
      <p className={css.header1}>Skills</p>
     
     <div className={css.card_div}>
     
        <div className={css.card}>
            <FaReact   className={`${css.reactIcon} ${css.Icon}`}/>
            <p className={css.cardline}>React</p>
        </div>

        

        <div className={css.card}>
            <FaNode  className={css.Icon}/>
            <p  className={css.cardline}>Node</p>
        </div>

        <div className={css.card}>
            <PiFileHtmlLight className={css.Icon}/>
            <p  className={css.cardline}>HTML</p>
        </div>

        <div className={css.card}>
            <PiFileCss className={css.Icon}/>
            <p  className={css.cardline}>CSS</p>
        </div>


        <div className={css.card}>
            <FaGitAlt className={css.Icon}/>
            <p  className={css.cardline}>Git</p>
        </div>
        <div className={css.card}>
            <SiMongodb className={css.Icon}/>
            <p  className={css.cardline}>MongoDB</p>
        </div>

        <div className={css.card}>
            <SiMysql className={css.Icon}/>
            <p  className={css.cardline}>MySQL</p>
        </div>

        <div className={css.card}>
            <SiJavascript className={css.Icon}/>
            <p  className={css.cardline}>Javascript</p>
        </div>

        <div className={css.card}>
            <FaPython className={css.Icon}/>
            <p  className={css.cardline}>Python</p>
        </div>

        <div className={css.card}>
            <SiCplusplus className={css.Icon}/>
            <p  className={css.cardline}>C++</p>
        </div>

        
        

     </div>


    </div>
    </div>
    
  );
};

export default Skills;
