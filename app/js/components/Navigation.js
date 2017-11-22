import React from 'react';
import NavigationPublic from './NavigationPublic';
import NavigationPrivate from './NavigationPrivate';
import Header from './Header';

export default class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            publicNavigation: {
                amActive: false
            }
        };

    }
    toggleNav() {
        let navState =  (this.state.publicNavigation.amActive) ? false : true;

        this.setState({
            publicNavigation: {
                amActive: navState
            }
        });
    }
    render() {
        return (
            <div className="navigation">
                <Header toggleNav={this.toggleNav} />
                <NavigationPrivate />
                <NavigationPublic amActive={this.state.publicNavigation.amActive} />
            </div>
        );
    }
}