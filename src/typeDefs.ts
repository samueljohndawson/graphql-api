const { gql } = require("apollo-server");

export const typeDefs = gql`
  type Product {
    vin: String
    colour: String
    make: String
    model: String
    price: String
  }

  type Customer {
    email: String
    forename: String
    surname: String
    contact_number: String
    postcode: String
  }

  type Query {
    products: [Product]
    customers: [Customer]
  }

  type Mutation {
    addProduct(
      vin: String!
      colour: String!
      make: String!
      model: String!
      price: String!
    ): Product
    addCustomer(
      email: String!
      forename: String!
      surname: String!
      contact_number: String!
      postcode: String!
    ): Customer
  }
`;
