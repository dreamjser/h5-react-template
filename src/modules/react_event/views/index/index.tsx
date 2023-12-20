import React, { ReactNode } from 'react'
import { Button } from 'antd-mobile'

type IButton = {
  children: ReactNode
  onButtonClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const UiButton = ({ onButtonClick, children }: IButton) => {
  return <Button onClick={onButtonClick}>{children}</Button>
}

const View = () => {
  return (
    <div
      onClick={() => {
        alert('点击div')
      }}
    >
      <UiButton
        onButtonClick={() => {
          alert('点击按钮')
        }}
      >
        按钮
      </UiButton>
      <UiButton
        onButtonClick={(e) => {
          // 阻止默认行为
          // e.preventDefault()
          // 阻止冒泡
          e.stopPropagation()

          alert('点击按钮')
        }}
      >
        阻止默认行为11
      </UiButton>
    </div>
  )
}

export default View
