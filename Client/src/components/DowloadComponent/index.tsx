import ImageApp from "../../images/IndexApp.jpeg";
import "./styles.css";

export default function DownloadComponent() {
  return (
    <div className="downloadContent container rounded md:rounded-2xl p-11 text-gray-700 flex flex-col">
      <div className="flex md:flex-row md:justify-between md:p-8 items-center flex-col justify-center p-4">
        <h1 className="text-3xl md:mb-0 mb-5">Informações sobre o app</h1>
        <img src={ImageApp} width={250} className="rounded imgApp" />
      </div>
    </div>
  );
}
