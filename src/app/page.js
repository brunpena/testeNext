import SearchInput from "@/components/search-input";
import styles from "./page.module.css";
import Table from "@/components/table";

export default async function Home() {
  return (
    <div>
      <SearchInput />
      <h1 className={styles.contactTitle}>
        Seus Contatos <span className={styles.numberOfContacts}>(193)</span>
      </h1>
      <Table />
    </div>
  );
}