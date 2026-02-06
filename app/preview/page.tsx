"use client";
import { generateLetter } from "@/lib/generateLetter";

export default function PreviewPage() {
  const data = JSON.parse(localStorage.getItem("application") || "{}");
  const letter = generateLetter(data);

  return (
    <>
      <h1>Vorschau deiner Bewerbung</h1>
      <p>So könnte dein Anschreiben aussehen:</p>

      <pre
        style={{
          background: "#ffffff",
          padding: "20px",
          borderRadius: "8px",
          marginTop: "20px",
          whiteSpace: "pre-wrap",
        }}
      >
        {letter}
      </pre>

      <button className="secondary" style={{ marginTop: "20px" }}>
        Später freischalten (1 €)
      </button>
    </>
  );
}

