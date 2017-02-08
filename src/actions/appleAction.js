//import ajax from '../services/ajax'; //经过封装的加强型 ajax 函数
import $ from 'jquery';

//这是名空间，对普通action做划分
const prefix = 'apple/';

let actions = {

    /**
     *  原来写法是两个箭头函数，不太好看懂，所以改为ES5的function写法，这样可读性会好一点
     *  本来Action Creator　应该返回一个对象，但是这里为了实现异步而返回了一个函数
     *  dispatch正常情况下是发送一个对象类型的action, 无法处理发送一个函数类型的参数
     *  这时候就要引入redux-thunk了，它会改造dispatch这个方法，使之可以接受一个函数类型的参数
     *  至于怎么改造的dispatch，暂时不关心，只要在入口文件createStore的时候改成
     *
     *  import { createStore, applyMiddleware  } from 'redux';
     *  const store = createStore(reducer, applyMiddleware(thunk));
     *  import thunk from 'redux-thunk';
     *
     *  原来是：const store = createStore(reducer);
     */
    pickApple: function() {

        return function(dispatch, getState) {
            /** 如果正在摘苹果，则结束这个thunk, 不执行摘苹果 */
            if (getState().appleBasket.isPicking){
                return;
            }

            /** 通知开始摘苹果 */
            dispatch(actions.beginPickApple());

            $.ajax({
                url: 'https://hacker-news.firebaseio.com/v0/jobstories.json',
                method: 'GET'
            }).done(data => {
                /** 备注这里的url只是测试用的，这个是之前hackernews的api, 这里只是确保接口是通的，至于数据还是自己mock */
                let weight = Math.floor(200 + Math.random()*50);
                dispatch(actions.donePickApple(weight));
            }).fail(xhr => {
                dispatch(actions.failPickApple(xhr.responseText));
            })
        }
    },

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