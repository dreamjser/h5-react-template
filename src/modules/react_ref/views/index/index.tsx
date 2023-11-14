import React, { forwardRef, useRef } from 'react'
import Modal from '@/common/components/modal'

type modalRef = {
  toogle: () => void
}

const View = () => {
  const UModal = forwardRef(Modal)
  const modal = useRef<modalRef>(null)

  const toggle = () => {
    // modal.current?.toogle()
    Modal.show('999')
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
