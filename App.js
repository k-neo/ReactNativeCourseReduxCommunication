import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import HomeContainer from './Home';

export default class reduxApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <HomeContainer />
      </Provider>
    );
  }
}