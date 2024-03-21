import { TProduct } from "@/constants/constant";
import { FC } from "react";

export const TableProductItem: FC<TProduct> = ({ label, value, amount }) => {
  const totalPrice = value * amount;

  return (
    <tr>
      <td>{amount}</td>
      <td>{label}</td>
      <td>{totalPrice}</td>
    </tr>
  );
};
