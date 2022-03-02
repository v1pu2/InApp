import React, {useState} from 'react';
import {SplashScreen} from './SplashScreen';

const Navigator = () => {
  const [visible, setVisible] = useState(false);

  setTimeout(() => {
    setVisible(true);
  }, 3000);
  return !visible ? <SplashScreen /> : <SplashScreen />;
};

export default Navigator;
