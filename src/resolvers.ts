import { Customer, Product } from "./AppStateTypes";
import { CustomerObject } from "./dataObjects/CustomerObject";
import { ProductObject } from "./dataObjects/ProductObject";

let productObject = new ProductObject();
let customerObject = new CustomerObject();

export const resolvers = {
  Query: {
    products: () => productObject.getProducts(),
    customers: () => customerObject.getCustomers(),
  },
  Mutation: {
    addProduct: (_: any, newProduct: Product) =>
      productObject.addProduct(newProduct),
    addCustomer: (_: any, newCustomer: Customer) =>
      customerObject.addCustomer(newCustomer),
  },
};
