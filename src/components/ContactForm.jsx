import React, { useState, useEffect, useContext } from "react";
import { useForm } from "../hooks/useForm";
import Message from "./Message";
import Loader from "./Loader";
import "./ContactForm.css";
import ThemeContext from "../context/ThemeContext";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  comments: "",
};

const validateForm = (form) => {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexComments = /^.{1,255}$/;

  if (!form.name.trim()) {
    errors.name = "El campo 'nombre' es requerido";
  } else if (!regexName.test(form.name.trim())) {
    errors.name = "El campo 'nombre' solo acepta letras y espacios en blanco";
  }

  if (!form.email.trim()) {
    errors.email = "El campo 'email' es requerido";
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = "El campo 'email' es invalido";
  }

  if (!form.subject.trim()) {
    errors.subject = "El campo 'asunto a tratar' es requerido";
  }

  if (!form.comments.trim()) {
    errors.comments = "El campo 'comentarios' es requerido";
  } else if (!regexComments.test(form.comments.trim())) {
    errors.comments = "El campo 'comentarios' solo admite 255 caracteres";
  }

  return errors;
};

const ContactForm = () => {
  const {theme} = useContext(ThemeContext);

  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validateForm);

  return (
    <>
      <form action="5ba8e34cf80a3e49aa41582e2626812c" onSubmit={handleSubmit}>
        <h2 className="chakra-petch-bold">Contactame</h2>
        <input className={theme}
          type="text"
          name="name"
          placeholder="Escribe tu nombre"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.name}
          required
        />
        {errors.name && (
          <p style={{ color: "#dc3545", fontWeight: "bold" }}>{errors.name}</p>
        )}
        <input className={theme}
          type="email"
          name="email"
          placeholder="Escribe tu email"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.email}
          required
        />
        {errors.email && (
          <p style={{ color: "#dc3545", fontWeight: "bold" }}>{errors.email}</p>
        )}
        <input className={theme}
          type="text"
          name="subject"
          placeholder="Asunto a tratar"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.subject}
          required
        />
        {errors.subject && (
          <p style={{ color: "#dc3545", fontWeight: "bold" }}>
            {errors.subject}
          </p>
        )}
        <textarea
          name="comments"
          cols="50"
          rows="5"
          placeholder="Escribe tus comentarios"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.comments}
          required
        ></textarea>
        {errors.comments && (
          <p style={{ color: "#dc3545", fontWeight: "bold" }}>
            {errors.comments}
          </p>
        )}
        <input className={theme} type="submit" value="Enviar" />
      </form>
      {loading && <Loader />}
      {response && (
        <Message msg="Los datos han sido enviados" bgColor="#198754" />
      )}
    </>
  );
};

export default ContactForm;
