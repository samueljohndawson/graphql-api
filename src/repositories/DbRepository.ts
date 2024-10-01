import { Repository } from "./Repository";

/**
 * Db implementation of Repository
 * @param  {string} type - the type of the dataObject
 */
export class DbRepository extends Repository {
  type: string;
  constructor(type: string) {
    super();
    this.type = type;
  }

  read() {
    // TODO: Implement database read logic
    throw new Error("Method not implemented.");
  }
}
