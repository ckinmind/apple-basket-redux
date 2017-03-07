import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware  } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import reducer from './redux/reducers';
import AppleBasket from './redux/components/AppleBasket';


const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <AppleBasket />
    </Provider>,
    document.getElementById('app')
);