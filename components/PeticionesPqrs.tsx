import React, { useState } from "react";
import { TextField, Typography, Button, Box } from "@mui/material";

function PeticionesPqrs() {
  const [message, setMessage] = useState("Peticiones");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <Typography variant="h5" align="center" className="mb-4">
        {message}
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Nombre"
          variant="outlined"
          fullWidth
          required
          margin="normal"
          className="mb-4"
        />
        <TextField
          label="Correo electrónico"
          variant="outlined"
          fullWidth
          required
          type="email"
          margin="normal"
          className="mb-4"
        />
        <TextField
          label="Asunto"
          variant="outlined"
          fullWidth
          required
          margin="normal"
          className="mb-4"
        />
        <TextField
          label="Mensaje"
          variant="outlined"
          fullWidth
          required
          multiline
          rows={4}
          margin="normal"
          className="mb-4"
        />
        <Box textAlign="center">
          <Button type="submit" variant="contained" color="primary">
            Enviar
          </Button>
        </Box>
      </form>
    </div>
  );
}

export default PeticionesPqrs;
