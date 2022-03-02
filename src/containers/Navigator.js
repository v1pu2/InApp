import React, {useState} from 'react';
import BottomTabLayout from './BottomTabLayout';
import {SplashScreen} from './SplashScreen';

const Navigator = () => {
  const [visible, setVisible] = useState(false);

  setTimeout(() => {
    setVisible(true);
  }, 3000);

  return !visible ? <SplashScreen /> : <BottomTabLayout />;
};

export default Navigator;
