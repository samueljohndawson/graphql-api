import { ProductObject } from "./dataObjects/ProductObject";
import { csvToObjects } from "./helperFunctions";

let productObject = new ProductObject();
export const resolvers = {
  Query: {
    products: () => productObject.getProducts(),
    customers: () => csvToObjects("customer.csv"),
  },
};
