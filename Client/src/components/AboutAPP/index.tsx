import Index from "../../images/homeTemplate.png";

export default function AboutAPP() {
  return (
    <section className="bg-gray-600 w-full items-center container flex flex-col p-14">
      <h1 className="text-center font-bold text-3xl md:text-4xl pb-5">
        Tela inicial
      </h1>
      <div className="flex flex-col text-center items-center md:flex-row justify-between w-[100%] md:w-[90%] border-b-2 pb-8 md:px-8">
        <div className="flex flex-col items-center justify-end pt-10 md:pt-0 md:w-[40%] w-full">
          <img src={Index} width={250} className="rounded" />
        </div>
        <p className="w-full text-center md:w-[45%] text-xl">
          A aplicação é dividida em duas telas, a primeira é a tela inicial
          apresenta primeiramente as moedas que estão em alta, e sua cotação
          atual. Após isso temos possiveis mercados de criptomoedas, dentre
          eles, o Mercado Bitcoin, Binance, Coingecko, Coinbase e Novadax (O
          coincotation é um app que não possui parceria com nenhum desses
          mercados de criptomoedas).
        </p>
      </div>
    </section>
  );
}
