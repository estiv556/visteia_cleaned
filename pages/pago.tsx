import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Pago() {
  const [pagado, setPagado] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (pagado) {
        router.push("/gracias");
      }
    }, 3000);

    return () => clearTimeout(timeout);
  }, [pagado, router]);

  const handlePagar = () => {
    setPagado(true);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white p-6">
      <h1 className="text-2xl font-bold mb-6">💳 Finalizar compra</h1>

      {pagado ? (
        <p className="text-green-600 text-lg">✅ Pago exitoso... Redirigiendo</p>
      ) : (
        <button
          onClick={handlePagar}
          className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition"
        >
          Simular pago
        </button>
      )}
    </div>
  );
}
