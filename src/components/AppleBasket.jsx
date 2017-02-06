import React from 'react';
import { connect } from 'react-redux';
import '../styles/appleBasket.scss';
import AppleItem from './AppleItem';
import actions from '../actions/appleAction';
import { bindActionCreators } from 'redux';

class AppleBusket extends React.Component {

    getAppleItem(apples){
        return apples.map(apple => {
            if(!apple.isEaten){
                return  <AppleItem state={apple}
                                   actions={{eatApple: actions.eatApple}}
                                   key={apple.id}
                        />
            }
        });
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
        //state = this.getMockState(); // todo: 是否开启模拟数据的开关，注释这行代码关闭模拟数据
        let { apples } = state;

        // status存储的是当前没吃和已吃苹果的数目和重量
        let status = {
            appleNow: {
                quantity: 0,
                weight: 0
            },
            appleEaten: {
                quantity: 0,
                weight: 0
            }
        };

        apples.forEach(apple => {
            let selector = apple.isEaten ? 'appleEaten':'appleNow';
            status[selector].quantity ++;
            status[selector].weight += apple.weight;
        });

        return (
            <div className="appleBusket">
                <div className="title">苹果篮子</div>

                <div className="stats">
                    <div className="section">
                        <div className="head">当前</div>
                        <div className="content">
                            {status.appleNow.quantity}个苹果，
                            {status.appleNow.weight}克
                        </div>
                    </div>
                    <div className="section">
                        <div className="head">已吃掉</div>
                        <div className="content">
                            {status.appleEaten.quantity}个苹果，
                            {status.appleEaten.weight}克
                        </div>
                    </div>
                </div>

                <div className="appleList">
                    { apples.map(apple => {
                            if(!apple.isEaten)
                                return <AppleItem state={apple}
                                                  actions={{eatApple: actions.eatApple}}
                                                  key={apple.id}
                                        />
                        })
                    }
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