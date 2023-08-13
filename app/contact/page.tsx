"use client";

import { ReactEventHandler, useState } from "react";

function Contact() {
  const [email, setEmail] = useState<string>("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    console.log("hey");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default Contact;
