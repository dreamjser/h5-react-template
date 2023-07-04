import './index.less'
import React, { FC, useState, useEffect } from 'react'
import { Button } from 'antd-mobile'

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
      <Button color="primary">张三</Button>
    </div>
  )
}

export default View
