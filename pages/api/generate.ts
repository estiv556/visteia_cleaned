// pages/api/generate.ts
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método no permitido" });
  }

  const { prompt } = req.body;

  if (!prompt || prompt.trim() === "") {
    return res.status(400).json({ error: "Prompt requerido" });
  }

  try {
    const response = await fetch("https://api.openai.com/v1/images/generations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        prompt: prompt.trim(),
        n: 1,
        size: "512x512"
      })
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("❌ ERROR DESDE OPENAI:");
      console.error(JSON.stringify(data, null, 2));
      return res.status(500).json({ error: "Error desde OpenAI", details: data });
    }

    if (data?.data?.[0]?.url) {
      return res.status(200).json({ url: data.data[0].url });
    } else {
      return res.status(500).json({ error: "No se recibió imagen válida" });
    }
  } catch (error) {
    console.error("❌ ERROR DE CONEXIÓN:");
    console.error(error);
    return res.status(500).json({ error: "Error al conectar con OpenAI" });
  }
}




