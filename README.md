# GraphQL Server

This app runs [Apollo Server](https://www.apollographql.com/docs/) which can be queried for items such as Products and Customers.

## Prerequisites

Ensure that you have [nvm and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) installed on your system.

Ensure you are using Node v20.15.0:

```
nvm use 20.15.0
```

## Installation

Install the required dependencies:

```
npm install
```

## Configuration

You will need to declare which repository to be used by setting the
`DATA_SOURCE` enviroment variable in the `.env` file. This can be set to either `csv` or `db` to select either the CSV or Database repositories respectfully. Check the `.env.example` file for an example.

If `DATA_SOURCE` is not defined or not recognised, the application will default to using the CSV repository.

## Usage

Start the GraphQL Server.

```
npm run start:ts
```

If successful, you should see the following output in the console:

```
🚀 Server ready at: http://localhost:4000/
```

## Testing

Tests are run using the jest testing framework. To start all tests, run:

```
npm test
```
