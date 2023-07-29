import './index.less'
import { useSelector, useDispatch } from 'react-redux'
import React, { FC, useEffect } from 'react'
import { Button } from 'antd-mobile'
import { getUserInfo } from '@/common/store/user_info_reducer'

const View: FC = () => {
  const userInfo = useSelector((state: any) => state.userInfo.info)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUserInfo())
  }, [])
  return (
    <div className="page-container">
      {userInfo.name}
      <Button color="primary">张三</Button>
    </div>
  )
}

export default View
