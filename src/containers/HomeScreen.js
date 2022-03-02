import React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import EventRecCard from '../component/EventRecCard';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <View style={styles.rowView}>
          <EventRecCard />
          <EventRecCard />
          <EventRecCard />
        </View>
      </ScrollView>
      <Text>Home SCREEN</Text>
      {/* <EventRecCard /> */}
    </View>
  );
};
export default HomeScreen;

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
