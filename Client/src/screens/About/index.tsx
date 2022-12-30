import AboutAPI from "../../components/AboutAPI";
import AboutAPP from "../../components/AboutAPP";
import AboutCotation from "../../components/AboutCotation";
import AboutSearch from "../../components/AboutSearch";

export default function About() {
  return (
    <section className="bg-gray-600 bg-opacity-50 w-full min-h-screen flex flex-col items-center justify-center py-20 text-white">
      <AboutAPI />
      <AboutAPP />
      <AboutSearch />
      <AboutCotation />
    </section>
  );
}
