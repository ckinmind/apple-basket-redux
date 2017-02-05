import React from 'react';
import '../styles/appleItem.scss';

class AppleItem extends React.Component {

    render() {

        return (
            <div className="appleItem">
                <div className="apple"><img src="../images/apple.png" alt=""/></div>
                <div className="info">
                    <div className="name">红苹果 - 1号</div>
                    <div className="weight">265克</div>
                </div>
                <div className="btn-div"><button>吃掉</button></div>
            </div>
        );

    }
}

export default AppleItem;