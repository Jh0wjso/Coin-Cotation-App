export default function ContactScreen() {
  return (
    <section className="w-full flex flex-col items-center justify-center">
      <div className="bg-gray-600 h-[20vh] w-full flex items-center justify-center flex-col">
        <h1 className="text-red-700 text-6xl font-bold">Contato</h1>
        <h1 className="text-white text-center text-lg">
          Entre em contato para sugestões, parcerias, etc.
        </h1>
      </div>
      <section className="dark:bg-gray-900">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            Tem um problema técnico? Deseja enviar feedback sobre um recurso?
            Parcerias? Nos informe.
          </p>
          <form action="send" className="space-y-8">
            <div>
              <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Seu e-mail
              </p>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="nome@exemplo.com"
                required
              />
            </div>
            <div>
              <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Assunto
              </p>
              <input
                type="text"
                id="subject"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Ex. Trabalho"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Sua mensagem
              </p>
              <textarea
                id="message"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Sua mensagem aqui..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="py-3 bg-red-800 px-5 text-sm font-medium text-center text-white rounded-lg sm:w-fit hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Send message
            </button>
          </form>
        </div>
      </section>
    </section>
  );
}
