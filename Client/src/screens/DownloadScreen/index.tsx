import DownloadComponent from "../../components/DowloadComponent";
import ImageApp from "../../images/IndexApp.jpeg";
import "./styles.css";

export default function DownloadScreen() {
  return (
    <section className="w-full my-20 bg-gray-600 p-11 flex flex-col justify-center items-center text-white">
      <h1 className="text-center text-4xl font-bold mb-5">Faça o download do App</h1>
      <DownloadComponent/>
    </section>
  );
}
