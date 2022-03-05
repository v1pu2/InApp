import React, {useEffect, useState, useRef} from 'react';
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
  SafeAreaView,
  Image,
  Animated,
  Dimensions,
} from 'react-native';
import axios from 'axios';
import GeneralStatusBarColor from '../component/GeneralStatusBarColor';
import {getEventDetail, purchase} from '../services';
import fonts from '../theme/fonts';

import EventDesc from '../component/EventDesc';
import ModalView from '../component/ModalView';

const HEADER_WIDTH = Dimensions.get('window').width;
const HEADER_MAX_HEIGHT = 340;
const HEADER_MIN_HEIGHT = 84;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;
const DATA = Array.from({length: 30});

const imageUri =
  'https://i.pinimg.com/originals/a9/88/a4/a988a47e605cacc02b0bb41c85270de3.jpg';

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
        console.log(url);
        Linking.openURL(url);
      });
    } catch (error) {
      console.log('error---', error);
    }
  };
  // close the modal view and navigate to home
  const onCloseClick = () => {
    setIsModalVisible(false);
    navigation.navigate('Home');
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
            uri: imageUri,
          }}
          resizeMode={'cover'}
        />
      </Animated.View>
      <Animated.View
        style={[
          styles.topBar,
          {
            transform: [{scale: titleScale}, {translateY: titleTranslateY}],
          },
        ]}>
        <Text style={styles.title}>Management</Text>
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
        {/* {DATA.map(renderListItem)} */}
      </Animated.ScrollView>
    </SafeAreaView>
    // <ScrollView style={{flex: 1}}>
    //   {/* <GeneralStatusBarColor
    //     backgroundColor={'transparent'}
    //     barStyle="light-content"
    //   /> */}
    //   <ImageBackground
    //     source={{
    //       uri: event?.mainImage,
    //     }}
    //     resizeMode="cover"
    //     style={styles1.image}
    //     blurRadius={2}
    //     borderTopRightRadius={12}
    //     borderTopLeftRadius={12}>
    //     <View
    //       style={{
    //         justifyContent: 'flex-end',
    //         flex: 1,
    //       }}>
    //       <Text style={styles1.txtWelcome}>{event?.name}</Text>
    //     </View>
    //   </ImageBackground>
    //   <View style={styles1.contentView}>
    // <EventDesc
    //   event={event}
    //   onPress={() => onPriceClick(event)}
    //   onLocationClick={() => onLocationClick(event?.location)}
    // />
    //   </View>
    // <View>
    //   {isModalVisible && (
    //     <Modal
    //       animationType={'fade'}
    //       transparent={true}
    //       visible={isModalVisible}
    //       onRequestClose={() => {
    //         console.log('Modal has been closed.');
    //       }}>
    //       {/*All views of Modal*/}
    //       <ModalView
    //         onPressClose={() => onCloseClick()}
    //         setIsModalVisible={setIsModalVisible}
    //         purchaseData={purchaseData}
    //       />
    //     </Modal>
    //   )}
    // </View>
    // </ScrollView>
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
      Platform.OS === 'ios' ? HEADER_MAX_HEIGHT - 20 : HEADER_MAX_HEIGHT + 20,
    padding: 20,
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
  title: {
    color: 'white',
    fontSize: 20,
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
  //   color: 'white',
  //   paddingLeft: 20,
  //   ...fonts.normalM,
  //   fontSize: 22,
  //   fontWeight: 'bold',
  //   lineHeight: 28,
  //   paddingBottom: 30,
  // },
  // contentView: {
  //   flex: 1,
  //   padding: 20,
  //   backgroundColor: 'white',
  // },
});
