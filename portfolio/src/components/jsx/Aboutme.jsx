import css from "../styles/Aboutme.module.scss"


const Aboutme = () => {
  return (
    <div className={css.container}>
        <div className={css.wrapper}>
      <p className={css.header1}>About me</p>
      <p className={css.name}> Hi, I am Hamza Bhutta</p>
      <p className={css.intro}>
      With a strong passion for software development and web technologies, I
      focus on creating solutions that make life easier and more enjoyable. My
      goal is to innovate and deliver high-quality software that has a positive
      impact.</p>

      <div className={css.footer}>
        <span>
            <p className={css.header2}>E-mail</p>
            <p className={css.line}>hamzaabhutta@gmail.com</p>
        </span>
        <span>
            <p className={css.header2}>Language</p>
            <p className={css.line}>Urdu | English</p>
        </span>
        <span>
            <p  className={css.header2}>Education</p>
            <p className={css.line2}>Bachelor’s in Computer Science (Bs CS)</p>
            <p className={css.line3}>National University of Computer and Emerging Sciences (FAST-NU)</p>

        </span>
      </div></div>
    </div>
    
  );
};

export default Aboutme;
