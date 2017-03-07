import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import actions from '../actions/appleAction';
import AppleItem from './AppleItem';
import '../../styles/appleBasket.scss';

class AppleBusket extends React.Component {

    /**  计算当前已吃和未吃苹果的状态*/
    calculateStatus(){
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
        this.props.appleBasket.apples.forEach(apple => {
            let selector = apple.isEaten ? 'appleEaten':'appleNow';
                status[selector].quantity ++;
                status[selector].weight += apple.weight;
        });
        return status;
    }

    /** 获取未吃苹果的组件数组*/
    getAppleItem(apples) {
        let data = [];
        apples.forEach(apple => {
            if (!apple.isEaten) {
                data.push( <AppleItem apple={apple} eatApple={this.props.actions.eatApple} key={apple.id}/> )
            }
        });

        if(!data.length) data.push(<div className="empty-tip" key="empty">苹果篮子空空如也</div>);

        return data;
    }

    render(){

        let { appleBasket, actions  } = this.props;
        let { apples, isPicking} = appleBasket;
        let status = this.calculateStatus();
        let {
            appleNow: {quantity:notEatenQuantity,weight:notEatenWeight},
            appleEaten: {quantity:EatenQuantity,weight:EatenWeight}
        } = status;


        return (
            <div className="appleBusket">
                <div className="title">苹果篮子</div>

                <div className="stats">
                    <div className="section">
                        <div className="head">当前</div>
                        <div className="content">{notEatenQuantity}个苹果，{notEatenWeight}克
                        </div>
                    </div>
                    <div className="section">
                        <div className="head">已吃掉</div>
                        <div className="content">{EatenQuantity}个苹果，{EatenWeight}克</div>
                    </div>
                </div>

                <div className="appleList">
                    { this.getAppleItem(apples) }
                </div>

                <div className="btn-div">
                    <button  className={isPicking ? 'disabled' : ''}  onClick={actions.pickApple} >摘苹果</button>
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
    appleBasket: state.appleBasket
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
});

 export default connect(mapStateToProps, mapDispatchToProps)(AppleBusket);