/* mobx实现 */

import React from 'react';
import ReactDOM from 'react-dom';
import appleStore from './mobx/appleStore';
import AppleBasket from './mobx/AppleBasket';
import { autorun} from 'mobx';

const store = new appleStore();

/** acturun测试*/
autorun(()=> {
    if (store.isPicking) {
        console.log('又在采摘新苹果了');
    }
});

ReactDOM.render(<AppleBasket store={store} />, document.getElementById('app'));
