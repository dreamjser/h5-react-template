import React, { useState } from 'react'
import { Button } from 'antd-mobile'
import { useImmer } from 'use-immer'

const View = () => {
  type UserType = {
    name: string
    age: number
    sex: string
  }
  const [user, setUser] = useImmer<UserType>({
    name: '张三',
    age: 19,
    sex: '男',
  })

  const [list, setList] = useImmer<Array<UserType>>([])
  const [number, setNumber] = useState(0)

  return (
    <>
      <div>姓名：{user.name}</div>
      <div>年龄：{user.age}</div>
      <div>性别：{user.sex}</div>
      <div>number: {number}</div>
      <div>
        {list.map((item: UserType) => (
          <p key={item.name}>
            {item.name}: {item.sex} {item.sex}
          </p>
        ))}
      </div>
      <div>
        <Button
          color="primary"
          onClick={() => {
            setUser((user: UserType) => {
              user.name = '孙元刚'
            })

            setList((draft: Array<UserType>) => {
              draft.push({
                name: '李四',
                age: 26,
                sex: '女',
              })
            })
            setNumber(number + 1)
            setNumber((n) => n + 1)
            setNumber(number + 1)
            setNumber((n) => n + 1)
            // 更新队列中n的值，此时n为1，dom渲染结果为3
            setNumber(number + 1)
            setNumber((n) => n + 1)
            setNumber((n) => n + 1)
            setTimeout(() => {
              console.log(user, '1s后')
            }, 1000)
          }}
        >
          更新信息
        </Button>
      </div>
    </>
  )
}

export default View
