import {
  csvToObjects,
  removeObjectFromCsv,
  writeObjectToCsv,
} from "../helperFunctions";
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

  productCSVFileName = "product.csv";
  customerCSVFileName = "customer.csv";

  read() {
    switch (this.type) {
      case "product":
        try {
          return csvToObjects(this.productCSVFileName);
        } catch (error) {
          console.error("Error reading from CSV:", error);
          break;
        }
      case "customer":
        try {
          return csvToObjects(this.customerCSVFileName);
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
          writeObjectToCsv(obj, this.productCSVFileName);
          console.log("Product added successfully: " + JSON.stringify(obj));
          return obj;
        } catch (error) {
          console.error("Error writing to CSV:", error);
          break;
        }
      case "customer":
        try {
          writeObjectToCsv(obj, this.customerCSVFileName);
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

  remove(id: string) {
    switch (this.type) {
      case "product":
        try {
          removeObjectFromCsv(this.productCSVFileName, "vin", id);
          console.log("Product removed successfully");
          return id;
        } catch (error) {
          console.error("Error writing to CSV:", error);
          break;
        }
      case "customer":
        try {
          removeObjectFromCsv(this.customerCSVFileName, "email", id);
          console.log("Customer removed successfully");
          return id;
        } catch (error) {
          console.error("Error editing CSV:", error);
          break;
        }
      default:
        console.error("type not recognized: " + this.type);
        break;
    }
  }
}
