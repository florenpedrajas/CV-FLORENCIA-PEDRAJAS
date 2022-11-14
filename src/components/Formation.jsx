import React from "react";
import "./Formation.scss";
import Formacion from "../../src/components/asset/icons/Formacion.png";

const Formation = ({ formation }) => {
  return (
    <button className="Formacion" onClick={formation}>
      <nav>
        <button>
          <img className="icon" src={Formacion} alt="" />
        </button>
      </nav>

      {formation.map((info) => {
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

export default Formation;
