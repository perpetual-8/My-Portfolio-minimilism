import { FaLinkedin } from "react-icons/fa";
import css from "../styles/ProfileBar.module.scss"
import { FaGithub } from "react-icons/fa";
const ProfileBar = () => {
  return (
    <div>
      <div className={css.wrapper}>
        <a  className={css.link} target="_blank" href="https://www.linkedin.com/in/hamzabhutta/">
          <FaLinkedin />
        </a>
        
          <a  className={css.link} target="_blank" href="https://github.com/perpetual-8"> <FaGithub /></a>
         
      </div>
    </div>
  );
};

export default ProfileBar;
