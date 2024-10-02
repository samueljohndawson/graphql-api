import { Repository } from "./Repository";

/**
 * Db implementation of Repository
 * @param  {string} type - the type of the dataObject
 */
export class DbRepository extends Repository {
  protected type: string;
  constructor(type: string) {
    super();
    this.type = type;
  }

  read() {
    // TODO: Implement database read logic
    throw new Error("Method not implemented. Cannot read from database");
  }
  write(obj: object): void {
    // TODO: Implement database write logic
    throw new Error(`Method not implemented. Cannot write ${obj} to database`);
  }
}
