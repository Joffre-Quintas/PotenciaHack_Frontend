import React, { useState } from "react";
import Header from "../../components/header/Header";

export default function Cadastro() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    idade: "",
    telefone: "",
  });
  const [errors, setErrors] = useState({
    nome: "",
    email: "",
    idade: "",
    telefone: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    let isValid = true;
    const newErrors = {};

    if (formData.nome.trim() === "") {
      newErrors.nome = "Campo obrigatório";
      isValid = false;
    } else {
      newErrors.nome = "";
    }

    if (formData.email.trim() === "") {
      newErrors.email = "Campo obrigatório";
      isValid = false;
    } else {
      newErrors.email = "";
    }

    if (formData.idade.trim() === "") {
      newErrors.idade = "Campo obrigatório";
      isValid = false;
    } else {
      newErrors.idade = "";
    }

    if (formData.telefone.trim() === "") {
      newErrors.telefone = "Campo obrigatório";
      isValid = false;
    } else {
      newErrors.telefone = "";
    }

    setErrors(newErrors);

    if (isValid) {
      console.log("Dados enviados:", formData);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <Header />
      <h1>Cadastro</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
          />
          {errors.nome && <p className="error">{errors.nome}</p>}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="idade">Idade:</label>
          <input
            type="number"
            id="idade"
            name="idade"
            value={formData.idade}
            onChange={handleChange}
          />
          {errors.idade && <p className="error">{errors.idade}</p>}
        </div>
        <div>
          <label htmlFor="telefone">Telefone:</label>
          <input
            type="tel"
            id="telefone"
            name="telefone"
            value={formData.telefone}
            onChange={handleChange}
          />
          {errors.telefone && <p className="error">{errors.telefone}</p>}
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}
