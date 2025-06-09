import { useState } from "react";
import { useRouter } from "next/router";

export default function Crear() {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();
      if (data.url) {
        router.push(`/guardar?url=${encodeURIComponent(data.url)}`);
      } else {
        alert("Error generando la imagen.");
      }
    } catch {
      alert("Error al conectar.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-white">
      <h2 className="text-2xl font-bold mb-4">Describe tu camiseta</h2>
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Ej: Gato ninja sobre una nube"
        className="w-full max-w-lg p-4 border rounded-md mb-4"
        rows={3}
      />
      <button
        onClick={handleGenerate}
        className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700"
        disabled={loading}
      >
        {loading ? "Generando..." : "Generar diseño"}
      </button>
    </div>
  );
}


