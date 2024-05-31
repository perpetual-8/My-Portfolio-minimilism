 
import css from "../styles/hero.module.scss"
import ProfileBar from "./ProfileBar"

const Hero = () => {
  return (
    <div className={css.container}>


        <p className={css.name}>Hamza Ahmad Bhutta </p>
        <p className={css.role}>Software Engineer </p>
        <ProfileBar/>
    </div>
  )
}

export default Hero
