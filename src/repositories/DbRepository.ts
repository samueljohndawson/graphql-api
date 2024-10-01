import { Repository } from "./Repository";

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
