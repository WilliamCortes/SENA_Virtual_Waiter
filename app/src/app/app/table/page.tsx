import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { TProduct, fakeProducts } from "@/constants/constant";
import { mapRoutes } from "@/constants/mapRoutes";
import styles from "./detail.module.css";

const Card: FC<TProduct> = ({ label, value, src, id }) => {
  return (
    <li className="menu-card">
      <Link href={`${mapRoutes}/${id}`}>
        <Image src={src} alt={label} width={40} height={40} />
        <p>{label}</p>
        <p>$ {value}</p>
      </Link>
    </li>
  );
};

export default function DetailPage() {
  return (
    <section className="main-content">
      <div className="menu-container">
        <ul className={styles.container}>
          {fakeProducts.map((product) => (
            <Card key={product.id} {...product} />
          ))}
        </ul>
      </div>
    </section>
  );
}
