import React from "react";
import "./Education.scss";
import Formacion from "../../src/components/asset/icons/Formacion.png";

const Education = ({ education }) => {
  return (
    <button className="Educacion" onClick={education}>
      <nav>
        <button>
          <img className="icon" src={Formacion} alt="" />{" "}
        </button>
      </nav>

      {education.map((info) => {
        return (
          <div key={JSON.stringify(info)}>
            <p>{info.name}</p>
            <p>{info.where}</p>
            <p>{info.date}</p>
          </div>
        );
      })}
    </button>
  );
};

export default Education;
