"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { TextField, Button } from "@mui/material";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const PetitionForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aquí puedes realizar la lógica para enviar la petición
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-4">
      <div className="mb-4">
        <TextField
          label="Nombre"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          multiline
          variant="outlined"
        />
      </div>
      <div className="mb-4">
        <TextField
          label="Correo Electrónico"
          name="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          multiline
        />
      </div>
      <div className="mb-4">
        <TextField
          label="Mensaje"
          name="message"
          value={formData.message}
          onChange={handleChange}
          multiline
          fullWidth
          rows={4}
        />
      </div>

      <Button
        type="submit"
        variant="contained"
        color="primary"
        className="text-gray-600 hover:text-white"
      >
        Enviar Peticion
      </Button>
    </form>
  );
};

export default PetitionForm;
