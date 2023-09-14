import React, { ReactNode } from 'react'

interface IProps {
  src: string
  width: number
  children?: ReactNode
}

const Profile = ({ src, width, children = '默认描述' }: IProps) => {
  return (
    <div>
      <img src={src} width={width} alt="Katherine Johnson" />
      <p>{children}</p>
    </div>
  )
}

export default Profile
