import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from 'global/components/button';

const Home = ( props ) => (
    <main>
        <Link to="/repos">
            Repos
        </Link>
    </main>
);

Home.propTypes = {};

export default Home;
