"use client";

import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const ComplaintForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [complaint, setComplaint] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Nombre:", name);
    console.log("Correo electrónico:", email);
    console.log("Reclamo:", complaint);
    // Restablecer el formulario después del envío
    setName("");
    setEmail("");
    setComplaint("");
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
        label="Reclamo"
        variant="outlined"
        multiline
        rows={4}
        fullWidth
        value={complaint}
        onChange={(e) => setComplaint(e.target.value)}
      />
      <Button variant="contained" color="primary" type="submit">
        Enviar Reclamo
      </Button>
    </form>
  );
};

export default ComplaintForm;
