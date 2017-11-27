import React from 'react';

export class NavigationPrivate extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }
    render() {
        return (
            <ul className="navigation-private">
            </ul>
        );
    }
}
