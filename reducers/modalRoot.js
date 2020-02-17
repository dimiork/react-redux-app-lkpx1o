import { OPEN_ROOT_MODAL, CLOSE_ROOT_MODAL, } from '../actions';

const modalRoot = (state = { isOpen: false, component: null, }, action) => {
  switch (action.type) {
    case OPEN_ROOT_MODAL:
      return {
        ...state,
        isOpen: true,
        component: action.component,
      }
    case CLOSE_ROOT_MODAL:
      return {
        ...state,
        isOpen: false,
        component: null,
      }
    default:
      return state
  }
}

export default modalRoot