import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware  } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import AppleBasket from './components/AppleBasket';
import thunk from 'redux-thunk';

const store = createStore(reducer, applyMiddleware(thunk));

//console.log(store.getState());
// 打印出reducers中的initialState

ReactDOM.render(
    <Provider store={store}>
        <AppleBasket />
    </Provider>,
    document.getElementById('app')
);
