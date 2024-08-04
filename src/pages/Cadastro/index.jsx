import { Link } from "react-router-dom"; // Importando o Link

function cadastro() {
  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-8 border border-gray-300 rounded-lg shadow-lg ">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Cadastro
      </h1>
      <form className="flex flex-col gap-6">
        <input
          placeholder="Nome"
          type="text"
          className="w-full px-3 py-2 border border-grey-300 rounded-md focus:outline-none"
        />
        <input
          placeholder="E-mail"
          type="email"
          className="w-full px-3 py-2 border border-grey-300 rounded-md focus:outline-none"
        />
        <input
          placeholder="Senha"
          type="password"
          className="w-full px-3 py-2 border border-grey-300 rounded-md focus:outline-none"
        />
        <button className="w-full bg-violet-700 text-white py-2 px-4 rounded-md hover:bg-violet-950 ">
          Cadastrar-se
        </button>
      </form>
      <Link
        className="text-violet-400  hover:underline hover:text-violet-700 mt-4 block text-center"
        to="/login"
      >
        Já tem uma conta? Faça login
      </Link>
    </div>
  );
}
export default cadastro;
