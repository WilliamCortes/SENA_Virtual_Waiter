import { FC } from "react";
import Link from "next/link";
import styles from "./navbar.module.css";

type Props = {};

export const Navbar: FC<Props> = () => {
  return (
    <header>
      <div className={styles.container}>
        <nav>
          <ol className={styles.nav}>
            <Link href="/">
              <button className={styles.link}>Home</button>
            </Link>
            <Link href="/products">
              <button className={styles.link}>Productos</button>
            </Link>
            <Link href="/products/create">
              <button className={styles.link}>Agregar producto</button>
            </Link>
            <Link href="/products/delete">
              <button className={styles.link}>Eliminar producto</button>
            </Link>
          </ol>
        </nav>
      </div>
    </header>
  );
};
