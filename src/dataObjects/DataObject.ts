import { CsvRepository } from "../repositories/CsvRepository";
import { DbRepository } from "../repositories/DbRepository";
import { Repository } from "../repositories/Repository";

/**
 * Base class for data objects
 * @param  {string} type - the type of the concrete class that extends this class
 */
export abstract class DataObject {
  type: string;
  repository: Repository;
  constructor(type: string) {
    this.type = type;
    let repo;
    switch (process.env.DATA_SOURCE) {
      case "csv":
        repo = new CsvRepository(this.type);
        break;
      case "db":
        repo = new DbRepository(this.type);
        break;
      default:
        repo = new CsvRepository(this.type);
        break;
    }
    this.repository = repo;
  }

  abstract getAll(): any;
  abstract add(obj: any): any;
}
