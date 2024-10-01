import { Product } from "../AppStateTypes";
import { DataObject } from "./DataObject";

export class ProductObject extends DataObject {
  constructor() {
    super("product");
  }
  getProducts() {
    return this.repository.read();
  }

  addProduct(product: Product) {
    return this.repository.write(product);
  }
}
