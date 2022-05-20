

import { Provider as PaperProvider } from 'react-native-paper';
import * as React from 'react';
import { View, Text, Button } from 'react-native';
//
// Redux
//
import store from '../redux/redux';
import { Provider } from 'react-redux';


//
//Pages
//
import App from './App';

export default function Main() {
    return (
        <PaperProvider>
            <Provider store={store}>
                <App />
            </Provider>
        </PaperProvider>
    )
}




