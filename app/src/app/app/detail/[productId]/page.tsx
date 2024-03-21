"use client";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { mapRoutes } from "@/constants/mapRoutes";
import { TProduct, fakeProducts } from "@/constants/constant";

const Product: React.FC<TProduct> = ({ src, label, description, value }) => {
  return (
    <div id="detail-product">
      <Image width={656} height={500} src={src} alt={label} />
      <h2>{label}</h2>
      <p>{description}</p>
      <p>Valor Unitario: $ {value}</p>
    </div>
  );
};

export default function DetailPage() {
  const [product, setProduct] = useState<TProduct>({ ...fakeProducts[0] });

  useEffect(() => {
    const productId = location.href.split("/").pop();
    const productById = fakeProducts.find((p) => p.id === productId);
    if (!productById) return;
    setProduct({ ...productById });
  }, []);

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setProduct((product) => ({
      ...product,
      [e?.target.name]: e?.target.value,
      total: (product.amount as number) * (product.value as number),
    }));
  }, []);

  return (
    <section className="main-content">
      <div className="detail-container">
        {product && <Product {...product} />}
        {/* <!-- This is the search --> */}
        <form
          className="detail-add"
          // action="javascript: addProduct()"
          method="post"
        >
          <div>
            <label htmlFor="detail-add"> Cantidad </label>
            <input
              type="number"
              value={product.amount}
              id="detail-amount"
              name="amount"
              onChange={handleChange}
              autoFocus
            />
          </div>
          <div>
            <label htmlFor="detail-add"> Valor Unitario </label>
            <input
              type="number"
              value={product.value}
              id="detail-value"
              name="value"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="detail-add"> Total </label>
            <input
              type="number"
              value={product.id}
              id="detail-total"
              name="total"
              onChange={handleChange}
            />
          </div>
        </form>
        <Link className="main-btn" href={mapRoutes.order}>
          Ver Pedido
        </Link>
      </div>
    </section>
  );
}
