import ImageApp from "../../images/IndexApp.jpeg";
import GooglePlay from "../../images/googlePlay.png";
import "./styles.css";

export default function DownloadComponent() {
  return (
    <div className="container p-11 text-white flex flex-col text-center">
      <h1 className="text-center text-2xl md:text-5xl mb-5 font-bold">Faça o download do App</h1>
      <div className="flex md:flex-row md:justify-between md:p-8 items-center flex-col justify-center p-4">
        <div className="flex flex-col items-center bg-gray-600 h-auto p-5 justify-center rounded mb-10 md:mb-0">
          <h1 className="text-xl md:text-3xl md:mb-0 mb-5 text-red-700 md:uppercase font-bold">Faça o download do app</h1>
          <div className="mt-3">
            <img src={GooglePlay} width={300} />
            <p className="text-center font-bold">Clique aqui para baixar</p>
          </div>
        </div>
        <img src={ImageApp} width={250} className="rounded imgApp" />
      </div>
    </div>
  );
}
