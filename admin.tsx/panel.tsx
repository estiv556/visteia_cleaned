import { useEffect } from "react";
import { useRouter } from "next/router";

export default function AdminPanel() {
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("admin_logged");
    if (isLoggedIn !== "true") {
      router.push("/admin/login");
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("admin_logged");
    router.push("/admin/login");
  };

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Panel de Estadísticas - Admin
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10 text-center">
          <div className="bg-blue-100 text-blue-800 p-6 rounded-xl shadow">
            <p className="text-2xl font-bold">127</p>
            <p className="text-sm mt-2">Usuarios registrados</p>
          </div>
          <div className="bg-green-100 text-green-800 p-6 rounded-xl shadow">
            <p className="text-2xl font-bold">342</p>
            <p className="text-sm mt-2">Diseños generados</p>
          </div>
          <div className="bg-purple-100 text-purple-800 p-6 rounded-xl shadow">
            <p className="text-2xl font-bold">89</p>
            <p className="text-sm mt-2">Compras realizadas</p>
          </div>
        </div>

        <h2 className="text-xl font-semibold mb-4 text-gray-800">Actividad reciente</h2>
        <ul className="space-y-3 mb-6">
          <li className="bg-gray-100 p-4 rounded-md shadow text-gray-700">
            <span className="font-semibold">Compra:</span> Usuario compró "Gato galáctico"
          </li>
          <li className="bg-gray-100 p-4 rounded-md shadow text-gray-700">
            <span className="font-semibold">Diseño:</span> Nuevo diseño: "Skate futurista"
          </li>
        </ul>

        <div className="text-center">
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white py-2 px-6 rounded-full hover:bg-red-700 transition"
          >
            Cerrar sesión
          </button>
        </div>
      </div>
    </div>
  );
}
