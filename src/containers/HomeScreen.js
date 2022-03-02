import React from 'react';
import {Text, View, StyleSheet, ScrollView, StatusBar} from 'react-native';
import EventRecCard from '../component/EventRecCard';
import GeneralStatusBarColor from '../component/GeneralStatusBarColor';
import fonts from '../theme/fonts';
const HomeScreen = () => {
  return (
    <View style={{flex: 1}}>
      <GeneralStatusBarColor
        backgroundColor={'#A462E2'}
        barStyle="light-content"
      />

      <View style={styles.topView}>
        <Text style={styles.txtWelcome}>Welcome</Text>
      </View>
      <Text style={styles.txtRecEvent}>Recommended Events</Text>
      <View>
        <ScrollView horizontal contentContainerStyle={styles.root}>
          <View style={styles.rowView}>
            <EventRecCard />
            <EventRecCard />
            <EventRecCard />
          </View>
        </ScrollView>
        <Text style={styles.txtRecEvent}>All Events</Text>
        <ScrollView>
          <View styles={{backgroundColor: 'red'}}>
            <Text>vertical view</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  topView: {
    height: 80,
    backgroundColor: '#7555CF',
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    justifyContent: 'center',
    marginBottom: 29,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 3,
  },
  txtWelcome: {
    color: 'white',
    paddingLeft: 20,
    ...fonts.normalM,
    fontSize: 22,
    fontWeight: '600',
    lineHeight: 27,
  },
  root: {
    flex: 1,
    marginBottom: 30,
  },
  txtRecEvent: {
    color: '#565066',
    paddingLeft: 20,
    ...fonts.normalM,
    fontSize: 13,
    fontWeight: '500',
    lineHeight: 16,
  },
  rowView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,

    // flex: 1,
  },
});
