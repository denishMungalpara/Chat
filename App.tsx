/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';
function App(): React.JSX.Element {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>
        Buddy's Chat
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    paddingHorizontal: 24,
    backgroundColor: 'white',
    flex: 1,
  },
  sectionTitle: {
    fontSize: 26,
    fontWeight: '600',
    color: 'black',
    fontStyle: 'italic',
  },
});

export default App;
