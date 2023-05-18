import style from './Notification.module.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Notification extends Component {
  static defaultProps = {
    message: ' ',
  };

  render() {
    return (
      <h2 className={style.notification}>
        {this.props.message}
      </h2>
    );
  }
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;