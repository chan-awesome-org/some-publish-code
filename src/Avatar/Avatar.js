import PropTypes from 'prop-types'
import styles from './avatar.module.less'

export const avatarColors = Object.freeze({
  default: 'default',
  primary: 'primary',
  secondary: 'secondary',
})

const Avatar = ({ firstName, lastName}) => {
  return (
    <div
      className={styles.primary}
    >
      {firstName && lastName ? `${firstName[0]}${lastName[0]}` : null}
    </div>
  )
}

Avatar.defaultProps = {
  className: null,
  color: avatarColors.primary,
  firstName: '',
  lastName: '',
}

Avatar.propTypes = {
  className: PropTypes.string,
  /** [primary, secondary, default] */
  color: PropTypes.oneOf(Object.values(avatarColors)),
  firstName: PropTypes.string,
  lastName: PropTypes.string,
}

export default Avatar
