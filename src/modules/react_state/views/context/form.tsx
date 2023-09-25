import React, { useContext, ReactNode } from 'react'
import { ItemContext } from './item_context'

type Props = {
  children?: ReactNode
  width: number
}

export function Form({ children, width }: Props) {
  return (
    <div>
      <ItemContext.Provider value={width}>{children}</ItemContext.Provider>
    </div>
  )
}

type PropsItem = {
  children: ReactNode
  width?: number
  title: string
}

export function FormItem({ children, width, title }: PropsItem) {
  const itemWidth = useContext(ItemContext)
  const realWidth = width ? width : itemWidth

  return (
    <div>
      <span style={{ display: 'inline-block', width: `${realWidth}px` }}>
        {title}
      </span>
      <span>{children}</span>
    </div>
  )
}
