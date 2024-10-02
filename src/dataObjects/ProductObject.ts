import { Product } from "../AppStateTypes";
import { DataObject } from "./DataObject";

export class ProductObject extends DataObject {
  constructor() {
    super("product");
  }
  getAll() {
    return this.repository.read();
  }

  add(product: Product) {
    return this.repository.write(product);
  }
  remove(id: string) {
    return this.repository.remove(id);
  }
}
