import React from "react";
import "./Experience.scss";
import Experiencia from "../../src/components/asset/icons/Experiencia.png";

const Experience = ({ experience }) => {
  return (
    <button className="Experiencia" onClick={experience}>
      <nav>
        <button>
          {" "}
          <img className="icon" src={Experiencia} alt="" />{" "}
        </button>
      </nav>

      {experience.map((info) => {
        return (
          <section className="experiencia">
            <div key={JSON.stringify(info)}>
              <p className="name">{info.name}</p>
              <p>{info.where}</p>
              <p>{info.date}</p>
              <p>{info.description}</p>
            </div>
          </section>
        );
      })}
    </button>
  );
};

export default Experience;
