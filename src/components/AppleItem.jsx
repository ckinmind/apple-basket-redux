import React from 'react';
import '../styles/appleItem.scss';

class AppleItem extends React.Component {

    shouldComponentUpdate(nextProps) {
        return nextProps.state != this.props.state;
    }

    render() {
        let { state, actions } = this.props;
        /**
         * 这个区域是 mock 数据区，也作为组件文档，请书写清楚
         * //在组件发布时，请注释掉，提高性能
         */
        let mockState = {
            id: 1,
            weight: 256,
            isEaten: false
        };
        let mockActions = {
            eatApple : id => console.log('eatApple',id)
        };
        /**
         * 开关这行代码，用于切换装入的数据来源。(为了开关的方便，请把两句代码合成一行)
         * 在开发阶段打开，使用内部 state 和 action, 开发完成后请注释关闭
         */
        state = mockState; actions = mockActions;
        if (state.isEaten) return null;

        return (
            <div className="appleItem">
                <div className="apple"><img src="../images/apple.png" alt=""/></div>
                <div className="info">
                    <div className="name">红苹果 - {state.id}号</div>
                    <div className="weight">{state.weight}克</div>
                </div>
                <div className="btn-div">
                    <button onClick={() => actions.eatApple(state.id)}> 吃掉 </button>
                </div>
            </div>
        );

    }
}

export default AppleItem;