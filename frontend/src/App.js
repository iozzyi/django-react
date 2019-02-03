import React from 'react';
import { Provider } from 'react-redux';
import store from './redux';
import Hoop from './routes';

const App = () => (
  <Provider store={store}>
    <Hoop />
  </Provider>
);

export default App;
