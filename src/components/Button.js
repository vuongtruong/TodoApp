import React from 'react';
import {TouchableOpacity, Alert} from 'react-native';
import PropTypes from 'prop-types';

const Button = ({children, pressHandler, status, style}) => {
  return (
    <TouchableOpacity
      style={style}
      onPress={() => pressHandler(status)}
      activeOpacity={0.6}>
      {children}
    </TouchableOpacity>
  );
};

Button.propTypes = {
  pressHandler: PropTypes.func,
  status: PropTypes.string,
  style: PropTypes.any,
  children: PropTypes.node,
};

Button.defaultProps = {
  pressHandler: () => Alert.alert('button clicked'),
  status: 'All',
  style: {},
  children: null,
};
export default Button;
