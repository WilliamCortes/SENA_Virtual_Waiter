"use client";
import { useState } from "react";
import { ProductsRepository } from "@/repositories";
import { message } from "@/components/common/Message";
import styles from "./delete.module.css";

const DeleteProductPage = () => {
  const [productId, setProductId] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductId(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await ProductsRepository.deleteProduct(productId);
      message({ text: "Producto eliminado con éxito" });
      setProductId("");
    } catch (error) {
      message({ text: "Error al eliminar el producto", type: "error" });
      console.error("Error al eliminar el producto:", error);
    }
  };

  return (
    <div>
      <h1>Eliminar producto por ID</h1>
      <form className={styles.container} onSubmit={handleSubmit}>
        <label className={styles.label}>
          ID del producto:
          <input
            className={styles.input}
            type="text"
            value={productId}
            onChange={handleChange}
            required
          />
        </label>
        <button className={styles.btn} type="submit">
          Eliminar producto
        </button>
      </form>
    </div>
  );
};

export default DeleteProductPage;
