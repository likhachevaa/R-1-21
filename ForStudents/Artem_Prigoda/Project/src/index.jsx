import React from 'react';
import ReactDom from 'react-dom';

import '@styles/main.scss';

import Router from './router/';
import { Provider } from 'react-redux';
import { history, initStore } from './Core/Store';

import { ConnectedRouter } from 'connected-react-router';

const container = document.querySelector('#app');

import { PersistGate } from 'redux-persist/integration/react';
const { store, persistor } = initStore();

ReactDom.render(
    <Provider store={ store }>
        <PersistGate loading={ null } persistor={ persistor }>
            <ConnectedRouter history={ history }>
                <Router />
            </ConnectedRouter>
        </PersistGate>
    </Provider>,
    container
);