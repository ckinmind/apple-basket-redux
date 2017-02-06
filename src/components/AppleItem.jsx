import React from 'react';
import '../styles/appleItem.scss';

class AppleItem extends React.Component {

    shouldComponentUpdate(nextProps) {
        return nextProps.state != this.props.state;
    }

    render() {
        let { state, actions } = this.props;

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