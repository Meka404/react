import React from "react";
import "../css/Proyect.css";
import televisiva1 from "../assets/televisiva1.jpg";
import televisiva2 from "../assets/televisiva2.jpg";
import televisiva3 from "../assets/televisiva3.jpg";
import balde1 from "../assets/balde-arrastre.jpg";
import agua from "../assets/agua.jpg";
import robert from "../assets/fondo-negro.jpg";
import foto7 from "../assets/foto7.jpg";
import foto8 from "../assets/foto8.jpg";
import foto9 from "../assets/foto9.jpg";
import { Container } from "react-bootstrap";

export const Proyect = () => {
  const cardsData = [
    { id: 1, image: televisiva1, titulo: "EMPRESA: ACCIONA AGUA S.A. – SUCURSAL PERU" },
    { id: 2, image: televisiva2, titulo: "EMPRESA: CONTRALORIA GENERAL DE LA REPUBLICA" },
    { id: 3, image: televisiva3, titulo: "EMPRESA: CONTRALORIA GENERAL DE LA REPUBLICA" },
    { id: 4, image: balde1, titulo: "EMPRESA: CABO VERDE S.A." },
    { id: 5, image: agua, titulo: "EMPRESA: CONSORCIO SANEAMIENTO LIMA NORTE LOTE 03 (CONSTRUCTORA MPM –" },
    { id: 6, image: foto7, titulo: "EMPRESA: CONSORCIO LIMA NORTE LOTE 2 (COBRA INSTALACIONES Y SERVICIOS S.A.)" },
    { id: 7, image: foto8, titulo: "Empresa: CONSORCIO JULIACA" },
    { id: 8, image: foto9, titulo: "Empresa: GITEC CONSULT GMBHto8" },
    { id: 9, image: foto9, titulo: "EMPRESA: CONSORCIO PUCALLPA" },
  
  
  ];

  return (
    <div className="cardp-grid">
      {cardsData.map((card) => (
        <div className="cardp" key={card.id}>
          <div className="image-container">
            <img src={card.image} alt={`Imagen ${card.id}`} />
            <div className="text-overlay">
              <p>{card.titulo}</p>
              <h1></h1>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};