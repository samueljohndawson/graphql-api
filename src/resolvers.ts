import { Product, Customer } from "./AppStateTypes";

// TODO - Remove this stub data
const products: Product[] = [
  {
    vin: "1C6RR6LT9DS578427",
    colour: "White",
    make: "Landrover",
    model: "Evoque",
    price: "52000",
  },
];

const customers: Customer[] = [
  {
    email: "tom.harding1974@gmail.co.uk",
    forename: "Tom",
    surname: "Harding",
    contact_number: "07938244758",
    postcode: "SS26GH",
  },
];

export const resolvers = {
  Query: {
    products: () => products,
    customers: () => customers,
  },
};
