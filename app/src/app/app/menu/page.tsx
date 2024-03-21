import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { mapRoutes } from "@/constants/mapRoutes";
import styles from "./detail.module.css";
import { TProduct } from "@/types/product.type";
import { ProductsRepository } from "@/repositories";

const getProducts = async (): Promise<TProduct[]> => {
  try {
    return await ProductsRepository.getAll();
  } catch (error) {
    console.error("🚀 ~ getProducts ~ error:", error);
    return [];
  }
};

const Card: FC<TProduct> = ({ name, price, image, idProduct }) => {
  return (
    <li className="menu-card">
      <Link href={`${mapRoutes.detail}/${idProduct}`}>
        <Image src={image} alt={name} width={40} height={40} />
        <p>{name}</p>
        <p>$ {price}</p>
      </Link>
    </li>
  );
};

const MenuPage = async () => {
  const products = await getProducts();
  return (
    <section className="main-content">
      <div className="menu-container">
        <ul className={styles.container}>
          {products.map((product) => (
            <Card key={product.idProduct} {...product} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default MenuPage;
