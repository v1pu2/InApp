import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  StatusBar,
  ImageBackground,
  Platform,
  Linking,
  Modal,
  Button,
} from 'react-native';
import axios from 'axios';
import GeneralStatusBarColor from '../component/GeneralStatusBarColor';
import {getEventDetail, purchase} from '../services';
import fonts from '../theme/fonts';

import EventDesc from '../component/EventDesc';
import ModalView from '../component/ModalView';

const EventDetailScreen = ({navigation, route}) => {
  const [event, setEvent] = useState({});
  const [allEvents, setAllEvents] = useState([]);
  const [purchaseData, setPurchaseData] = useState({});
  const [isLike, setIsLike] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const selectedId = route?.params?.eventID;
  const callApi = async () => {
    try {
      const response = await getEventDetail();
      //   console.log('response--', JSON.stringify(response?.data));
      if (
        response?.status === 200 &&
        response?.data?.eventDetails &&
        response?.data?.eventDetails.length > 0
      ) {
        setAllEvents(response?.data?.eventDetails);
      }
    } catch (error) {
      console.log('error', error);
    }
  };
  useEffect(() => {
    callApi();
  }, []);

  useEffect(() => {
    var selectedEvent = allEvents.find(data => data?.id === selectedId);
    console.log(selectedEvent);
    setEvent(selectedEvent);
  }, [allEvents, selectedId]);
  const callPurchaseApi = async data => {
    const request = {
      purchase: {
        dateTime: data?.bookBy,
        purchaseAmount: data?.totalPrize,
        paymentMethodType: 'visa',
        eventId: data?.id,
      },
    };
    // console.log('request--', request);
    try {
      const response = await purchase(request);
      console.log('response?.data--', response?.data);
      if (response?.status === 200 && response?.data) {
        setIsModalVisible(true);
        setPurchaseData(response?.data?.purchase);
      }
    } catch (error) {
      console.log('error', error);
    }
  };
  const onPriceClick = data => {
    callPurchaseApi(data);
  };
  // click and open map application
  const onLocationClick = location => {
    const link = `http://api.positionstack.com/v1/forward?access_key=81f2cbab5535951fe844607ead12aad2&query=${location}`;

    axios.get(link).then(res => {
      const latitude = res?.data?.data[0]?.latitude;
      const longitude = res?.data?.data[0]?.longitude;
      const label = location;

      const url = Platform.select({
        ios: 'maps:' + latitude + ',' + longitude + '?q=' + label,
        android: 'geo:' + latitude + ',' + longitude + '?q=' + label,
      });
      console.log(url);
      Linking.openURL(url);
    });
  };
  // close the modal view and navigate to home
  const onCloseClick = () => {
    setIsModalVisible(false);
    navigation.navigate('Home');
  };
  return (
    <ScrollView style={{flex: 1}}>
      {/* <GeneralStatusBarColor
        backgroundColor={'transparent'}
        barStyle="light-content"
      /> */}
      <ImageBackground
        source={{
          uri: event?.mainImage,
        }}
        resizeMode="cover"
        style={styles1.image}
        blurRadius={2}
        borderTopRightRadius={12}
        borderTopLeftRadius={12}>
        <View
          style={{
            justifyContent: 'flex-end',
            flex: 1,
          }}>
          <Text style={styles1.txtWelcome}>{event?.name}</Text>
        </View>
      </ImageBackground>
      <View style={styles1.contentView}>
        <EventDesc
          event={event}
          onPress={() => onPriceClick(event)}
          onLocationClick={() => onLocationClick(event?.location)}
        />
      </View>
      <View>
        {isModalVisible && (
          <Modal
            animationType={'fade'}
            transparent={true}
            visible={isModalVisible}
            onRequestClose={() => {
              console.log('Modal has been closed.');
            }}>
            {/*All views of Modal*/}
            <ModalView
              onPressClose={() => onCloseClick()}
              setIsModalVisible={setIsModalVisible}
              purchaseData={purchaseData}
            />
          </Modal>
        )}
      </View>
    </ScrollView>
  );
};
export default EventDetailScreen;

const styles1 = StyleSheet.create({
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
  image: {
    height: 300,
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
  },
  txtWelcome: {
    color: 'white',
    paddingLeft: 20,
    ...fonts.normalM,
    fontSize: 22,
    fontWeight: 'bold',
    lineHeight: 28,
    paddingBottom: 30,
  },
  contentView: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
});
