import React from 'react';
import PropTypes from 'prop-types';
import Header, { propTypes as headerPropTypes } from '../header';
import Footer, { propTypes as footerPropTypes } from '../footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class Shell extends React.Component {
    render(){
        const { config, children } = this.props;
        return (<Router>
            <Switch>
            {config.map(({ header, route}, index) => (<Route key={index} {...route} render={(routeProps)=> (<Header {...routeProps} {...header} />)} />))}
            </Switch>
            {children}
            <Switch>
            {config.map(({ footer, route}, index) => (<Route key={index} {...route} render={(routeProps)=> (<Footer {...routeProps} {...footer} />)} />))}
            </Switch>
        </Router>);
    }
}

Shell.propTypes = {
    config: PropTypes.arrayOf(PropTypes.shape({
        header: headerPropTypes,
        route: PropTypes.shape({
            path: PropTypes.string.isRequired,
            exact: PropTypes.bool
        }),
        footer: footerPropTypes
    }))
}

export default Shell;