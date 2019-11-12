import React, {memo} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import buttonBackgroundColors from '../../theme/buttonBackgroundColors.module.css';
import styles from './Button.module.css';
import buttonSize from './ButtonSize.module.css';

const propTypes = {
  onClick: PropTypes.func,
  size: PropTypes.oneOf([
    'tiny', 'small', 'medium', 'large', 'huge'
  ]),
  color: PropTypes.oneOf([
    'blue', 'red', 'green', 'yellow', 'grey'
  ])
};

const defaultProps = {
  size: 'medium',
};

const Button = props => {
  const { onClick, children, size, color } = props;
  return (
    <Button
      onClick={onClick}
      classname={classNames(
        styles.container,
        buttonSize[size],
        buttonBackgroundColors[color]
      )}
    >
      {children}
    </Button>
  );
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default memo(Button);