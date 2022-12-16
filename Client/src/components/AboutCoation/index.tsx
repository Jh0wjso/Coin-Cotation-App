import Index from "../../images/IndexApp.jpeg";

export default function AboutCoation() {
  return (
    <section className="bg-gray-600 w-full items-center container flex flex-col p-14 rounded-b-lg">
      <h1 className="text-center font-bold text-3xl md:text-4xl pb-5">
        Tela de Cotação
      </h1>
      <div className="flex flex-col text-center items-center md:flex-row justify-between w-[100%] md:w-[90%] pb-8 md:px-8">
        <div className="flex flex-col items-center justify-end pt-10 md:pt-0 md:w-[40%] w-full">
          <img src={Index} width={250} className="rounded" />
        </div>
        <p className="w-full text-center md:w-[45%] text-xl">
          A terceira tela do aplicativo é a tela onde nos mostra a ultima
          cotação da moeda, a maior venda do dia, e o valor de abertura da moeda
          no dia, e o volume negociado n o dia, todos são botões onde explicam
          para caso o usuário tenha alguma dúvida.
        </p>
      </div>
    </section>
  );
}
