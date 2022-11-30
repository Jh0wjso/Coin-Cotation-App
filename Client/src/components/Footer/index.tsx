import { Link } from "react-router-dom";

import Logo from "../../images/Logo.png";

export default function Footer() {
  return (
    <footer className="p-4 flex flex-col w-full justify-center items-center text-white bg-gray-700 shadow md:px-6 md:py-8">
      <div className="container sm:flex flex-col md:flex-row sm:items-center sm:justify-between">
        <Link to="/" className="flex items-center mx-3 mb-2 sm:mb-0">
          <img src={Logo} width={50} />
          <span className="self-center text-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            WatchBall
          </span>
        </Link>
        <ul className="flex text-center flex-wrap items-center mb-6 text-sm sm:mb-0">
          <li>
            <Link to="/" className="mr-4 hover:text-gray-500 md:mr-6 ">
              Início
            </Link>
          </li>
          <li>
            <Link to="/" className="mr-4 hover:text-gray-500 md:mr-6">
              Download
            </Link>
          </li>
          <li>
            <Link to="#" className="mr-4 hover:text-gray-500 md:mr-6 ">
              Sobre
            </Link>
          </li>
          <li>
            <Link to="/" className="hover:text-gray-500">
              Contato
            </Link>
          </li>
        </ul>
      </div>
      <div className="container">
        <hr className="my-6 sm:mx-auto lg:my-8" />
        <span className="block text-sm sm:text-center dark:text-gray-400">
          © 2022{" "}
          <Link to="/" className="hover:underline hover:text-gray-500">
            CoinCotation
          </Link>
        </span>
      </div>
    </footer>
  );
}
