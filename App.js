/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux'
import configureStore from './store/configure'
import Navigator from './Navigator';


const store = configureStore()

const App: () => React$Node = () => {
    return (
        <Provider store={store}>
            <Navigator />
        </Provider>
    );
};

export default App;
