import LogoMb from "../../images/logoMB.png";

export default function AboutAPI() {
  return (
    <section className="bg-gray-600 w-full items-center container flex flex-col p-14 rounded-t-lg">
      <h1 className="text-center font-bold text-3xl md:text-5xl uppercase pb-5 md:pb-28">
        Informações do aplicativo
      </h1>
      <h1 className="text-center font-bold text-3xl md:text-4xl pb-5">
        API usada
      </h1>
      <div className="flex flex-col text-center items-center md:flex-row justify-between w-[100%] md:w-[90%] border-b-2 pb-8 md:px-8">
        <p className="w-full text-center md:w-[45%] text-xl">
          Coincotation é um aplicativo desenvolvido para buscar cotações de
          criptomoedas, o aplicativo faz uso da API provida pelo Mercadobitcoin,
          a API retorna informações da respectiva moeda, dentre essas
          informações estão, o maior valor, o menor, o volume (a quantidade
          negociada), a última venda, a maior oferta a menor oferta e a data da
          informação(em Era Unix). Todas essas respectivas informações são
          baseadas nas ultimas 24 horas até a busca.
        </p>
        <div className="flex flex-col items-center justify-end pt-10 md:pt-0 md:w-[40%] w-full">
          <img src={LogoMb} width={500} />
          <a
            className="font-bold mt-5 bg-orange-600 hover:bg-orange-700 p-5 rounded hover:rounded-2xl transition-all"
            href="https://www.mercadobitcoin.com.br/api-doc/"
            target={"_blank"}
          >
            Link da API aqui
          </a>
        </div>
      </div>
    </section>
  );
}
