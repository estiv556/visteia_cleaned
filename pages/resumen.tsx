import { useEffect, useState } from "react";
import { useRouter } from "next/router";

type Producto = {
  id: number;
  prompt?: string;
  imageUrl: string;
  tipo: "generado" | "subido";
  precio: number;
  talla: string;
  color: string;
};

export default function Resumen() {
  const [productos, setProductos] = useState<Producto[]>([]);
  const router = useRouter();

  useEffect(() => {
    const carrito = JSON.parse(localStorage.getItem("carrito") || "[]");
    setProductos(carrito);
  }, []);

  const total = productos.reduce((sum, item) => sum + item.precio, 0);

  const confirmarCompra = () => {
    const historial = JSON.parse(localStorage.getItem("historial_compras") || "[]");

    const nuevasCompras = productos.map((item) => ({
      ...item,
      fecha: new Date().toLocaleDateString(),
    }));

    localStorage.setItem(
      "historial_compras",
      JSON.stringify([...historial, ...nuevasCompras])
    );

    localStorage.removeItem("carrito");
    alert("✅ Compra confirmada con éxito.");
    router.push("/historial");
  };

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          🧾 Resumen de tu pedido
        </h1>

        {productos.length === 0 ? (
          <p className="text-center text-gray-600">Tu carrito está vacío.</p>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              {productos.map((item) => (
                <div
                  key={item.id}
                  className="bg-gray-100 p-4 rounded-lg shadow-sm text-center"
                >
                  <img
                    src={item.imageUrl}
                    alt={item.prompt || "Diseño"}
                    className="w-full h-auto rounded mb-2"
                  />
                  <p className="font-semibold text-gray-800">
                    {item.tipo === "generado" ? item.prompt : "Imagen propia"}
                  </p>
                  <p className="text-sm text-gray-600">
                    Talla: {item.talla} | Color: {item.color}
                  </p>
                  <p className="text-sm text-gray-800 mt-1">
                    Precio: ${item.precio} COP
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center mt-6">
              <p className="text-xl font-semibold mb-4">
                Total a pagar: <span className="text-blue-600">${total} COP</span>
              </p>
              <button
                onClick={confirmarCompra}
                className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-full hover:bg-blue-700 transition"
              >
                Confirmar pedido
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
