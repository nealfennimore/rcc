import React from 'react';
import renderer from 'react-test-renderer';
import * as user from '../user';

describe( 'User Selectors', () => {
    const state = {
        user: {
            token: 'token',
            username: 'username',
        },
    };

    Object.entries( user ).forEach( ( [selectorName, selector] ) => {
        it( selectorName, () => {
            expect( selector( state ) ).toMatchSnapshot();
        } );
    } );
} );
