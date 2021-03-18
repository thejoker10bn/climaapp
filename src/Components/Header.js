import React from 'react';
import PropTypes from 'prop-types';


const Header = ({titulo}) => {
    return (
        <nav>
            <div className="nav-wrapper  sky-blue  darken 2">
                <a href ="#!" className ="brand-logo">titulo</a>
            </div>
        </nav>
    );
}
 
    // eslint-disable-next-line react/no-typos
    Header.PropTypes = {
    titulo: PropTypes.string.isRequired
}

export default Header;