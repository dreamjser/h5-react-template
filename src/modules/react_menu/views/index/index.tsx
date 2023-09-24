import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { NavBar, List } from 'antd-mobile'

const View: FC = () => {
  const navigate = useNavigate()

  return (
    <>
      <NavBar backArrow={false}>react自学笔记</NavBar>
      <List>
        <List.Item
          clickable
          onClick={() => {
            navigate('/react_component/index/index')
          }}
        >
          函数组件
        </List.Item>
        <List.Item
          clickable
          onClick={() => {
            navigate('/react_jsx/index/index')
          }}
        >
          jsx语法
        </List.Item>
        <List.Item
          clickable
          onClick={() => {
            navigate('/react_props/index/index')
          }}
        >
          props属性
        </List.Item>
        <List.Item
          clickable
          onClick={() => {
            navigate('/react_event/index/index')
          }}
        >
          event事件
        </List.Item>
        <List.Item
          clickable
          onClick={() => {
            navigate('/react_state/index/index')
          }}
        >
          state
        </List.Item>
        <List.Item
          clickable
          onClick={() => {
            navigate('/react_state/manage/index')
          }}
        >
          状态管理
        </List.Item>
        <List.Item
          clickable
          onClick={() => {
            navigate('/react_state/reducer/index')
          }}
        >
          reducer
        </List.Item>
      </List>
    </>
  )
}

export default View
