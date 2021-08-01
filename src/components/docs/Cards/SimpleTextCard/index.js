import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import WithBackgroundImage from '../../WithBackgroundImage'
import BaseContainer from '../BaseContainer'
import styles from './styles.module.css'

const SimpleTextCard = ({ bolded, icon, iconDark, overlay, smallerImage, title, to, onClick }) => (
  <BaseContainer selected={bolded} className={styles.root} overlay={overlay} to={to} onClick={onClick}>
    <WithBackgroundImage
      className={classnames(styles.image, {
        [styles.smaller]: smallerImage,
      })}
      imageLight={icon}
      imageDark={iconDark}
    />
    <span
      className={classnames(styles.title, {
        [styles.bolded]: bolded,
      })}
    >
      {title}
    </span>
  </BaseContainer>
)

SimpleTextCard.propTypes = {
  onClick: PropTypes.func,
  bolded: PropTypes.bool,
  icon: PropTypes.string.isRequired,
  iconDark: PropTypes.string,
  overlay: PropTypes.string,
  smallerImage: PropTypes.bool,
  title: PropTypes.string.isRequired,
  to: PropTypes.string,
}

export default SimpleTextCard
