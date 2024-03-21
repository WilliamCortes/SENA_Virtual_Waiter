import { FC } from "react";

export const TableTotalRow: FC<{ total: number }> = ({ total }) => {
  return (
    <tr>
      <td>Total</td>
      <td>{total}</td>
    </tr>
  );
};
