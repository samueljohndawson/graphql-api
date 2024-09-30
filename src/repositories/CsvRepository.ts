import { csvToObjects } from "../helperFunctions";
import { Repository } from "./Repository";

export class CsvRepository extends Repository {
  type: string;
  constructor(type: string) {
    super();
    this.type = type;
  }

  read() {
    switch (this.type) {
      case "product":
        return csvToObjects("product.csv");
      case "customer":
        return csvToObjects("customer.csv");
      default:
        console.error("type not recognized: " + this.type);
        break;
    }
  }
}
