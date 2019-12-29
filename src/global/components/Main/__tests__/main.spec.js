import React from 'react';
import renderer from 'react-test-renderer';
import Main from '../index.js';

describe( 'Main', () => {
    it( 'should match snapshot', () => {
        const component = renderer.create(
            <Main />,
        );
        expect( component.toJSON() ).toMatchSnapshot();
    } );
    it( 'should match snapshot when centered', () => {
        const component = renderer.create(
            <Main center />,
        );
        expect( component.toJSON() ).toMatchSnapshot();
    } );
} );
