import { DataObject } from "./DataObject";

export class CustomerObject extends DataObject {
  constructor() {
    super("customer");
  }
  getCustomers() {
    return this.repository.read();
  }
}
