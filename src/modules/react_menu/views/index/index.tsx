import React, { FC } from 'react'
import { NavBar, List } from 'antd-mobile'
const View: FC = () => {
  return (
    <>
      <NavBar backArrow={false}>react自学笔记</NavBar>
      <List>
        <List.Item
          clickable
          onClick={() => {
            App.router.push('/react_component/index/index')
          }}
        >
          函数组件
        </List.Item>
        <List.Item
          clickable
          onClick={() => {
            App.router.push('/react_jsx/index/index')
          }}
        >
          jsx语法
        </List.Item>
        <List.Item
          clickable
          onClick={() => {
            App.router.push('/react_props/index/index')
          }}
        >
          props属性
        </List.Item>
        <List.Item
          clickable
          onClick={() => {
            App.router.push('/react_event/index/index')
          }}
        >
          event事件
        </List.Item>
        <List.Item
          clickable
          onClick={() => {
            App.router.push('/react_state/index/index')
          }}
        >
          state
        </List.Item>
        <List.Item
          clickable
          onClick={() => {
            App.router.push('/react_state/manage/index')
          }}
        >
          状态提升
        </List.Item>
        <List.Item
          clickable
          onClick={() => {
            App.router.push('/react_state/reducer/index')
          }}
        >
          reducer
        </List.Item>
        <List.Item
          clickable
          onClick={() => {
            App.router.push('/react_state/context/index')
          }}
        >
          context
        </List.Item>
        <List.Item
          clickable
          onClick={() => {
            App.router.push('/react_state/context_reducer/index')
          }}
        >
          结合context和reducer
        </List.Item>
        <List.Item
          clickable
          onClick={() => {
            App.router.push('/react_ref/index/index')
          }}
        >
          ref
        </List.Item>
        <List.Item
          clickable
          onClick={() => {
            App.router.push('/react_use_effect/index/index')
          }}
        >
          useEffect
        </List.Item>
        <List.Item
          clickable
          onClick={() => {
            App.router.push('/react_hook/index/index')
          }}
        >
          自定义hook
        </List.Item>
      </List>
    </>
  )
}

export default View
