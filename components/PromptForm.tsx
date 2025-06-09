import { useState } from "react";

export default function PromptForm() {
  const [prompt, setPrompt] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGenerate = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      const data = await response.json();

      if (response.ok) {
        setImageUrl(data.url);
      } else {
        setError(data?.error || "No se pudo generar la imagen");
      }
    } catch (err) {
      console.error(err);
      setError("Error de red");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4 py-8">
      <div className="w-full max-w-4xl flex flex-col lg:flex-row items-center gap-10">
        {/* Columna izquierda: formulario */}
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Describe tu diseño...
          </h1>

          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Ej: un gato astronauta en el espacio"
            className="w-full border border-gray-300 rounded-md p-3 mb-4 resize-none"
            rows={3}
          />

          <button
            onClick={handleGenerate}
            disabled={loading || !prompt}
            className="w-full bg-blue-600 text-white font-semibold py-3 px-4 rounded-md hover:bg-blue-700 transition disabled:opacity-50"
          >
            {loading ? "Generando..." : "Generar camiseta"}
          </button>

          {error && (
            <p className="text-sm text-red-600 mt-4">{error}</p>
          )}
        </div>

        {/* Columna derecha: vista previa */}
        <div className="w-full max-w-sm flex flex-col items-center">
          {imageUrl ? (
            <>
              <img
                src={imageUrl}
                alt="Diseño generado"
                className="rounded-lg w-full h-auto border"
              />
              <div className="flex gap-4 mt-4">
                <button
                  onClick={handleGenerate}
                  className="bg-white border border-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-md hover:bg-gray-100 transition"
                >
                  Regenerar
                </button>
                <button
                  className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition"
                >
                  Agregar al carrito
                </button>
              </div>
            </>
          ) : (
            <p className="text-gray-400 text-sm">La vista previa aparecerá aquí</p>
          )}
        </div>
      </div>
    </div>
  );
}






