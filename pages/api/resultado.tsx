import { useRouter } from "next/router";
import { useState } from "react";

export default function Resultado() {
  const router = useRouter();
  const { url } = router.query;
  const [saved, setSaved] = useState(false);

  if (!url) return <p className="text-center mt-10">Cargando...</p>;

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-6">
      {/* Imagen */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={url as string}
          alt="Vista previa"
          className="w-72 h-72 object-cover border rounded-lg"
        />
      </div>

      {/* Acciones */}
      <div className="w-full md:w-1/2 flex flex-col gap-4">
        <button
          className="bg-blue-600 text-white py-3 rounded-md"
          onClick={() => router.push("/")}
        >
          Regenerar otro
        </button>
        <button
          className="bg-gray-100 border py-3 rounded-md"
          onClick={() => setSaved(true)}
        >
          Guardar en tu perfil
        </button>
        <button className="bg-blue-600 text-white py-3 rounded-md">
          Agregar al carrito
        </button>
        {saved && <p className="text-green-500">✅ Diseño guardado</p>}
      </div>
    </div>
  );
}
