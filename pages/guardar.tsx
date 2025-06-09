import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Guardar() {
  const router = useRouter();
  const [imageUrl, setImageUrl] = useState("");
  const [guardado, setGuardado] = useState(false);

  useEffect(() => {
    const url = sessionStorage.getItem("camiseta");
    if (url) {
      setImageUrl(url);
    }
  }, []);

  const handleCarrito = () => {
    router.push("/carrito");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-white">
      <h2 className="text-xl font-semibold mb-4">Vista previa de tu diseño</h2>

      {imageUrl && (
        <img
          src={imageUrl}
          alt="Diseño generado"
          className="w-72 h-72 object-cover mb-4 border rounded-md"
        />
      )}

      <div className="flex flex-col gap-4 w-full max-w-sm">
        <button
          onClick={() => setGuardado(true)}
          className="bg-gray-200 text-gray-800 py-2 rounded-md"
        >
          Guardar en tu perfil
        </button>

        <button
          onClick={handleCarrito}
          className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
        >
          Agregar al carrito
        </button>

        {guardado && (
          <p className="text-green-600 text-center">✅ Guardado con éxito</p>
        )}
      </div>
    </div>
  );
}
