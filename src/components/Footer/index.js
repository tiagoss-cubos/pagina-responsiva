import React from "react";
import logo from "../../assets/logo.svg";
import "./style.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-left">
        <img src={logo} alt="logo" />
        <p>
          A expressão Lorem ipsum em design gráfico e editoração é um texto
          padrão em latim utilizado na produção gráfica para preencher os
          espaços de texto em publicações para testar e ajustar aspectos visuais
          antes de utilizar conteúdo real.
        </p>
      </div>
      <div className="footer-right">
        <p>
          A expressão Lorem ipsum em design gráfico e editoração é um texto
          padrão em latim utilizado na produção gráfica para preencher os
          espaços de texto em publicações para testar e ajustar aspectos visuais
          antes de utilizar conteúdo real.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
