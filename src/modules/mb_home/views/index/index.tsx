import './index.less'
import React, { FC, useState, useEffect } from 'react'

const View: FC = () => {
  const [count, setCount] = useState(10)

  function addCount() {
    return setCount(count + 4)
  }

  useEffect(() => {
    App.request({
      url: 'login',
    }).then((r: any) => {
      console.log(r, '===')
    })
    setCount(22)
  }, [])
  return (
    <div className="page-container" onClick={addCount}>
      demo222额
    </div>
  )
}

export default View
