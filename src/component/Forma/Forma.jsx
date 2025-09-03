import React from "react";
import "./Forma.css";
import Zayavka from "../Zayavka/Zayavka";

const Forma = () => {
  return (
    <div className="forma">
      <div className="forma__left">
        <p>
          <b>Заполните форму, чтобы обсудить проект</b>
        </p>
      </div>
      <Zayavka />
    </div>
  );
};

export default Forma;
