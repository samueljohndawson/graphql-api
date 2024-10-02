import { Customer, Product } from "./AppStateTypes";
import { CustomerObject } from "./dataObjects/CustomerObject";
import { ProductObject } from "./dataObjects/ProductObject";

let productObject = new ProductObject();
let customerObject = new CustomerObject();

export const resolvers = {
  Query: {
    products: () => productObject.getAll(),
    customers: () => customerObject.getAll(),
  },
  Mutation: {
    addProduct: (_: any, newProduct: Product) => productObject.add(newProduct),
    addCustomer: (_: any, newCustomer: Customer) =>
      customerObject.add(newCustomer),
    removeProduct: (_: any, product: { vin: string }) =>
      productObject.remove(product.vin),
    removeCustomer: (_: any, customer: { email: string }) =>
      customerObject.remove(customer.email),
  },
};
