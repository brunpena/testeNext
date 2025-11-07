"use client";
import styles from "./create-contact-modal.module.css";
import { useState } from "react";

export default function CreateContactModal({ open, onClose }) {
  const [contatoData, setContatoData] = useState({
    nome: "",
    email: "",
    telefone: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setContatoData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Contato salvo:", contatoData);
    onClose();
		setContatoData({ nome: "", email: "", telefone: "" });
  }

  if (!open) {
    return null;
  }

  return (
    <div className={styles.overlay} role="dialog" aria-modal="true">
      <div className={styles.modal}>
        <h2 className={styles.header}>Criar contato</h2>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="nome">
              Nome
            </label>
            <input
              id="nome"
              name="nome"
              className={styles.input}
              value={contatoData.nome}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className={styles.input}
              value={contatoData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="telefone">
              Telefone
            </label>
            <input
              id="telefone"
              name="telefone"
              className={styles.input}
              value={contatoData.telefone}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.actions}>
            <button
              type="button"
              className={`${styles.btn} ${styles.secondary}`}
              onClick={onClose}
            >
              Cancelar
            </button>
            <button type="submit" className={`${styles.btn} ${styles.primary}`}>
              Salvar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}