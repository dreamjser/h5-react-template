import React from 'react'
import Profile from '../../components/profile'

const View = () => {
  const src = 'https://i.imgur.com/MK3eW3Am.jpg'
  return (
    <>
      <h1>props属性</h1>
      <Profile src={src} width={50}>
        这是描述
      </Profile>
      <Profile src={src} width={100}>
        <span style={{ color: 'red' }}>描述</span>
      </Profile>
      <Profile src={src} width={300} />
    </>
  )
}

export default View
