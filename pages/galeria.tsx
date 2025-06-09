export default function Galeria() {
  const diseños = [
    { id: 1, prompt: "Gato ninja", imageUrl: "/ejemplo1.png" },
    { id: 2, prompt: "Paisaje psicodélico", imageUrl: "/ejemplo2.png" },
    { id: 3, prompt: "Calavera con rosas", imageUrl: "/ejemplo3.png" },
  ];

  return (
    <div className="min-h-screen px-6 py-10 bg-white">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-900">
        Galería de Diseños
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {diseños.map((d) => (
          <div
            key={d.id}
            className="border rounded-xl shadow p-4 flex flex-col items-center"
          >
            <img
              src={d.imageUrl}
              alt={d.prompt}
              className="w-full h-auto rounded-lg mb-4 object-contain"
            />
            <p className="mb-4 text-gray-700 text-center">{d.prompt}</p>
            <button className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-full hover:bg-blue-700 transition">
              Comprar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}



