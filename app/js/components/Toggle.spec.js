import React from 'react';
import { Toggle } from './Toggle';
import renderer from 'react-test-renderer';

test('Toggle ON OFF', () => {
    const component = renderer.create(
        <Toggle/>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // manually trigger the callback
    tree.props.onClick();
    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // manually trigger the callback
    tree.props.onClick();
    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});