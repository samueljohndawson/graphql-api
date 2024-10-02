import { Customer } from "../AppStateTypes";
import { DataObject } from "./DataObject";

export class CustomerObject extends DataObject {
  constructor() {
    super("customer");
  }
  getAll() {
    return this.repository.read();
  }
  add(customer: Customer) {
    return this.repository.write(customer);
  }
  remove(id: string) {
    return this.repository.remove(id);
  }
}
