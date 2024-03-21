import Image from "next/image";
import Link from "next/link";
import { Invoice } from "@/constants/icons.constant";
import { fakeProducts } from "@/constants/constant";
import { mapRoutes } from "@/constants/mapRoutes";
import { TableProductItem } from "@/components/common/tableProductItem";
import { TableTotalRow } from "@/components/common/tableTotalRow";

export default function DetailPage() {
  let total = 0;

  return (
    <section className="main-content">
      <div className="invoice-container">
        <div className="card-title">
          <h3>Generar Factura</h3>
          <Image src={Invoice} alt="Invoice" />
        </div>
        {/* <!-- This is the order with the products --> */}
        <table className="invoice-list">
          <thead>
            <tr className="invoice-list--title">
              <th>La parrilla de Alejo</th>
              <th>Factura N°: 0007</th>
            </tr>
            <tr>
              <th>Cantidad</th>
              <th>Producto</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody id="invoice-list-tbody">
            {fakeProducts.map((product) => {
              total += product.value + product.amount;
              return <TableProductItem key={product.id} {...product} />;
            })}
          </tbody>
          <tfoot id="invoice-total-tfoot">
            <TableTotalRow total={total} />
          </tfoot>
        </table>

        <Link className="main-btn" href={mapRoutes.thanks}>
          Generar Factura
        </Link>
      </div>
    </section>
  );
}
