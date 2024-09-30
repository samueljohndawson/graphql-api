import { csvToObjects } from "./helperFunctions";

export const resolvers = {
  Query: {
    products: () => csvToObjects("product.csv"),
    customers: () => csvToObjects("customer.csv"),
  },
};
