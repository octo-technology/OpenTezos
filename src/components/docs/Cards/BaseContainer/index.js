import isInternalUrl from '@docusaurus/isInternalUrl';
import classnames from 'classnames';
import PropTypes from 'prop-types'
import React from 'react';

import styles from './styles.module.css';

const BaseContainer = ({
  children,
  className,
  hasShadow,
  hasRoundedCorners,
  overlay,
  to,
  onClick,
  selected
}) => (
  <a
    className={classnames(styles.root, {
      [styles.disabled]: to === undefined,
      [styles.hasShadow]: hasShadow,
      [styles.hasRoundedCorners]: hasRoundedCorners,
      [styles.selected]: selected
    })}
    href={to}
    target={isInternalUrl(to) ? '_self' : '_blank'}
  >
    <div className={classnames(styles.children, className)} onClick={onClick}>{children}</div>
    {overlay &&
      <div className={styles.overlay}>
        <p>{overlay}</p>
      </div>
    }
  </a>
);

BaseContainer.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  hasShadow: PropTypes.bool,
  selected: PropTypes.bool,
  hasRoundedCorners: PropTypes.bool,
  overlay: PropTypes.string,
  to: PropTypes.string,
};

BaseContainer.defaultProps = {
  hasRoundedCorners: true,
  hasShadow: true,
};

export default BaseContainer;
