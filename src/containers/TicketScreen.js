import React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import EventRecCard from '../component/EventRecCard';

const TicketScreen = () => {
  return (
    <View style={styles.container}>
      <Text>TicketScreen</Text>
    </View>
  );
};
export default TicketScreen;

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
