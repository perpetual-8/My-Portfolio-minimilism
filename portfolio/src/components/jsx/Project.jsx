import { useRef } from "react";
import css from "../styles/Project.module.scss";
import LeftArrow from "./LeftArrow.svg";
import RightArrow from "./RightArrow.svg";

import p2img from "../../assets/budget app.png";
import p1img from "../../assets/weekaway.png";
import p3img from "../../assets/techbazaar.jpg";

const Aboutme = () => {
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
              <img src={p1img} alt="" className={css.pImg} />
              <p>icon of technology</p>
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
              <p>icon of technology</p>{" "}
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
            <img src={p3img} alt="" className={css.pImg} />
            <p>icon of technology</p>
            <p>
              {" "}
              Implemented user authentication, personalized shopping experience,
              and streamlined checkout process with state management using Redux
              for efficient data handling.
            </p>
          </div>

          <div className={css.card}>
            <p className={css.Pname}> Name </p>
            <img
              src="https://via.placeholder.com/300
"
              alt=""
            />
            <p> 2 line description</p>
            <p>icon of technology</p>
          </div>

          <div className={css.card}>
            <p className={css.Pname}> Name </p>
            <img
              src="https://via.placeholder.com/300
"
              alt=""
            />
            <p> 2 line description</p>
            <p>icon of technology</p>
          </div>

          <div className={css.card}>
            <p className={css.Pname}> Name </p>
            <img
              src="https://via.placeholder.com/300
"
              alt=""
            />
            <p> 2 line description</p>
            <p>icon of technology</p>
          </div>

          <div className={css.card}>
            <p className={css.Pname}> Name </p>
            <img
              src="https://via.placeholder.com/300
"
              alt=""
            />
            <p> 2 line description</p>
            <p>icon of technology</p>
          </div>

          <div className={css.card}>
            <p className={css.Pname}> Name </p>
            <img
              src="https://via.placeholder.com/300
"
              alt=""
            />
            <p> 2 line description</p>
            <p>icon of technology</p>
          </div>
        </div>

        <span
          className={css.scollbtnright}
          onClick={() => {
            scrollRight();
          }}
        >
          {" "}
          <RightArrow />{" "}
        </span>
      </div>
    </div>
  );
};

export default Aboutme;
