import { useEffect, useState } from "react";
import Link from "next/link";

export default function Perfil() {
  const [totalCompras, setTotalCompras] = useState(0);
  const [totalGastado, setTotalGastado] = useState(0);
  const [carritoCount, setCarritoCount] = useState(0);

  useEffect(() => {
    const compras = JSON.parse(localStorage.getItem("historial_compras") || "[]");
    const carrito = JSON.parse(localStorage.getItem("carrito") || "[]");

    setTotalCompras(compras.length);
    setCarritoCount(carrito.length);

    const total = compras.reduce((sum: number, item: any) => sum + (item.precio || 0), 0);
    setTotalGastado(total);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-10">
      <div className="bg-white max-w-md w-full rounded-xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">👤 Mi Perfil</h1>

        <div className="space-y-3">
          <p><strong>Nombre:</strong> Estiven Casallas</p>
          <p><strong>Email:</strong> estiven@email.com</p>
          <hr className="my-4" />

          <p><strong>Compras realizadas:</strong> {totalCompras}</p>
          <p><strong>Total gastado:</strong> ${totalGastado} COP</p>
          <p><strong>Productos en carrito:</strong> {carritoCount}</p>

          <div className="flex gap-4 mt-6">
            <Link href="/historial">
              <span className="w-full text-center bg-blue-600 text-white py-2 px-4 rounded-full font-semibold hover:bg-blue-700 transition cursor-pointer">
                Ver historial
              </span>
            </Link>
            <Link href="/carrito">
              <span className="w-full text-center bg-gray-600 text-white py-2 px-4 rounded-full font-semibold hover:bg-gray-700 transition cursor-pointer">
                Ir al carrito
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
