import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Card Title</Text>
        { <View style={styles.cardRow}> 
          <View style={styles.cardLeft}> </View>
          <Text style={styles.cardRight}>Content of the Card</Text>
        </View>}
      </View>

      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 70,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  card: {
    backgroundColor: '#30D5C8',
    padding: 75,
  },
  cardRow: {
    backgroundColor: '#30D5C8',
    flexDirection: 'row',
    gap: '30px',
  },
  cardLeft: {
    backgroundColor: 'red',
    borderRadius: 100,
    width: '200px',
    height: '200px'
  },
  cardRight: {
    fontSize: 30,
    fontFamily: "timesNewRoman"
  },
});
