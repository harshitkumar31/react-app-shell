import React from 'react';
import PropTypes from 'prop-types';
import Header, { propTypes as headerPropTypes} from '../header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class Shell extends React.Component {
    render(){
        const { config } = this.props;
        return (<Router>
            <Switch>
            {config.map(({ header, route}, index) => (<Route key={index} {...route} render={(routeProps)=> (<Header {...routeProps} {...header} />)} />))}
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
        }) 
    }))
}

export default Shell;