import { useState } from "react";

type Props = {
  prompt?: string;
  imageUrl: string;
  tipo: "generado" | "subido";
  precio?: number;
};

export default function AgregarAlCarrito({ prompt, imageUrl, tipo, precio = 39000 }: Props) {
  const [talla, setTalla] = useState("M");
  const [color, setColor] = useState("Blanco");

  const agregar = () => {
    const nuevoProducto = {
      id: Date.now(),
      prompt,
      imageUrl,
      tipo,
      precio,
      talla,
      color,
    };

    const carrito = JSON.parse(localStorage.getItem("carrito") || "[]");
    carrito.push(nuevoProducto);
    localStorage.setItem("carrito", JSON.stringify(carrito));

    alert("🛒 Producto añadido al carrito con talla y color.");
  };

  return (
    <div className="mt-4 space-y-3">
      <div className="flex gap-4">
        <select
          value={talla}
          onChange={(e) => setTalla(e.target.value)}
          className="border rounded px-3 py-2"
        >
          <option value="S">Talla S</option>
          <option value="M">Talla M</option>
          <option value="L">Talla L</option>
          <option value="XL">Talla XL</option>
        </select>

        <select
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="border rounded px-3 py-2"
        >
          <option value="Blanco">Blanco</option>
          <option value="Negro">Negro</option>
          <option value="Azul">Azul</option>
          <option value="Rojo">Rojo</option>
        </select>
      </div>

      <button
        onClick={agregar}
        className="bg-blue-600 text-white py-2 px-6 rounded-full font-semibold hover:bg-blue-700 transition w-full"
      >
        Añadir al carrito
      </button>
    </div>
  );
}
