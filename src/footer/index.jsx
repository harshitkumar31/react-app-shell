import React from 'react';
import PropTypes from 'prop-types';

class Footer extends React.Component {
  render() {
  return <div>Footer</div>;
  }
}

export const propTypes = PropTypes.shape({
  visible: PropTypes.bool,
});

export default Footer;
