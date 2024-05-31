import { useRef } from "react";
import css from "../styles/Project.module.scss";
import LeftArrow from "./LeftArrow.svg";
import RightArrow from "./RightArrow.svg";

import p2img from "../../assets/budget app.png";
import p1img from "../../assets/weekaway.png";
import p3img from "../../assets/techbazaar.jpg";
import p4img from "../../assets/amazon.png";
////////////////////
///////////////////////

import { FaReact } from "react-icons/fa";
import { BiLogoTailwindCss } from "react-icons/bi";
import { MdCss } from "react-icons/md";
import { TbBrandVite } from "react-icons/tb";
import { FaBootstrap } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";

const Project = () => {
  const cardListRef = useRef(null);

  const scrollRight = () => {
    cardListRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };
  const scrollLeft = () => {
    cardListRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <p className={css.header1}>Projects</p>

        <span
          className={css.scollbtnleft}
          onClick={() => {
            scrollLeft();
          }}
        >
          <LeftArrow />{" "}
        </span>

        <div className={css.cardList} ref={cardListRef}>
          <div className={css.card}>
            <a
              href="https://weekaway2.netlify.app/"
              target="_blank"
              className={css.link}
            >
              <p className={css.Pname}> WEEKAWAY </p>
              <img src={p1img} alt="weekaway" className={css.pImg} />
              <span className={css.iconlist}>
                <p className={css.icon}>
                  <FaReact />{" "}
                </p>
                <p className={css.icon}>
                  <BiLogoTailwindCss />
                </p>
              </span>
              <p>
                {" "}
                Sleek static website built with React.js and Tailwind CSS,
                featuring captivating design elements and a single-page layout
                for effortless navigation and immersive visual appeal.
              </p>{" "}
            </a>
          </div>

          <div className={css.card}>
            <a
              href="https://kharchaa.netlify.app/"
              target="_blank"
              className={css.link}
            >
              <p className={css.Pname}> Budget Calculator </p>
              <img src={p2img} alt="project 2" className={css.pImg} />
              <span className={css.iconlist}>
                <p className={css.icon}>
                  <FaReact />{" "}
                </p>
                <p className={css.icon}>
                  <MdCss />
                </p>
              </span>
              <p className={css.desc}>
                {" "}
                Kharchaa is a user-friendly home budget calculator designed to
                help you track your expenses and manage your finances
                effectively. Its intuitive interface makes budgeting simple and
                efficient.
              </p>
            </a>
          </div>

          <div className={css.card}>
            <p className={css.Pname}> TechBazaar </p>
            <img src={p3img} alt="Techbazaar" className={css.pImg} />
            <span className={css.iconlist}>
              <p className={css.icon}>
                <FaReact />{" "}
              </p>
              <p className={css.icon}>
                <MdCss />
              </p>
              <p className={css.icon}>
                <FaBootstrap />
              </p>
              <p className={css.icon}>
                <FaNodeJs />
              </p>
              <p className={css.icon}>
                <BiLogoMongodb />
              </p>
              
            </span>
            <p>
              {" "}
              Implemented user authentication, personalized shopping experience,
              and streamlined checkout process with state management using Redux
              for efficient data handling.
            </p>
          </div>

          <div className={css.card}>
            <a
              href="https://amazonclientside.netlify.app/"
              target="_blank"
              className={css.link}
            >
              <p className={css.Pname}> AmazonClient </p>
              <img src={p4img} alt="Amazon" className={css.pImg} />
              <span className={css.iconlist}>
                <p className={css.icon}>
                  <FaReact />{" "}
                </p>
                <p className={css.icon}>
                  <TbBrandVite />
                </p>
                <p className={css.icon}>
                <MdCss />
              </p>
              </span>
              <p className={css.desc}>
                {" "}
                Developed a two-page Amazon client featuring a home page and a
                product page, with functionality to add items to the cart,
                demonstrating modern e-commerce interface design and user
                interaction.
              </p>
            </a>
          </div>
        </div>

        <span
          className={css.scollbtnright}
          onClick={() => {
            scrollRight();
          }}
        >
          
          <RightArrow /> 
        </span>
      </div>
    </div>
  );
};

export default Project;
