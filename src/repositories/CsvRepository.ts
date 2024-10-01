import { csvToObjects } from "../helperFunctions";
import { Repository } from "./Repository";

/**
 * CSV implementation of Repository
 * @param  {string} type - the type of the dataObject
 */
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
