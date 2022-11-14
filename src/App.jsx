import "./App.scss";
import Education from "./components/Educations";
import Experience from "./components/Experience";
import Formation from "./components/Formation";
import Habilities from "./components/Habilities";
import { useState } from "react";
import Hero from "./components/Hero";
import { CV } from "./CV/CV";
import fotoperfil from "../src/components/asset/fotoperfil.jpg";
import fotoportada from "../src/components/asset/portada.jpg";
import Navbar from "./components/Navbar";

console.log(CV);

const App = () => {
  const { hero, education, experience, formation, habilities } = CV;
  const [dropdown, setDropdown] = useState("");

  return (
    <div className="App">
      <nav className="navbar">
        <Navbar setDropdown={setDropdown} />
      </nav>
      <main>
        {dropdown === "experience" && (
          <div>
            <Experience experience={experience} />
          </div>
        )}
        {dropdown === "education" && (
          <div>
            <Education education={education} />
          </div>
        )}
        {dropdown === "formation" && (
          <div>
            <Formation formation={formation} />
          </div>
        )}
        {dropdown === "habilities" && (
          <div>
            <Habilities habilities={habilities} />
          </div>
        )}
      </main>

      <section className="datosPersonales">
        <Hero info={hero} />
      </section>
      <div>
        <div className="sobremi">
          <img className="fotoPortada" src={fotoportada} alt="" />;
          <img className="fotoPerfil" src={fotoperfil} alt="" />
          <p className="sobreMi">
            "Soy una persona trabajadora, organizada, responsable, creativa, de
            rápido aprendizaje, con gran capacidad de empatía y afán de
            superación",
          </p>
          <p className="iconSobreMi"> 🎬 📖 🎵 ✈️ 💻 </p>
        </div>
      </div>
    </div>
  );
};

export default App;
