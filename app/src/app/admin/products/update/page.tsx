"use client";
import { useState } from "react";
import {
  CldUploadButton,
  CloudinaryUploadWidgetResults,
} from "next-cloudinary";
import { ProductsRepository } from "@/repositories";
import { TProduct } from "@/types/product.type";
import { message } from "@/components/common/Message";
import styles from "./create.module.css";

const initState = {
  idProduct: 0,
  name: "",
  cost: 0,
  price: 0,
  amount: 0,
  description: "",
  image: "",
  expirationDate: new Date(),
};

const AddProductPage = () => {
  const [product, setProduct] = useState<TProduct>(initState);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
  };

  const handleUploadImage = (result: CloudinaryUploadWidgetResults) => {
    if (
      result.event !== "success" ||
      !result.info ||
      typeof result.info === "string"
    )
      return message({ text: "Error al subir la imagen", type: "error" });
    const { secure_url: image } = result.info;
    setProduct((prevProduct) => ({ ...prevProduct, image }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await ProductsRepository.updateProduct({
        idProduct: product.idProduct,
        ...(product.name && { name: product.name }),
        ...(product.cost && { cost: product.cost }),
        ...(product.price && { price: product.price }),
        ...(product.amount && { amount: product.amount }),
        ...(product.description && { description: product.description }),
        ...(product.image && { image: product.image }),
        ...(product.expirationDate && {
          expirationDate: product.expirationDate,
        }),
      });
      setProduct(initState);
      message({ text: "Producto modificado con éxito" });
    } catch (error) {
      message({ text: "Error al modificar el producto", type: "error" });
      console.error("Error al modificar el producto:", error);
    }
  };

  return (
    <div>
      <h1>Editar producto</h1>
      <form className={styles.container} onSubmit={handleSubmit}>
        <label className={styles.label}>
          ID del producto:
          <input
            className={styles.input}
            type="text"
            name="idProduct"
            value={product.idProduct}
            onChange={handleChange}
            required
          />
        </label>
        <label className={styles.label}>
          Nombre:
          <input
            className={styles.input}
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
          />
        </label>
        <label className={styles.label}>
          Costo:
          <input
            className={styles.input}
            type="number"
            name="cost"
            value={product.cost}
            onChange={handleChange}
          />
        </label>
        <label className={styles.label}>
          Precio:
          <input
            className={styles.input}
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
          />
        </label>
        <label className={styles.label}>
          Cantidad:
          <input
            className={styles.input}
            type="number"
            name="amount"
            value={product.amount}
            onChange={handleChange}
          />
        </label>
        <label className={styles.label}>
          Descripción:
          <textarea
            className={styles.textarea}
            name="description"
            value={product.description}
            onChange={handleChange}
          />
        </label>
        <CldUploadButton
          uploadPreset="beti-work"
          onSuccess={handleUploadImage}
        />

        <button className={styles.btn} type="submit">
          Modificar producto
        </button>
      </form>
    </div>
  );
};

export default AddProductPage;
