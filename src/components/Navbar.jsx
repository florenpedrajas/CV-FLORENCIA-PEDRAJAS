import React from "react";
import Formacion from "../../src/components/asset/icons/Formacion.png";
import Experiencia from "../../src/components/asset/icons/Experiencia.png";
import Habilidades from "../../src/components/asset/icons/Habilidades.png";
import "./Navbar.scss";

const navbar = ({ setDropdown }) => {
  return (
    <ul className="datos">
      <li>
        <p onClick={() => setDropdown("experience")}>
          <img className="icon" src={Experiencia} alt="" />
          <br></br>Experiencia
        </p>
      </li>
      <li>
        <p onClick={() => setDropdown("education")}>
          <img className="icon" src={Formacion} alt="" />
          <br></br>Educacion
        </p>
      </li>
      <li>
        <p onClick={() => setDropdown("formation")}>
          <img className="icon" src={Formacion} alt="" />
          <br></br>Formacion
        </p>
      </li>
      <li>
        <p onClick={() => setDropdown("habilities")}>
          <img className="icon" src={Habilidades} alt="" />
          <br></br>Habilidades
        </p>
      </li>
    </ul>
  );
};

export default navbar;
