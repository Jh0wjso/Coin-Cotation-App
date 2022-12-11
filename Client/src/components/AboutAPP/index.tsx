import Index from "../../images/IndexApp.jpeg";

export default function AboutAPP() {
  return (
    <section className="bg-gray-600 w-full items-center container rounded flex flex-col p-14">
      <h1 className="text-center font-bold text-3xl md:text-4xl pb-5">
        Tela inicial
      </h1>
      <div className="flex flex-col text-center items-center md:flex-row justify-between w-[100%] md:w-[90%] border-b pb-8 md:px-8">
        <p className="w-full text-justify md:w-[40%] text-xl">
          A plicação é dividida em duas telas, a primeira é a tela inicial
          apresenta primeiramente as moedas que estão em alta, e sua cotação
          atual. Após isso temos possiveis mercados de criptomoedas, dentre
          eles, o Mercado Bitcoin, Binance, Coingecko, Coinbase e Novadax(O
          coincotation é um app que não possui parceria com nenhum desses
          mercados de criptomoedas).
        </p>
        <div className="flex flex-col items-center justify-end pt-10 md:pt-0 md:w-[40%] w-full">
          <img src={Index} width={250} className="rounded" />
        </div>
      </div>
    </section>
  );
}
