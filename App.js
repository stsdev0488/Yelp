import React from 'react';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import AppContainer from './src/AppContainer';
import store from './src/Store';

const App = () => {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
};

export default App;
