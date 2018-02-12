import React from 'react';
import { Motion, spring } from 'react-motion';
import ShouldNotUpdate from 'should-not-update'

export class NavigationPublic extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };

        this.targetX = 25;
        this.originX = 100;
        this.track = 0;

        this.inc = this.inc.bind(this);

    }
    inc () {
        this.track++;
        // console.log(this.track);
    }
    render() {
        return (
            <Motion style={{ x: spring(this.props.amActive ? this.targetX : this.originX) }}>
                {({ x }) =>
                    <div className="navigation-public" style={{
                        transform: "translate3d(" + x + "vw, 0vw, 0)"
                    }}>
                        <ShouldNotUpdate component="ul">
                        {/* {console.log('render... .. .')} */}
                            <li>Home {x} {this.inc()}</li>
                            <li>Products</li>
                            <li>Contact</li>
                        </ShouldNotUpdate>
                    </div>
                }
            </Motion>
        );
    }
}


