import DownloadComponent from "../../components/DowloadComponent";
import ImageApp from "../../images/IndexApp.jpeg";
import "./styles.css";

export default function DownloadScreen() {
  return (
    <section className="downloadContent bg-gray-600 bg-opacity-50 min-h-screen w-full p-11 flex flex-col justify-center items-center text-white">
      <div className="bg-gray-600 container rounded md:rounded-2xl w-full">
        <DownloadComponent/>
      </div>
    </section>
  );
}
