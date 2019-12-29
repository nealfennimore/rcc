import { setUsername, setToken } from 'global/actions/user';
import user from '../user';

describe( 'User Reducer', () => {
    it( 'should have default state', () => {
        expect( user( undefined, {} ) ).toMatchSnapshot();
    } );
    it( 'should set username', () => {
        expect( user( undefined, setUsername( 'username' ) ) ).toMatchSnapshot();
    } );
    it( 'should set token', () => {
        expect( user( undefined, setToken( 'token' ) ) ).toMatchSnapshot();
    } );
} );
