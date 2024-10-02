import { csvToObjects, writeObjectToCsv } from "../helperFunctions";
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
        try {
          return csvToObjects("product.csv");
        } catch (error) {
          console.error("Error reading from CSV:", error);
          break;
        }
      case "customer":
        try {
          return csvToObjects("customer.csv");
        } catch (error) {
          console.error("Error reading from CSV:", error);
          break;
        }
      default:
        console.error("type not recognized: " + this.type);
        break;
    }
  }

  write(obj: object) {
    switch (this.type) {
      case "product":
        try {
          writeObjectToCsv(obj, "product.csv");
          console.log("Product added successfully: " + JSON.stringify(obj));
          return obj;
        } catch (error) {
          console.error("Error writing to CSV:", error);
          break;
        }
      case "customer":
        try {
          writeObjectToCsv(obj, "customer.csv");
          console.log("Customer added successfully: " + JSON.stringify(obj));
          return obj;
        } catch (error) {
          console.error("Error writing to CSV:", error);
          break;
        }
      default:
        console.error("type not recognized: " + this.type);
        break;
    }
  }
}
