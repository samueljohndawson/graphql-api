import { CustomerObject } from "./dataObjects/CutomerObject";
import { ProductObject } from "./dataObjects/ProductObject";

let productObject = new ProductObject();
let customerObject = new CustomerObject();

export const resolvers = {
  Query: {
    products: () => productObject.getProducts(),
    customers: () => customerObject.getCustomers(),
  },
};
