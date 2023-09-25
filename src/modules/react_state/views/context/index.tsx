import React, { useContext } from 'react'
import { Form, FormItem } from './form'
import { ItemContext } from './item_context'

const View = () => {
  const itemWidth = useContext(ItemContext)

  return (
    <Form width={100}>
      <FormItem title="用户名" width={200}>
        dreamjser
      </FormItem>
      <FormItem title="姓名">孙元刚</FormItem>
      <FormItem title="context值">{itemWidth}</FormItem>
    </Form>
  )
}

export default View
