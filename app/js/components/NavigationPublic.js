import React from 'react';
import { Motion, spring } from 'react-motion';

export default class NavigationPublic extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };

        this.targetX = 25;
        this.originX = 100;
    }
    render() {
        return (
            <Motion style={{ x: spring(this.props.amActive ? this.targetX : this.originX) }}>
                {({ x }) =>
                    <div className="navigation-public" style={{
                        transform: "translate3d(" + x + "vw, 0vw, 0)"
                    }}>
                        <ul>
                            <li>Home</li>
                            <li>Products</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                }
            </Motion>
        );
    }
}


