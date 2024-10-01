import { Customer } from "../AppStateTypes";
import { DataObject } from "./DataObject";

export class CustomerObject extends DataObject {
  constructor() {
    super("customer");
  }
  getCustomers() {
    return this.repository.read();
  }
  addCustomer(customer: Customer) {
    return this.repository.write(customer);
  }
}
