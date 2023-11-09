import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getUserInfo } from '@/common/store/user_info_reducer'
import { Button } from 'antd-mobile'

export default function Login() {
  const info = useSelector((state: any) => state.userInfo.info)
  const dispatch = useDispatch()

  const onUpdate = () => {
    dispatch(getUserInfo({ name: '张三' }))
  }
  return (
    <>
      {info.name}
      <Button onClick={onUpdate}>更新</Button>
    </>
  )
}
