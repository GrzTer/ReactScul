"use client";

import React, { useState } from "react";

export default function Kontakt() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Wiadomość wysłana");
  };

  return (
    <div className="h-screen max-w-lg mx-auto mt-10 bg-black text-white p-4">
      <h1 className="text-2xl font-bold mb-4">Formularz kontaktowy</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-white rounded bg-black text-white"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Treść wiadomości:</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-2 border border-white rounded bg-black text-white h-32"
            required
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 border border-white text-white rounded hover:bg-white hover:text-black transition"
        >
          Wyślij
        </button>
      </form>
    </div>
  );
}
