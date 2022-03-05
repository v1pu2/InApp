import React, {useEffect, useState, useRef} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Platform,
  Linking,
  Modal,
  SafeAreaView,
  Animated,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';

import {getCheckoutDetails, getEventDetail, purchase} from '../services';
import fonts from '../theme/fonts';

import EventDesc from '../component/EventDesc';
import ModalView from '../component/ModalView';
import BackSvg from '../assets/svgs/BackSvg';

const HEADER_WIDTH = Dimensions.get('window').width;
const HEADER_MAX_HEIGHT = 340;
const HEADER_MIN_HEIGHT = 84;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

const EventDetailScreen = ({navigation, route}) => {
  const [event, setEvent] = useState({});
  const [allEvents, setAllEvents] = useState([]);
  const [purchaseData, setPurchaseData] = useState({});
  const [isModalVisible, setIsModalVisible] = useState(false);

  const scrollY = useRef(new Animated.Value(0)).current;

  const headerTranslateY = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [0, -HEADER_SCROLL_DISTANCE],
    extrapolate: 'clamp',
  });

  const imageOpacity = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [1, 1, 0],
    extrapolate: 'clamp',
  });
  const imageTranslateY = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [0, 100],
    extrapolate: 'clamp',
  });

  const titleScale = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [1, 1, 0.9],
    extrapolate: 'clamp',
  });
  const titleTranslateY = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [0, 0, -8],
    extrapolate: 'clamp',
  });
  console.log('titleTranslateY', titleTranslateY);
  const selectedId = route?.params?.eventID;
  const callApi = async () => {
    try {
      const response = await getEventDetail();
      // console.log('response--', JSON.stringify(response?.data));
      if (
        response?.status === 200 &&
        response?.data?.eventDetails &&
        response?.data?.eventDetails.length > 0
      ) {
        setAllEvents(response?.data?.eventDetails);
      }
    } catch (error) {
      console.log('error  in detail res', error);
    }
  };
  useEffect(() => {
    callApi();
  }, []);

  useEffect(() => {
    var selectedEvent = allEvents.find(data => data?.id === selectedId);
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

    try {
      const response = await purchase(request);
      if (response?.status === 200 && response?.data) {
        setIsModalVisible(true);
        setPurchaseData(response?.data?.purchase);
      }
    } catch (error) {
      console.log('error -----', error);
    }
  };
  const onPriceClick = data => {
    callPurchaseApi(data);
  };
  // click and open map application
  const onLocationClick = location => {
    const link = `http://api.positionstack.com/v1/forward?access_key=81f2cbab5535951fe844607ead12aad2&query=${location}`;

    try {
      axios.get(link).then(res => {
        const latitude = res?.data?.data[0]?.latitude;
        const longitude = res?.data?.data[0]?.longitude;
        const label = location;

        const url = Platform.select({
          ios: 'maps:' + latitude + ',' + longitude + '?q=' + label,
          android: 'geo:' + latitude + ',' + longitude + '?q=' + label,
        });

        console.log('===url====>', url);
        Linking.openURL(url);

        // const url1 = Platform.select({
        //   ios: `comgooglemaps://?center=${latitude},${longitude}&q=${latitude},${longitude}&zoom=14&views=traffic"`,
        //   android: `geo://?q=${latitude},${longitude}`,
        // });
        // Linking.canOpenURL(url1)
        //   .then(supported => {
        //     if (supported) {
        //       console.log('in ifff');
        //       Linking.openURL(url1);
        //     } else {
        //       console.log('in elseee');
        //       const browser_url = `https://www.google.de/maps/@${latitude},${longitude}`;
        //       Linking.openURL(browser_url);
        //     }
        //   })
        //   .catch(() => {
        //     console.log('in catch');
        //     if (Platform.OS === 'ios') {
        //       Linking.openURL(`maps://?q=${latitude},${longitude}`);
        //     }
        //   });

        // Linking.openURL(url);
        // Linking.canOpenURL(url)
        //   .then(supported => {
        //     if (supported) {
        //       const label1 = 'New York, NY, USA';

        //       const url1 = Platform.select({
        //         ios: 'maps:' + latitude1 + ',' + longitude1 + '?q=' + label1,
        //         android: 'geo:' + latitude1 + ',' + longitude1 + '?q=' + label1,
        //       });
        //       Linking.openURL(url1);
        //     } else {
        //       const browser_url = `https://www.google.de/maps/@${latitude},${longitude}`;
        //       return Linking.openURL(browser_url);
        //     }
        //   })
        //   .catch(() => {
        //     if (Platform.OS === 'ios') {
        //       Linking.openURL(`maps://?q=${latitude1},${longitude1}`);
        //     }
        //   });
      });
    } catch (error) {
      console.log('error---', error);
    }
  };
  const callCheckoutApi = async () => {
    try {
      const response = await getCheckoutDetails();
      if (
        response?.status === 200 &&
        response?.data?.checkout &&
        response?.data?.checkout.length > 0
      ) {
        setIsModalVisible(false);
        navigation.navigate('Home');
      }
    } catch (error) {
      console.log('error', error);
    }
  };
  // close the modal view and navigate to home
  const onCloseClick = () => {
    callCheckoutApi();
  };
  return (
    <SafeAreaView style={styles.saveArea}>
      <Animated.View
        style={[styles.header, {transform: [{translateY: headerTranslateY}]}]}>
        <Animated.Image
          style={[
            styles.headerBackground,
            {
              opacity: imageOpacity,
              transform: [{translateY: imageTranslateY}],
            },
          ]}
          source={{
            uri: event?.mainImage,
          }}
          resizeMode={'cover'}
        />
      </Animated.View>
      <Animated.View style={styles.backView}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <BackSvg />
        </TouchableOpacity>
        <View style={styles.titleView}>
          <Text
            style={styles.txtName}
            numberOfLines={1}
            adjustsFontSizeToFit={true}>
            {event?.name}
          </Text>
        </View>
      </Animated.View>
      <Animated.View
        style={[
          styles.topBar,
          {
            transform: [{scale: titleScale}, {translateY: titleTranslateY}],
          },
        ]}>
        <Text
          style={styles.txtName}
          numberOfLines={1}
          adjustsFontSizeToFit={true}>
          {event?.name}
        </Text>
      </Animated.View>
      <Animated.ScrollView
        contentContainerStyle={styles.scrollContentView}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: true},
        )}>
        <EventDesc
          event={event}
          onPress={() => onPriceClick(event)}
          onLocationClick={() => onLocationClick(event?.location)}
        />
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
      </Animated.ScrollView>
    </SafeAreaView>
  );
};
export default EventDetailScreen;

const styles = StyleSheet.create({
  saveArea: {
    flex: 1,
    backgroundColor: '#eff3fb',
  },
  scrollContentView: {
    paddingTop:
      Platform.OS === 'ios' ? HEADER_MAX_HEIGHT - 60 : HEADER_MAX_HEIGHT - 30,
    padding: 20,
  },
  backView: {
    backgroundColor: 'transparent',
    marginTop: Platform.OS === 'ios' ? 20 : 40,
    marginLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleView: {
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 5,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#402583',
    backgroundColor: '#ffffff',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 1,
    borderRadius: 10,
    marginHorizontal: 12,
    marginTop: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#7555CF',
    overflow: 'hidden',
    height: HEADER_MAX_HEIGHT,
  },
  headerBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: HEADER_WIDTH,
    height: HEADER_MAX_HEIGHT,
    resizeMode: 'cover',
  },
  topBar: {
    justifyContent: 'flex-end',
    marginTop: 260,
    height: 50,
    position: 'absolute',
    left: 20,
    right: 0,
  },
  txtName: {
    color: 'white',
    ...fonts.normalM,
    fontSize: 22,
    fontWeight: 'bold',
    lineHeight: 28,
  },
  avatar: {
    height: 54,
    width: 54,
    resizeMode: 'contain',
    borderRadius: 54 / 2,
  },
  fullNameText: {
    fontSize: 16,
    marginLeft: 24,
  },
  // container: {
  //   flex: 1,
  //   marginTop: 30,
  // },
  // topView: {
  //   height: 80,
  //   backgroundColor: '#7555CF',
  //   borderBottomRightRadius: 30,
  //   borderBottomLeftRadius: 30,
  //   justifyContent: 'center',
  //   marginBottom: 29,
  //   shadowColor: '#000000',
  //   shadowOffset: {width: 0, height: 4},
  //   shadowOpacity: 0.5,
  //   shadowRadius: 8,
  //   elevation: 3,
  // },
  // image: {
  //   height: 300,
  //   borderTopRightRadius: 12,
  //   borderTopLeftRadius: 12,
  // },
  // txtWelcome: {
  // color: 'white',
  // paddingLeft: 20,
  // ...fonts.normalM,
  // fontSize: 22,
  // fontWeight: 'bold',
  // lineHeight: 28,
  // paddingBottom: 30,
  // },
  // contentView: {
  //   flex: 1,
  //   padding: 20,
  //   backgroundColor: 'white',
  // },
});
