import { useRef } from "react";
import css from "../styles/Project.module.scss";
import LeftArrow from "./LeftArrow.svg";
import RightArrow from "./RightArrow.svg";

import p2img from "../../assets/budget app.png";

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
            <a
              href="https://kharchaa.netlify.app/"
              target="_blank"
              className={css.link}
            >
              <p className={css.Pname}> Budget Calculator </p>
              <img src={p2img} alt="project 2" className={css.pImg} />
              <p>
                {" "}
                Kharchaa is a user-friendly home budget calculator designed to
                help you track your expenses and manage your finances
                effectively. Its intuitive interface makes budgeting simple and
                efficient.
              </p>
              <p>icon of technology</p>{" "}
            </a>
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
