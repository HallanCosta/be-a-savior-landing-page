import React from "react";
import logoSvg from "./assets/icons/logo.svg";
import appImg from "./assets/images/app.png";

import "./styles.scss";

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
            <a
              href="https://github.com/HallanCosta"
              target="_blank"
              rel="noreferrer"
            >
              Hállan
            </a>
          </li>
          <li>
            <a
              href="https://github.com/HallexCosta"
              target="_blank"
              rel="noreferrer"
            >
              Hállex
            </a>
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

          <a
            href="https://exp-shell-app-assets.s3.us-west-1.amazonaws.com/android/%40hallancosta/be-a-savior-c8507d9f287041a6a39b4a9035d81f1c-signed.apk"
            download
          >
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
