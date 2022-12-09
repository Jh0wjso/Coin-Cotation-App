import ImageApp from "../../images/IndexApp.jpeg";
import GooglePlay from "../../images/googlePlay.png";
import "./styles.css";
import { Link } from "react-router-dom";

export default function DownloadComponent() {
  return (
    <div className="container p-11 text-white flex flex-col text-center">
      <h1 className="text-center text-2xl md:text-5xl mb-5 font-bold uppercase italic">Faça o download, é gratis!</h1>
      <div className="containerContent">
        <div className="flex flex-col items-center bg-gray-600 h-auto p-5 justify-center rounded mb-10">
          <h1 className="text-xl md:text-3xl md:mb-0 mb-5 text-red-700 md:uppercase font-bold">Faça o download do app</h1>
          <div className="mt-3">
            <a href={""} target="_blank" >
              <img src={GooglePlay} className="hover:opacity-75" width={300} />
            </a>
            <p className="text-center font-bold">Clique aqui para baixar</p>
          </div>
        </div>
        <img src={ImageApp} width={250} className="rounded imgApp" />
      </div>
    </div>
  );
}
