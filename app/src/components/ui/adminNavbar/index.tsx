import { FC } from "react";
import Link from "next/link";
import styles from "./adminNavbar.module.css";

type Props = {};

export const AdminNavbar: FC<Props> = () => {
  return (
    <header>
      <div className={styles.container}>
        <nav>
          <ol className={styles.nav}>
            <Link href="/">
              <button className={styles.link}>Home</button>
            </Link>
            <Link href="/admin">
              <button className={styles.link}>Admin</button>
            </Link>
            <Link href="/admin/products">
              <button className={styles.link}>Productos</button>
            </Link>
            <Link href="/admin/products/create">
              <button className={styles.link}>Agregar producto</button>
            </Link>
            <Link href="/admin/products/update">
              <button className={styles.link}>Editar producto</button>
            </Link>
            <Link href="/admin/products/delete">
              <button className={styles.link}>Eliminar producto</button>
            </Link>
          </ol>
        </nav>
      </div>
    </header>
  );
};
