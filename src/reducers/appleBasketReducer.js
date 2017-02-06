// apple basket reducer

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
            newState = Object.assign({}, state, {
                isPicking: true
            });
            return newState;

        case 'apple/DONE_PICK_APPLE':
            newState = Object.assign({}, state, {
                apples: [
                    ...state.apples,
                    {
                        id: state.newAppleId,
                        weight: action.payload,
                        isEaten: false
                    }
                ],
                newAppleId: state.newAppleId + 1,
                isPicking: false
            });
            return newState;

        case 'apple/FAIL_PICK_APPLE':
            //这里只是简单处理
            newState = Object.assign({}, state, {
                isPicking: false
            });
            return newState;

        case 'apple/EAT_APPLE':

            console.log(state);
            let newApples = state.apples.map(apple => {
                if (apple.id == action.payload) {
                    apple.isEaten = true;
                    console.log('fdfdfdf');
                }
                return apple;
            });
            console.log(newApples);

            newState = {
                ...state,
                apples: newApples
            };
            return newState;

        default:
            return state;
    }

};
