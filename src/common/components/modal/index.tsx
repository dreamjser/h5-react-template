import React, {
  ReactNode,
  useImperativeHandle,
  useState,
  forwardRef,
  createRef,
} from 'react'
import { createRoot } from 'react-dom/client'

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

Modal.show = function (children: ReactNode) {
  const element = document.createElement('div')
  document.body.appendChild(element)

  const root = createRoot(element)
  const UModal = forwardRef(Modal)
  const ref: any = createRef()
  root.render(<UModal ref={ref}>{children}</UModal>)

  setTimeout(() => {
    ref.current?.toogle()
  }, 0)
}
