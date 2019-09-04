import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import { AppLoading } from 'expo';

import * as Font from 'expo-font';
import { useFonts } from '@use-expo/font';

export default function App() {
  let [fontsLoaded] = useFonts({
    'Inter-Black': require('./assets/Inter-Black.woff2'),
    'Inter-Regular': require('./assets/Inter-Regular.woff2'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Princess</Text>
      <Image
        source={require('./assets/AppIcon512@2x.png')}
        style={{
          height: 256,
          width: 256,
          marginVertical: 10,
        }}
      />
      <Text style={styles.text}>Thank you Mario!</Text>
      <Text style={styles.text}>But our princess is in another castle!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Inter-Black',
    fontSize: 30,
  },
  text: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
