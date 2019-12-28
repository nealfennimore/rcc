import React from 'react';
import renderer from 'react-test-renderer';
import Button from '..';

describe( 'Button', () => {
    it( 'should match snapshot', () => {
        const component = renderer.create(
            <Button />,
        );
        expect( component.toJSON() ).toMatchSnapshot();
    } );
    it( 'should trigger on click', () => {
        const onClick = jest.fn();
        const wrapper = mount(
            <Button onClick={onClick} />,
        );
        wrapper.simulate( 'click' );
        expect( onClick ).toHaveBeenCalled();
    } );
} );
