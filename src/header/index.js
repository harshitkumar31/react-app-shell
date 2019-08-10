import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {
    render() {
        return <div>Header</div>;
    }
}

export const propTypes = PropTypes.shape({
    title: PropTypes.string
})



export default Header;