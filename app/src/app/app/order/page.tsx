import Link from "next/link";
import Image from "next/image";
import { fakeProducts } from "@/constants/constant";
import { Restaurant, plus } from "@/constants/icons.constant";
import { mapRoutes } from "@/constants/mapRoutes";
import { TableProductItem } from "@/components/common/tableProductItem";
import { TableTotalRow } from "@/components/common/tableTotalRow";

export default function DetailPage() {
  let total = 0;

  return (
    <section className="main-content">
      <div className="order-container">
        <div className="card-title">
          <h3>Crear Pedido</h3>
          <Image width={90} height={90} src={Restaurant} alt="Restaurant" />
        </div>

        <table className="order-list">
          <thead>
            <tr>
              <th colSpan={4}>Producto</th>
              <th colSpan={2}>Valor</th>
            </tr>
          </thead>
          <tbody id="order-list-tbody">
            {fakeProducts.map((product) => {
              total += product.value + product.amount;
              return <TableProductItem key={product.id} {...product} />;
            })}
          </tbody>
          <tfoot id="order-total-tfoot">
            <TableTotalRow total={total} />
          </tfoot>
        </table>

        <div className="order-add-product">
          <p>Agregar un producto</p>
          <Link href={mapRoutes.menu}>
            <Image width={90} height={90} src={plus} alt="Plus" />
          </Link>
        </div>

        <Link className="main-btn" href={mapRoutes.invoice}>
          Generar Pedido
        </Link>
      </div>
    </section>
  );
}
