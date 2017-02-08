import { fromJS } from 'immutable';  //为什么immutable 没写入package.json 好奇怪

const initialState = {
    isPicking: false,
    newAppleId: 3,
    apples: [
        {
            id: 0,
            weight: 233,
            isEaten: false
        },
        {
            id: 1,
            weight: 235,
            isEaten: true
        },
        {
            id: 2,
            weight: 256,
            isEaten: false
        }
    ]
};


export default (state = initialState, action) => {

    let newState ;

    switch (action.type) {

        case 'apple/BEGIN_PICK_APPLE':

            /** 将isPicking设置true */
            return fromJS(state).set('isPicking', true).toJS();

        case 'apple/DONE_PICK_APPLE':

            let newApple =  {
                id: state.newAppleId,
                weight: action.payload,
                isEaten: false
            };

            /** 在apples中新增一个newApple， 将newAppleId增加1， 将isPicking设为false*/
            return fromJS(state).update('apples', list => list.push(newApple))
                                .set('newAppleId', state.newAppleId + 1)
                                .set('isPicking', false)
                                .toJS();

        case 'apple/FAIL_PICK_APPLE':

            /** 将isPicking设置false */
            return fromJS(state).set('isPicking', false).toJS();

        case 'apple/EAT_APPLE':

            /** 将id对应索引值的数组的isEaten设为true,表示已吃*/
            return fromJS(state).setIn(['apples', action.payload, 'isEaten'], true).toJS();

        default:
            return state;
    }

};
