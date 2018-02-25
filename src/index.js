import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from '../src/app/store/configureStore';
import AppRooot from './app.jsx';

const store = configureStore();

ReactDom.render(
    <Provider store={store}>
        <AppRooot />
    </Provider>,
    document.getElementById('root')
)