import { useEffect, useState } from "react";

type Compra = {
  id: number;
  prompt?: string;
  imageUrl: string;
  tipo: "generado" | "subido";
  fecha: string;
};

export default function HistorialCompras() {
  const [compras, setCompras] = useState<Compra[]>([]);

  useEffect(() => {
    const datosGuardados = localStorage.getItem("historial_compras");
    if (datosGuardados) {
      setCompras(JSON.parse(datosGuardados));
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow p-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-900 text-center">
          Historial de Compras
        </h1>

        {compras.length === 0 ? (
          <p className="text-center text-gray-600">
            Aún no has realizado compras.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {compras.map((item) => (
              <div
                key={item.id}
                className="bg-gray-100 p-4 rounded-xl shadow flex flex-col items-center"
              >
                <img
                  src={item.imageUrl}
                  alt={item.prompt || "Diseño subido"}
                  className="w-full h-auto rounded-lg mb-3"
                />
                <p className="text-center font-medium text-gray-800 mb-1">
                  {item.tipo === "generado"
                    ? `Diseño: ${item.prompt}`
                    : "Imagen propia"}
                </p>
                <p className="text-sm text-gray-500 mb-1">Fecha: {item.fecha}</p>
              </div>
            ))}
          </div>
        )}

        <p className="text-center mt-10 text-sm text-gray-500">
          ¿Tienes un diseño propio?{" "}
          <a
            href="/crear"
            className="text-blue-600 font-medium hover:underline"
          >
            Sube tu imagen aquí
          </a>
        </p>
      </div>
    </div>
  );
}
