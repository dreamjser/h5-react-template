import React, { FC } from 'react'

const View: FC = () => {
  const str = '这是变量'
  const strNode = (
    <b>
      <i>{str}</i>
    </b>
  )
  return (
    <>
      <h1>jsx语法</h1>
      <p>1.只能返回一个根元素</p>
      <p>2. 标签必须闭合</p>
      <p>3. 使用驼峰式命名法给大部分属性命名</p>
      <p>4.在 JSX 中通过大括号使用 JavaScript</p>
      <br />
      <p className="class-name">{strNode}</p>
    </>
  )
}

export default View
