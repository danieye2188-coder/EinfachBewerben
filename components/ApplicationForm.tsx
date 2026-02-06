"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ApplicationForm() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    jobTitle: "",
    company: "",
    experience: "",
  });

  function submit(e: any) {
    e.preventDefault();
    localStorage.setItem("application", JSON.stringify(form));
    router.push("/preview");
  }

  return (
    <form onSubmit={submit}>
      <input
        placeholder="Dein vollständiger Name"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <input
        placeholder="Stellenbezeichnung"
        onChange={(e) => setForm({ ...form, jobTitle: e.target.value })}
      />

      <input
        placeholder="Unternehmen"
        onChange={(e) => setForm({ ...form, company: e.target.value })}
      />

      <textarea
        placeholder="Wichtige Erfahrungen oder Aufgaben (z. B. Organisation, Verkauf, Kundenkontakt)"
        rows={4}
        onChange={(e) => setForm({ ...form, experience: e.target.value })}
      />

      <button>Bewerbung erstellen</button>
    </form>
  );
}

