import React, { useState } from 'react'
import { Button, Form, Input } from 'antd-mobile'

const View = () => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const onsubmit = () => {
    if (!name) {
      App.interface.alert('请输入用户名')
      return
    }

    if (!password) {
      App.interface.alert('请输入密码')
      return
    }

    console.log(name, password)

    App.interface.toast('提交成功')
  }
  return (
    <Form>
      <Form.Item label="用户名">
        <Input
          onChange={(value) => {
            setName(value)
          }}
          placeholder="请输入用户名"
        />
      </Form.Item>
      <Form.Item label="密码">
        <Input
          onChange={(value) => {
            setPassword(value)
          }}
          placeholder="请输入密码"
        />
      </Form.Item>
      <Form.Item>
        <Button onClick={onsubmit}>提交</Button>
      </Form.Item>
    </Form>
  )
}

export default View
