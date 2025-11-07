"use client";
import {
  PencilIcon,
  PhoneIcon,
  StarIcon,
  TrashIcon,
} from "@phosphor-icons/react";
import styles from "./table.module.css";
import Image from "next/image";

export default function Table() {
  return (
    <table>
      <thead className={styles.tableHeader}>
        <tr>
          <th className={`${styles.rowTitle} ${styles.rowTitleName}`}>Nome</th>
          <th className={`${styles.rowTitle} ${styles.rowTitleEmail}`}>
            E-mail
          </th>
          <th className={`${styles.rowTitle} ${styles.rowTitlePhoneNumber}`}>
            Número de telefone
          </th>
          <th className={`${styles.rowTitle} ${styles.rowTitleTools}`}>
            Ferramentas
          </th>
        </tr>
      </thead>
      <tbody className={styles.tableBody}>
        <tr className={styles.tableRow}>
          <td className={`${styles.rowData} ${styles.rowDataName}`}>
            <Image
              src="/img/profile.svg"
              alt="Foto de perfil de Matheus Teodoro Garcia"
              width={40}
              height={40}
            />
            Matheus Teodoro Garcia
          </td>
          <td className={`${styles.rowData} ${styles.rowDataEmail}`}>
            matheusteodorogarcia@gmail.com
          </td>
          <td className={`${styles.rowData} ${styles.rowDataPhoneNumber}`}>
            <div className={styles.phoneIcon}>
              <PhoneIcon size={16} color="currentColor" />
            </div>
            <span>+55 44 99965-9285</span>
          </td>
          <td className={`${styles.rowData} ${styles.rowDataTools}`}>
            <ul className={styles.toolsList}>
              <li className={styles.toolItem}>
                <PencilIcon size={20} color="currentColor" />
              </li>
              <li className={styles.toolItem}>
                <StarIcon size={20} color="currentColor" />
              </li>
              <li className={styles.toolItem}>
                <TrashIcon size={20} color="currentColor" />
              </li>
            </ul>
          </td>
        </tr>
        <tr className={styles.tableRow}>
          <td className={`${styles.rowData} ${styles.rowDataName}`}>
            <Image
              src="/img/profile.svg"
              alt="Foto de perfil de Matheus Teodoro Garcia"
              width={40}
              height={40}
            />
            Matheus Teodoro Garcia
          </td>
          <td className={`${styles.rowData} ${styles.rowDataEmail}`}>
            matheusteodorogarcia@gmail.com
          </td>
          <td className={`${styles.rowData} ${styles.rowDataPhoneNumber}`}>
            <div className={styles.phoneIcon}>
              <PhoneIcon size={16} color="currentColor" />
            </div>
            <span>+55 44 99965-9285</span>
          </td>
          <td className={`${styles.rowData} ${styles.rowDataTools}`}>
            <ul className={styles.toolsList}>
              <li className={styles.toolItem}>
                <PencilIcon size={20} color="currentColor" />
              </li>
              <li className={styles.toolItem}>
                <StarIcon size={20} color="currentColor" />
              </li>
              <li className={styles.toolItem}>
                <TrashIcon size={20} color="currentColor" />
              </li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  );
}