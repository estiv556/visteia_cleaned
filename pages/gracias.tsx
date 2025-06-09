import Link from "next/link";

export default function Gracias() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white p-6 text-center">
      <h1 className="text-3xl font-bold text-green-600 mb-4">🎉 ¡Gracias por tu compra!</h1>
      <p className="text-gray-700 mb-6">Tu diseño será procesado pronto. Te mantendremos informado.</p>

      <Link href="/login">
        <a className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
          Volver al inicio
        </a>
      </Link>
    </div>
  );
}
