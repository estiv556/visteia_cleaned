import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Carrito() {
  const [imageUrl, setImageUrl] = useState("");
  const router = useRouter();

  useEffect(() => {
    const savedImage = sessionStorage.getItem("camiseta");
    if (savedImage) {
      setImageUrl(savedImage);
    }
  }, []);

  const handlePagar = () => {
    router.push("/pago");
  };

  return (
    <div className="min-h-screen bg-white p-6 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">🛒 Tu carrito</h1>

      {imageUrl ? (
        <div className="border rounded-md p-4 shadow-md text-center">
          <img
            src={imageUrl}
            alt="Diseño"
            className="w-64 h-64 object-cover mb-4 rounded"
          />
          <p className="font-semibold text-lg mb-2">Diseño personalizado</p>
          <p className="text-gray-500 mb-4">$49.900 COP</p>

          <button
            onClick={handlePagar}
            className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition"
          >
            Ir a pagar
          </button>
        </div>
      ) : (
        <p className="text-gray-600">Tu carrito está vacío</p>
      )}
    </div>
  );
}
