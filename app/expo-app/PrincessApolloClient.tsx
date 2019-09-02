import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';
import { setContext } from 'apollo-link-context';
import { createHttpLink } from 'apollo-link-http';

let httpLink = createHttpLink({
  uri: 'http://localhost:4000/graphql',
});

let authLink = setContext((_, { headers }) => {
  let clientId = 'c:456';
  let userId = 'u:789';
  return {
    headers: {
      ...headers,
      'Princess-User': userId,
      'Princess-Client': clientId,
      'Princess-Agent': 'ApolloClient',
    },
  };
});

let client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
