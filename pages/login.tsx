import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/crear");
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 px-6">
      <h1 className="text-3xl font-bold mb-4">DISEÑA TU CAMISETA CON IA</h1>
      <p className="mb-6 text-gray-600 text-center">
        Crea diseños para tus camisetas con inteligencia artificial
      </p>
      <button
        onClick={handleLogin}
        className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition"
      >
        Iniciar sesión
      </button>
    </div>
  );
}
