import { ProductsRepository } from "@/repositories";
import { TProduct } from "@/types/product.type";
import styles from "./products.module.css";

const getProducts = async (): Promise<TProduct[]> => {
  try {
    return await ProductsRepository.getAll();
  } catch (error) {
    console.error("🚀 ~ getProducts ~ error:", error);
    return [];
  }
};

const ProductsPage = async () => {
  const products = await getProducts();

  return (
    <div>
      <h1>Productos</h1>
      <ul className={styles.container}>
        {products.map((product) => (
          <li key={product.idProduct} className={styles.card}>
            <h2>{product.name}</h2>
            <p>Id: {product.idProduct}</p>
            <p>Costo: ${product.cost}</p>
            <p>Pricio: ${product.price}</p>
            <p>Cantidad en inventario: {product.amount}</p>
            <p>Description: {product.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsPage;
