import { CsvRepository } from "../repositories/CsvRepository";
import { Repository } from "../repositories/Repository";

/**
 * DataObject
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
      // TODO: Implement database repository
      default:
        repo = new CsvRepository(this.type);
        break;
    }
    this.repository = repo;
  }
}
