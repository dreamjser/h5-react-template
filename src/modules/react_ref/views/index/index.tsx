import React, {
  useState,
  forwardRef,
  useImperativeHandle,
  useRef,
  ReactNode,
} from 'react'

type modalRef = {
  toogle: () => void
}

type ModelProps = {
  children: ReactNode
}

function Modal(props: ModelProps, ref: any) {
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
          style={{ width: '200px', height: '100px', backgroundColor: 'red' }}
        >
          {props.children}
        </div>
      )}
    </>
  )
}

const View = () => {
  const UModal = forwardRef(Modal)
  const modal = useRef<modalRef>(null)

  const toggle = () => {
    modal.current?.toogle()
  }
  return (
    <>
      <UModal ref={modal}>这是一个弹框</UModal>
      <div>
        <button onClick={toggle}>显示/隐藏</button>
      </div>
    </>
  )
}

export default View
