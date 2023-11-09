import React, { ReactNode, useImperativeHandle, useState } from 'react'

type ModelProps = {
  children: ReactNode
}

export default function Modal(props: ModelProps, ref: any) {
  const [visible, setVisible] = useState(false)

  useImperativeHandle(ref, () => {
    return {
      toogle() {
        setVisible(!visible)
      },
    }
  })
  return (
    <>
      {visible && (
        <div
          onClick={() => {
            setVisible(false)
          }}
          style={{ width: '200px', height: '100px', backgroundColor: 'red' }}
        >
          {props.children}
        </div>
      )}
    </>
  )
}
