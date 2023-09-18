import React, { useState } from 'react'
import { Button } from 'antd-mobile'
const View = () => {
  type UserType = {
    name: string
    age: number
  }
  const [user, setUser] = useState<UserType>({
    name: '张三',
    age: 19,
  })

  return (
    <>
      <div>姓名：{user.name}</div>
      <div>年龄：{user.age}</div>
      <div>
        <Button
          color="primary"
          onClick={() => {
            setUser({
              name: '李四',
              age: 22,
            })
          }}
        >
          更新信息
        </Button>
      </div>
    </>
  )
}

export default View
