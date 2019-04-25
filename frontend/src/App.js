import React from 'react';
import { ThemeProvider } from 'styled-components';
import Neat from 'neat-components';
import { Provider } from 'react-redux';
import store from './redux';
import Hoop from './routes';
import theme from './styles';

const App = () => (
  <ThemeProvider theme={{ ...theme, ...Neat() }}>
    <Provider store={store}>
      <Hoop />
    </Provider>
  </ThemeProvider>
);

export default App;
