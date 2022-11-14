import React from "react";
import "./Hero.scss";
import ubicacion from "../../src/components/asset/icons/Ubicacion.png";
import Telefono from "../../src/components/asset/icons/Telefono.png";
import Email from "../../src/components/asset/icons/Email.png";
import GitHub from "../../src/components/asset/icons/GitHub.png";
import Linkedin from "../../src/components/asset/icons/Linkedin.png";
import Facebook from "../../src/components/asset/icons/Facebook.png";

const Hero = ({ info }) => {
  return (
    <div className="hero">
      <h1>
        <big>❛❛ </big>¡Hola!<small> Mi nombre es </small> <big> Floren</big>,{" "}
        <small>y este es</small>
        <big> ¡mi currículum! ❜❜</big>{" "}
      </h1>
      <div className="nombre"></div>
      <ul className="direccion">
        <li className="Name"> {info.lastName} </li>
        <li>
          {" "}
          <img className="dataicon" src={ubicacion} alt="" /> {info.adress}{" "}
        </li>
        <li>
          {" "}
          <img className="dataicon" src={Telefono} alt="" /> {info.phone}{" "}
        </li>
      </ul>

      <ul className="otrosdatos">
        <li>
          {" "}
          <img className="dataicon" src={Email} alt="" /> {info.email}{" "}
        </li>
        <li>
          {" "}
          <img className="dataicon" src={GitHub} alt="" /> {info.gitHub}{" "}
        </li>
        <li>
          {" "}
          <img className="dataicon" src={Linkedin} alt="" /> {info.linkedIn}{" "}
        </li>
        <li>
          {" "}
          <img className="dataicon" src={Facebook} alt="" /> {info.facebook}{" "}
        </li>
      </ul>
    </div>
  );
};

export default Hero;
