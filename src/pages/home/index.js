/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUsername, getToken } from 'global/selectors/user';
import { setUsername, setToken } from 'global/actions/user';
import Layout from 'global/components/Layout';
import Main from 'global/components/Main';
import styles from './styles.pcss';

const Home = ( {
    username,
    token,
    setUsername,
    setToken,
} ) => (
    <Layout login>
        <Main center>
            <div className={styles.Home}>
                <section>
                    <label>
                        Github Username:
                        <br />
                        <input type="text" value={username} onChange={setUsername} />
                    </label>
                    <br />
                    <label>
                        Personal Access Token:
                        <br />
                        <input type="text" value={token} onChange={setToken} />
                    </label>
                </section>

                {
                    username && token && (
                        <Link disabled to="/repos">
                            Login
                        </Link>
                    )
                }

            </div>
        </Main>
    </Layout>
);

Home.propTypes = {};


const connector = connect(
    ( state ) => ( {
        username: getUsername( state ),
        token: getToken( state ),
    } ),
    ( dispatch ) => ( {
        setUsername: ( e ) => dispatch( setUsername( e.target.value ) ),
        setToken: ( e ) => dispatch( setToken( e.target.value ) ),
    } ),
);

export default connector( Home );
