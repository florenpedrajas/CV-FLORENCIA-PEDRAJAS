import React from "react";
import "./Habilities.scss";
import Habilities from "../../src/components/asset/icons/Habilidades.png";

const Habilidades = ({ habilities }) => {
  return (
    <button className="Habilidades" onClick={habilities}>
      <nav>
        <button>
          {" "}
          <img className="icon" src={Habilities} alt="" />
        </button>
      </nav>

      {habilities.map((info) => {
        return (
          <div key={JSON.stringify(info)}>
            <p>{info.name}</p>
          </div>
        );
      })}
    </button>
  );
};

export default Habilidades;
