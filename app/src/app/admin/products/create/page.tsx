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
      await ProductsRepository.addProduct(product);
      setProduct(initState);
      message({ text: "Producto creado con éxito" });
    } catch (error) {
      message({ text: "Error al crear el producto", type: "error" });
      console.error("Error al agregar el producto:", error);
    }
  };

  return (
    <div>
      <h1>Agregar producto</h1>
      <form className={styles.container} onSubmit={handleSubmit}>
        <label className={styles.label}>
          Nombre:
          <input
            className={styles.input}
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            required
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
            required
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
            required
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
            required
          />
        </label>
        <label className={styles.label}>
          Descripción:
          <textarea
            className={styles.textarea}
            name="description"
            value={product.description}
            onChange={handleChange}
            required
          />
        </label>
        <CldUploadButton
          uploadPreset="beti-work"
          onSuccess={handleUploadImage}
        />

        <button className={styles.btn} type="submit">
          Agregar producto
        </button>
      </form>
    </div>
  );
};

export default AddProductPage;
