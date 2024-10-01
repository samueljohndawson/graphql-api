import { DataObject } from "./DataObject";

export class ProductObject extends DataObject {
  constructor() {
    super("product");
  }
  getProducts() {
    return this.repository.read();
  }
}
