"use client";

import { useState } from "react";

const RewriteForm = () => {
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState("");
  const [tone, setTone] = useState("Formal");
  const [result, setResult] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const response = await fetch("api/rewrite", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text, tone }),
    });

    const data = await response.json();
    setResult(data.rewrittenText);
    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col w-1/2 gap-4 items-center"
    >
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border p-2 rounded-lg h-36 w-full"
        rows={6}
        placeholder="Enter your text here"
      />
      <select
        value={tone}
        onChange={(e) => setTone(e.target.value)}
        className="border p-2 w-full md:w-1/2 rounded-lg text-center"
      >
        <option value="Formal">Formal</option>
        <option value="Casual">Casual</option>
        <option value="Funny">Funny</option>
        <option value="Rude">Rude</option>
        <option value="Sarcastic">Sarcastic</option>
        <option value="Pissed Off using bad words">Explicit</option>
        <option value="The wrestler Randy Savage">Randy Savage</option>
        <option value="Bevis and Butthead conversation">
          Bevis and Butthead
        </option>
        <option value="Michael Scott from The Office">Michael Scott</option>
        <option value="1400's english lord">English Lord</option>
        <option value="Pirate">Pirate</option>
        <option value="In the style of a roast">Roast</option>
      </select>
      <button
        type="submit"
        disabled={loading}
        className="bg-blue-500 hover:bg-blue-700 text-white w-full md:w-1/2 text-center font-bold py-2 px-4 rounded disabled:bg-gray-300"
      >
        {loading ? "Rewriting..." : "Rewrite text"}
      </button>
      {result && (
        <div className="border p-2 rounded-lg">
          <h3 className="font-bold">Rewritten Text:</h3>
          <p>{result}</p>
        </div>
      )}
    </form>
  );
};

export default RewriteForm;
