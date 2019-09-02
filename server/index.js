let { ApolloServer, gql } = require('apollo-server-express');
let express = require('express');

// This is a (sample) collection of books we'll be able to query
// the GraphQL server for.  A more complete example might fetch
// from an existing data source like a REST API or database.
let books = [
  {
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling',
  },
  {
    title: 'Jurassic Park',
    author: 'Michael Crichton',
  },
];

// Type definitions define the "shape" of your data and specify
// which ways the data can be fetched from the GraphQL server.
let typeDefs = gql`
  # Comments in GraphQL are defined with the hash (#) symbol.

  # This "Book" type can be used in other type declarations.
  type Book {
    title: String
    author: String
  }

  # The "Query" type is the root of all GraphQL queries.
  # (A "Mutation" type will be covered later on.)
  type Query {
    books: [Book]
  }
`;

// Resolvers define the technique for fetching the types in the
// schema.  We'll retrieve books from the "books" array above.
let resolvers = {
  Query: {
    books: () => books,
  },
};

// In the most basic sense, the ApolloServer can be started
// by passing type definitions (typeDefs) and the resolvers
// responsible for fetching the data for those types.
let server = new ApolloServer({
  typeDefs,
  resolvers,
  formatError: (error) => {
    console.log(error);
    return error;
  },
  formatResponse: (response) => {
    console.log('Sending response at ' + new Date());
    // console.log(response);
    return response;
  },
  context: ({ req }) => {
    let clientId = req.get('Princess-Client') || null;
    let userId = req.get('Princess-User') || null;
    console.log("Headers", JSON.stringify(req.headers));
    let user = {
      clientId,
      userId,
    };
    console.log('User: ' + JSON.stringify(user));
    return { clientId, userId };
  },
});
let app = express();

app.get('/', async (req, res) => {
  res.send(`

<html>
  <head>
    <title>👸 Princess</title>
    <style>
      BODY {
        font-family: monospace
      }
    </style>
  </head>
  <body>
  <strong style="color: #F808FA;">👸 Princess </strong>
  
  <p>Thank you so and so!</p>

  <p>But our princess is in another castle!</p>
  <hr style="border: 1px solid #20FFFF;" />
  <a href="/graphql">/graphql</a>
  </body>
</html>
  `);
});

server.applyMiddleware({ app });

let port = process.env.PORT || 4000;

async function mainAsync() {
  // This `listen` method launches a web-server.
  app.listen({ port }, () => {
    console.log(`👸 Princess Server ready at http://localhost:${port}`);
    console.log(`🗂️  GraphQL Server ready at http://localhost:${port}${server.graphqlPath}`);
  });
}

if (require.main === module) {
  mainAsync();
}

module.exports = {
  server,
  app,
  port,
  mainAsync,
};
