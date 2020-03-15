import React from 'react';
import { Provider } from 'react-redux';

import MainPage from './src/screens/MainPage';
import ReduxPage from './src/screens/ReduxPage';
import { store } from './src/store/store';

const App = props => {
  return (
    <Provider store={store}>
      <ReduxPage />
    </Provider>
  );
};

export default App;
