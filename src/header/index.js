import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './index.scss';

class Header extends React.Component {
    render() {
        const { title, navList } = this.props;
        return (<div className="header">
        <a href="#default" className="logo">{title}</a>
        <div className="header-right">
            {
                navList.map(({ title, link, key}) => (<Link to={link} key={key}  >{title}</Link>))
            }
        </div>
      </div>);
    }
}

export const propTypes = PropTypes.shape({
    title: PropTypes.string,
    navList: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        key: PropTypes.string.isRequired
    }))
})



export default Header;