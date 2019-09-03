import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';
import { setContext } from 'apollo-link-context';
import { createHttpLink } from 'apollo-link-http';
import { AsyncStorage } from 'react-native';

let httpLink = createHttpLink({
  uri: 'http://192.168.1.28:4000/graphql',
});

let getClientIdAsync = async () => {
  let clientId = await AsyncStorage.getItem('Princess-Client');
  if (!clientId) {
    clientId = 'c:' + (Math.random() + '').substr(3);
    await AsyncStorage.setItem('Princess-Client', clientId);
  }
  return clientId;
};

let authLink = setContext(async (_, { headers }) => {
  let clientId = await getClientIdAsync();
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

Object.assign(client, {
  getClientIdAsync,
});

export default client;