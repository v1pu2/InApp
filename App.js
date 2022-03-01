import React, {useState} from 'react';

import {SplashScreen} from './src/containers/SplashScreen';
import {EventListScreen} from './src/containers/EventListScreen';

const App = () => {
  const [visible, setVisible] = useState(false);

  setTimeout(() => {
    setVisible(true);
  }, 3000);
  return !visible ? <SplashScreen /> : <SplashScreen />;
};

export default App;
