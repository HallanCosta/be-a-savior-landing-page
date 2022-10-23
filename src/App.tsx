import React from "react";
import logoSvg from "./assets/icons/logo.svg";
import appImg from "./assets/images/app.png";
import "./App.scss";

import { ArrowRight } from "react-feather";

function App() {
  return (
    <div className="be-a-savior">
      <header>
        <div className="logo">
          <img src={logoSvg} alt="logo-be-a-savior" />
        </div>

        <div className="invisible"></div>

        <label className="github" htmlFor="Acessar o Github">
          Acessar o Github <ArrowRight size={24} color="#ffffff" />{" "}
        </label>

        <ul>
          <li>
            <a href="https://github.com/HallanCosta">Hállan</a>
          </li>
          <li>
            <a href="https://github.com/HallexCosta">Hállex</a>
          </li>
        </ul>
      </header>
      <main className="container">
        <div className="column">
          <h1>Nosso App - Be a Savior</h1>
          <p>
            A plataforma promete entregar melhor acessibilidade para pessoas que
            desejam ajudar incidentes, pois ela centraliza toda informação em um
            único sistema, tornando assim mais fácil e prático contribuir de
            alguma forma.
          </p>

          <a href="#" download>
            Baixar App
          </a>
        </div>

        <div className="column">
          <img src={appImg} alt="Imagem do app" />
        </div>
      </main>
    </div>
  );
}

export default App;
