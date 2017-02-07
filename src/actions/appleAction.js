//import ajax from '../services/ajax'; //经过封装的加强型 ajax 函数
import $ from 'jquery';

//这是名空间，对普通action做划分
const prefix = 'apple/';

let actions = {

    //注意这里需要 () => ... , 不然 pickAppleAction 不是一个actionCreator, 而是一个thunk
    pickApple: () => (dispatch, getState) => {

        //如果正在摘苹果，则结束这个thunk, 不执行摘苹果
        console.log('beginPickApple');
        if(getState().isPicking)
            return;



        //通知开始摘苹果
        console.log('beginPickApple');
        dispatch(actions.beginPickApple());
        console.log(getState());



        //发送摘苹果请求
        // ajax({
        //     url: '/appleBasket/pickApple',
        //     method: 'GET'
        // }).done(data => {
        //     dispatch(actions.donePickApple(data.weight))
        // }).fail(xhr => {
        //     dispatch(actions.failPickApple(xhr.responseText));
        // });

        $.ajax({
            url: 'https://hacker-news.firebaseio.com/v0/jobstories.json',
            method: 'GET'
        }).done(data => {
            data.weight = 345;
            dispatch(actions.donePickApple(data.weight))
        }).fail(xhr => {
            dispatch(actions.failPickApple(xhr.responseText));
            console.log(getState());
        })



    },

    //
    // pickApple: ()=> ({
    //     type: 'apple/NEW_APPLE'
    // }),


    beginPickApple: () => ({
        type: 'apple/BEGIN_PICK_APPLE'
    }),

    donePickApple: appleWeight => ({
        type: 'apple/DONE_PICK_APPLE',
        payload: appleWeight
    }),

    failPickApple: errMsg => ({
        type: 'apple/FAIL_PICK_APPLE',
        payload: new Error(errMsg),
        error: true
    }),

    eatApple: appleId => ({
        type: 'apple/EAT_APPLE',
        payload: appleId
    })

};

export default actions;