import React from 'react'
import { useOnlineStatus } from './use_online_status'

const View = () => {
  const isOnline = useOnlineStatus()
  return (
    <>
      <div>
        您的网络已
        {isOnline ? (
          <span style={{ color: 'green' }}>连接</span>
        ) : (
          <span style={{ color: 'red' }}>断开</span>
        )}
      </div>
    </>
  )
}

export default View
