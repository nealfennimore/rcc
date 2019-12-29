import { put, call } from 'redux-saga/effects';
import {
    fetchReposSuccess, fetchReposError,
} from 'global/actions/github/repos';
import * as github from 'global/services/github';
import * as sagas from '../github';

describe( 'Github Sagas', () => {
    describe( 'getUserRepos', () => {
        it( 'should get repos successfully', () => {
            const gen = sagas.getUserRepos();
            expect( gen.next().value ).toEqual(
                call( sagas.getEncodedToken ),
            );
            expect( gen.next( 'token' ).value ).toEqual(
                call( github.getUserRepos, 'token' ),
            );
            expect( gen.next( {} ).value ).toEqual(
                put( fetchReposSuccess( {} ) ),
            );
            expect( gen.next().done ).toBeTruthy();
        } );
        it( 'should handle errors', () => {
            const gen = sagas.getUserRepos();
            expect( gen.next().value ).toEqual(
                call( sagas.getEncodedToken ),
            );
            expect( gen.next( 'token' ).value ).toEqual(
                call( github.getUserRepos, 'token' ),
            );
            expect( gen.throw( 'error' ).value ).toEqual(
                put( fetchReposError( 'error' ) ),
            );
            expect( gen.next().done ).toBeTruthy();
        } );
    } );
} );
