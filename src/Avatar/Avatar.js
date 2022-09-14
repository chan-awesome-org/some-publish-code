import { Avatar as MaterialUIAvatar } from '@mui/material'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import styles from './avatar.module.less'

export const avatarColors = Object.freeze({
  default: 'default',
  primary: 'primary',
  secondary: 'secondary',
})

const Avatar = ({ firstName, lastName, color, className }) => {
  return (
    <MaterialUIAvatar
      className={classNames(
        {
          [styles.primary]: color === avatarColors.primary,
          [styles.secondary]: color === avatarColors.secondary,
        },
        className
      )}
    >
      {firstName && lastName ? `${firstName[0]}${lastName[0]}` : null}
    </MaterialUIAvatar>
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
