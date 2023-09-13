import React, { FC } from 'react'

const View: FC = () => {
  const str = '这是 变量'
  return (
    <>
      <h1>jsx语法</h1>
      <dl>
        <dt>1.只能返回一个根元素 </dt>
        <dd>
          如果想要在一个组件中包含多个元素，需要用一个父标签把它们包裹起来。
          如果你不想在标签中增加一个额外的 div，可以用 <> 和 </> 元素来代替：
        </dd>
        <dt>2. 标签必须闭合</dt>
        <dt>3. 使用驼峰式命名法给大部分属性命名！</dt>
        <dt>4.在 JSX 中通过大括号使用 JavaScript</dt>
        <dd>
          JSX 允许你在 JavaScript 中编写类似 HTML
          的标签，从而使渲染的逻辑和内容可以写在一起。有时候，你可能想要在标签中添加一些
          JavaScript 逻辑或者引用动态的属性。这种情况下，你可以在 JSX
          的大括号内来编写 JavaScript。
        </dd>
        <dd>
          使用引号传递字符串 当你想把一个字符串属性传递给 JSX
          时，把它放到单引号或双引号中 但是如果你想要动态地指定 src 或 alt
          的值呢？你可以 用 {'{}'} 替代 &quot; 和 &ldquo; 以使用 JavaScript 变量
        </dd>
        <dt>示例</dt>
        <dd>{str}</dd>
      </dl>
    </>
  )
}

export default View
