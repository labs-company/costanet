"use client";

import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const SuggestionForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [suggestion, setSuggestion] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Nombre:", name);
    console.log("Correo electrónico:", email);
    console.log("Sugerencia:", suggestion);
    // Restablecer el formulario después del envío
    setName("");
    setEmail("");
    setSuggestion("");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-4">
      <TextField
        label="Nombre"
        variant="outlined"
        fullWidth
        multiline
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        label="Correo electrónico"
        variant="outlined"
        fullWidth
        multiline
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Sugerencia"
        variant="outlined"
        multiline
        rows={4}
        fullWidth
        value={suggestion}
        onChange={(e) => setSuggestion(e.target.value)}
      />
      <Button variant="contained" color="primary" type="submit">
        Enviar Sugerencia
      </Button>
    </form>
  );
};

export default SuggestionForm;
