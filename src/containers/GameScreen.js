import React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';


const GameScreen = () => {
  return (
    <View style={styles.container}>
      <Text>TicketScreen</Text>
    </View>
  );
};
export default GameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F6F6',
    padding: 10,
  },
  rowView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // flex: 1,
  },
});
