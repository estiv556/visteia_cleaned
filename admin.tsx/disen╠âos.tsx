import { useEffect, useState } from "react";
import { useRouter } from "next/router";

type Diseño = {
  id: number;
  prompt: string;
  imageUrl: string;
  usuario: string;
};

export default function AdminDiseños() {
  const router = useRouter();
  const [diseños, setDiseños] = useState<Diseño[]>([
    {
      id: 1,
      prompt: "Gato con gafas en el espacio",
      imageUrl: "/ejemplo1.png",
      usuario: "carlos@email.com",
    },
    {
      id: 2,
      prompt: "Montaña con auroras",
      imageUrl: "/ejemplo2.png",
      usuario: "ana@email.com",
    },
  ]);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("admin_logged");
    if (isLoggedIn !== "true") {
      router.push("/admin/login");
    }
  }, []);

  const eliminarDiseño = (id: number) => {
    const confirmacion = confirm("¿Estás seguro de eliminar este diseño?");
    if (confirmacion) {
      setDiseños((prev) => prev.filter((d) => d.id !== id));
    }
  };

  return (
    <div className="min-h-screen px-6 py-10 bg-gray-50">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-xl shadow">
        <h1 className="text-3xl font-bold mb-6 text-gray-900 text-center">
          Diseños generados
        </h1>

        {diseños.length === 0 ? (
          <p className="text-center text-gray-600">No hay diseños disponibles.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {diseños.map((d) => (
              <div key={d.id} className="bg-gray-100 rounded-lg p-4 shadow">
                <img
                  src={d.imageUrl}
                  alt={d.prompt}
                  className="w-full h-auto rounded-lg mb-3"
                />
                <p className="text-gray-800 font-medium mb-1">{d.prompt}</p>
                <p className="text-sm text-gray-500 mb-3">Usuario: {d.usuario}</p>
                <button
                  onClick={() => eliminarDiseño(d.id)}
                  className="w-full bg-red-600 text-white font-semibold py-2 px-4 rounded-full hover:bg-red-700 transition"
                >
                  Eliminar
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
