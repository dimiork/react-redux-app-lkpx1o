import React from "react";
import ReactDOM from 'react-dom';
import { connect } from "react-redux";
// import { addTodo } from '../actions'
import { ModalComponents } from '../actions/index';

const ModalRoot = ({ isOpen, component, onCloseCb }) => {
  debugger
  const NestedComponent = ModalComponents[component];
  return isOpen
    ? ReactDOM.createPortal(
        <div className="modal">
          <button onClick={onCloseCb} className="modal__close">
            &times;
          </button>
          <NestedComponent/>
        </div>,
        document.body
      )
    : null;
};
// export const Modal = ({ children, onClose, open }) =>

export default connect()(ModalRoot);
