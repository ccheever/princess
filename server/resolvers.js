let sessionlib = require('./sessionlib');

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

// Resolvers define the technique for fetching the types in the
// schema.  We'll retrieve books from the "books" array above.
let resolvers = {
  Query: {
    books: () => books,
  },
  Mutation: {
    startLogin: async (_, { contact }, context, info) => {
      return await sessionlib.startLogin$(contact);
    },
  },
};

module.exports = resolvers;
