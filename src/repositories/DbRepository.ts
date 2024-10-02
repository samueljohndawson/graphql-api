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
  write(obj: object) {
    // TODO: Implement database write logic
    throw new Error(`Method not implemented. Cannot write ${obj} to database`);
  }
  remove(id: string) {
    // TODO: Implement database remove logic
    throw new Error(
      `Method not implemented. Cannot remove entry with id: ${id} from database`
    );
  }
}
