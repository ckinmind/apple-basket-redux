import React from 'react';
import { connect } from 'react-redux';
import '../styles/appleBasket.scss';
import AppleItem from './AppleItem';
import actions from '../actions/appleAction';
import { bindActionCreators } from 'redux';

class AppleBusket extends React.Component {

    getAppleItem(){
        //return sa
    }

    /** 这是mocks数据，正式环境需要删除这个方法和下面的赋值部分*/
    getMockState(){
        //这部分从对应的 appleBasketReducer.js 中拷贝
        return {
            isPicking : false,
            newAppleId: 3,
            apples: [
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
    }


    render(){

        let { state, actions  } = this.props;

        //是否开启模拟数据的开关，注释这行代码关闭模拟数据
        state = this.getMockState();
        

        //对 state 做显示级别的转化
        let stats = {
            appleNow: {
                quantity: 0,
                weight: 0
            },
            appleEaten: {
                quantity: 0,
                weight: 0
            }
        };

        state.apples.forEach(apple => {
            let selector = apple.isEaten ? 'appleEaten':'appleNow';
            stats[selector].quantity ++;
            stats[selector].weight += apple.weight;
        });

        return (
            <div className="appleBusket">
                <div className="title">苹果篮子</div>

                <div className="stats">
                    <div className="section">
                        <div className="head">当前</div>
                        <div className="content">
                            {stats.appleNow.quantity}个苹果，
                            {stats.appleNow.weight}克
                        </div>
                    </div>
                    <div className="section">
                        <div className="head">已吃掉</div>
                        <div className="content">
                            {stats.appleEaten.quantity}个苹果，
                            {stats.appleEaten.weight}克
                        </div>
                    </div>
                </div>

                <div className="appleList">
                    {/*<div className="empty-tip">苹果篮子空空如也</div>*/}
                    { state.apples.map(apple =>
                        <AppleItem state={apple}
                                   actions={{eatApple: actions.eatApple}}
                                   key={apple.id}
                        />
                    )}
                </div>

                <div className="btn-div">
                    <button onClick={actions.pickApple} >摘苹果</button>
                </div>

            </div>
        );
    }

}



/**
 * 原来写法中写的是：state: state.appleBasket
 * 应该是因为文章中提到的例子是整个项目的一部分，原项目store中的state中应该是多个reducer合并的数据
 * 所以原来的写法要写state.appleBasket，而在本项目中只有一个reducer,所以这里改为state:state
 *
 * 为以后容纳更多reducer的写法是在reducers文件夹中再定义一个index.js，在里面combineReducers，即使只有一个
 * 这样就可以写成state.appleBasket，且有了扩展性，写法参照many-react-demo中的todo4
 */
const mapStateToProps = state => ({
    state: state.appleBasket
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
});

 export default connect(mapStateToProps, mapDispatchToProps)(AppleBusket);