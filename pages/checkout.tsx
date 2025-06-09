import { useRouter } from "next/router";

export default function Checkout() {
  const router = useRouter();
  const { prompt, imageUrl } = router.query;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
        Confirmar compra
      </h1>

      <div className="max-w-md w-full bg-gray-100 rounded-2xl shadow p-6">
        {imageUrl && (
          <img
            src={imageUrl as string}
            alt="Diseño generado"
            className="w-full h-auto rounded-xl mb-4"
          />
        )}
        <p className="mb-4 text-gray-700">
          Diseño: <span className="font-medium">{prompt}</span>
        </p>
        <button className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-full hover:bg-blue-700 transition">
          Pagar ahora
        </button>
      </div>
    </div>
  );
}


