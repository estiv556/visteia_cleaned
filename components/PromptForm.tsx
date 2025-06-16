import React, { useState } from "react";

export default function PromptForm() {
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      setError("Por favor escribe un prompt.");
      return;
    }

    setLoading(true);
    setError(null);
    setImage(null);

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      const data = await response.json();

      if (response.ok && data.url) {
        setImage(data.url);
      } else {
        setError("No se pudo generar la imagen.");
        console.error("Error en respuesta:", data);
      }
    } catch (err) {
      setError("Error al conectar con el servidor.");
      console.error("Error de conexión:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-8 p-4 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Diseña tu camiseta con IA
      </h1>

      <input
        type="text"
        name="prompt" // ✅ Esto soluciona la advertencia
        placeholder="Describe tu diseño (ej. gato astronauta)"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="w-full p-2 border rounded mb-4"
        autoComplete="off"
      />

      <button
        onClick={handleGenerate}
        disabled={loading}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        {loading ? "Generando..." : "Generar diseño"}
      </button>

      {error && (
        <p className="text-red-600 mt-4 text-center">{error}</p>
      )}

      {image && (
        <div className="mt-6">
          <p className="text-center font-semibold mb-2">Vista previa:</p>
          <img
            src={image}
            alt="Resultado generado por IA"
            className="w-full rounded border"
          />
        </div>
      )}
    </div>
  );
}






