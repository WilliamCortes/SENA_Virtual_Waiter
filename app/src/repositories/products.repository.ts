import { TProduct } from "@/types/product.type";
import Api from "./core";

class Products extends Api {
  protected readonly endpoints = {
    products: {
      all: "/products",
    },
  };

  async getAll() {
    return await this.get<TProduct[]>(this.endpoints.products.all);
  }

  async getById(id: string) {
    return await this.get<TProduct>(`${this.endpoints.products.all}/${id}`);
  }

  async addProduct(newProduct: TProduct) {
    return await this.post<TProduct>(this.endpoints.products.all, newProduct);
  }

  async deleteProduct(id: string) {
    return await this.delete(`${this.endpoints.products.all}/${id}`);
  }
}

const ProductsRepository = new Products();
export default ProductsRepository;
