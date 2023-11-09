import React, {forwardRef} from 'react'
import { render, act, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Modal from '../index'

const UModal = forwardRef(Modal)
const children = '这是modal内容'


describe('测试Modal组件', () => {
  test('初始隐藏状态测试', () => {
    const {queryByText} = render(<UModal>{children}</UModal>)
    const element = queryByText(children)
    expect(element).not.toBeInTheDocument()
  })

  test('调用toogle显示状态测试', () => {
    const modalRef: any = React.createRef();
    const {queryByText} = render(<UModal ref={modalRef}>{children}</UModal>)
    const toogle = jest.spyOn(modalRef.current, 'toogle');
    act(() => {
      modalRef.current.toogle()
    })

    expect(toogle).toHaveBeenCalled();
    const element = queryByText(children)
    expect(element).toBeInTheDocument()

    fireEvent.click(element as HTMLElement)
    expect(element).not.toBeInTheDocument()
  })

})

