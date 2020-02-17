import React from 'react'
import { connect } from 'react-redux'
// import { addTodo } from '../actions'

const ModalRoot = ({ children, onClose, open }) => 
// export const Modal = ({ children, onClose, open }) =>
  open ?
    createPortal(
      <div className='modal'>
        <button onClick={onClose} className='modal__close'>&times;</button>
        {children}
      </div>,
    document.body)
    : null

export default connect()(ModalRoot);