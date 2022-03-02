import React, {useState} from 'react';
import AppContainer from './AppContainer';
import {SplashScreen} from './SplashScreen';

const Navigator = () => {
  const [visible, setVisible] = useState(false);

  setTimeout(() => {
    setVisible(true);
  }, 3000);

  return !visible ? <SplashScreen /> : <AppContainer />;
};

export default Navigator;
