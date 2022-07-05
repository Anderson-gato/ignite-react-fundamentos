import { ImgHTMLAttributes } from 'react'
import styles from './Avatar.module.css'

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  withBorder?: boolean
}

export function Avatar({ withBorder = true, ...props }: AvatarProps) {
  console.log(props)
  return (
    <img
      className={withBorder ? styles.avatarWithBorder : styles.avatar}
      {...props}
    />
  )
}
