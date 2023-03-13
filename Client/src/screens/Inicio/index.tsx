import { Link } from "react-router-dom";

import Cover from "../../images/CoverCC.png";
import Index from "../../images/homeTemplate.png";
import SearchScreen from "../../images/searchScreenTemplate.png";
import CotationScreen from "../../images/cotationScreen.png";

import "./styles.css";

export default function Inicio() {
  return (
    <section className="bg-gray-600 bg-opacity-50 w-full min-h-screen flex items-center justify-center">
      <div className="container rounded bg-gray-600 w-full text-white flex flex-col items-center p-5 my-10">
        <img src={Cover} width={1000} className="border-b-2" />
        <div className="flex flex-col justify-center items-center w-[70%] my-7 border-b-2">
          <p className="font-bold text-xl text-center">
            CoinCation é uma app grátis para android apenas por hora, o app
            basicamente serve para buscar cotação de cripto moedas, algumas das
            moedas mais famosas do mercado. Você acha que falta alguma moeda?
            Entre em contato conosco na nossa área de contato, ou clicando no
            botão à baixo.
          </p>
          <Link
            to="/contact"
            className="hover:bg-red-700 bg-red-600 font-bold p-5 text-xl my-5 rounded text-center"
          >
            Contato
          </Link>
        </div>
        <section className="w-[100%] justify-center items-center my-10 flex flex-col">
          <h1 className="text-5xl font-bold text-center">Imagens de exemplo</h1>
          <div className="flex flex-row items-center justify-center my-20 text-center">

            <div className="flex flex-col items-center">
              <p className="font-bold text-xl">Tela Inicial</p>
              <img src={Index} width={300} />
            </div>

            <div className="flex flex-col items-center">
              <p className="font-bold text-xl">Tela de Busca.</p>
              <img src={SearchScreen} width={300} />
            </div>

            <div className="flex flex-col items-center">
              <p className="font-bold text-xl">Tela de Cotação.</p>
              <img src={CotationScreen} width={310} />
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
