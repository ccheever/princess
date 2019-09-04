import gql from 'graphql-tag';
import { ApolloProvider, useQuery } from '@apollo/react-hooks';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import apiClient from './PrincessApolloClient';
import windowId from './window-id';


let Hr = () => {
  return (
    <View
      style={{
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        height: 30,
      }}
    />
  );
};

let Books = () => {
  let { loading, error, data, refetch } = useQuery(gql`
    query {
      books {
        title
        author
      }
    }
  `);

  if (loading) {
    return <Text>Loading books...</Text>;
  }

  if (error) {
    return <Text style={{ color: 'red' }}>Error loading books :(</Text>;
  }

  return (
    <View>
      <Button
        title="Refresh Data"
        onPress={() => {
          refetch();
        }}
      />
      {data.books.map(({ title, author }, i) => (
        <View
          key={title}
          style={{
            borderRadius: 3,
            borderWidth: 2,
            borderColor: '#eeeeee',
            marginVertical: 8,
            padding: 8,
          }}>
          <Text style={{ fontWeight: 'bold' }}>{title}</Text>
          <Text style={{ fontStyle: 'italic' }}>by {author}</Text>
        </View>
      ))}
    </View>
  );
};

export default function App() {
  let [clientId, setClientId] = useState(null);

  (async () => {
    // @ts-ignore
    let _clientId = await apiClient.getClientIdAsync();
    setClientId(_clientId);
  })();

  return (
    <ApolloProvider client={apiClient}>
      <View style={styles.container}>
        <Text>Thank you Mario!</Text>
        <Text>But our princess is in another castle!</Text>
        <Hr />
        <Text>This is an Apollo App too.</Text>
        <Hr />
        <Books />
        <Hr />
        <Text>window = {'' + window}</Text>
        <Text>global = {'' + global}</Text>
        <Text>windowId = {'' + windowId()}</Text>
        {clientId && <Text>clientId = {'' + clientId}</Text>}
      </View>
    </ApolloProvider>
  );
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
