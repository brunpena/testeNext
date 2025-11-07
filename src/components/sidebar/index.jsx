"use client";
import { useState } from "react";
import {
  GearIcon,
  ListIcon,
  PhoneIcon,
  PlusIcon,
  StarIcon,
  UserIcon,
} from "@phosphor-icons/react";
import styles from "./sidebar.module.css";
import Link from "next/link";
import CreateContactModal from "../create-contact-modal";

function Sidebar() {
  const [createModalOpen, setCreateModalOpen] = useState(false);

  function handleCreateModalOpen() {
    setCreateModalOpen(true);
  }

  function handleCreateModalClose() {
    setCreateModalOpen(false);
  }
  return (
    <aside className={styles.container}>
      <header className={styles.header}>
        <div className={styles.menuIcon}>
          <ListIcon size={32} color="currentColor" />
        </div>
        <span className={styles.headerTitle}>Contatos</span>
      </header>

      <button
        className={styles.newContactButton}
        onClick={handleCreateModalOpen}
      >
        <div className={styles.newContactIcon}>
          <PlusIcon size={24} color="currentColor" />
        </div>
        <span>Novo Contato</span>
      </button>

      <nav>
        <div className={styles.navigationSection}>
          <h3 className={styles.sessionTitle}>Registros</h3>
          <ul>
            <Link href="/" >
                <li className={styles.navigationItem}>
                  <div className={styles.navigationIcon}>
                    <UserIcon size={24} color="currentColor" />
                  </div>
                  <span className={styles.navigationLink}>Contatos</span>
                </li>
            </Link>
            <Link href="/favorites" >
                <li className={styles.navigationItem}>
                  <div className={styles.navigationIcon}>
                    <StarIcon size={24} color="currentColor" />
                  </div>
                  <span className={styles.navigationLink}>Favoritos</span>
                </li>
            </Link>
          </ul>
        </div>

        <div className={styles.navigationSection}>
          <h3 className={styles.sessionTitle}>Registros</h3>
          <ul>
            <li className={styles.navigationItem}>
              <div className={styles.navigationIcon}>
                <PhoneIcon size={24} color="currentColor" />
              </div>
              <span className={styles.navigationLink}>Contato</span>
            </li>
            <li className={styles.navigationItem}>
              <div className={styles.navigationIcon}>
                <GearIcon size={24} color="currentColor" />
              </div>
              <span className={styles.navigationLink}>Configurações</span>
            </li>
          </ul>
        </div>
      </nav>
      <CreateContactModal
        open={createModalOpen}
        onClose={handleCreateModalClose}
      />
    </aside>
  );
}

export { Sidebar };