import Hero from "./components/jsx/hero";
import Aboutme from "./components/jsx/Aboutme";
import css from "./App.module.scss";
import Skills from "./components/jsx/Skills";
import Project from "./components/jsx/Project";

import Parrallex from "./components/jsx/Parrallex";
function App() {
  return (
    <>
      <div className={css.wrapper}>
        <div className={css.parrallex}>
          <Hero />
        </div>
        <Aboutme />
        <Skills />

        <div className={css.artparrallex}>
          <Parrallex />
        </div>

        <Project />
      </div>
    </>
  );
}

export default App;
