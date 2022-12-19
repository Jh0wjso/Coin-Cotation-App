import SearchScreen from "../../images/searchScreenTemplate.png";

export default function AboutSearch() {
  return (
    <section className="bg-gray-600 w-full items-center container flex flex-col p-14">
      <h1 className="text-center font-bold text-3xl md:text-4xl pb-5">
        Tela Busca
      </h1>
      <div className="flex flex-col text-center items-center md:flex-row justify-between w-[100%] md:w-[90%] border-b-2 pb-8 md:px-8">
        <p className="w-full text-center md:w-[45%] text-xl">
          A segunda é a tela de busca por moedas temos um campo de entrada para
          a moeda desejada, ali o programa busca na base de dados e retorna uma
          lista com as moedas pré cadastradas, àbaixo temos o acesso rapido a
          moedas que estão em alta.
        </p>
        <div className="flex flex-col items-center justify-end pt-10 md:pt-0 md:w-[40%] w-full">
          <img src={SearchScreen} width={250} className="rounded" />
        </div>
      </div>
    </section>
  );
}
