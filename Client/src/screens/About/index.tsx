import AboutAPI from "../../components/AboutAPI";
import AboutAPP from "../../components/AboutAPP";

export default function About() {
  return (
    <section className="bg-gray-600 bg-opacity-50 w-full min-h-screen flex flex-col items-center justify-center py-20 text-white">
      <AboutAPI />
      <AboutAPP />
    </section>
  );
}
