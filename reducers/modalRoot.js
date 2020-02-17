import { OPEN_ROOT_MODAL, CLOSE_ROOT_MODAL, } from '../actions';

const initialState = { isOpen: false, component: null, navigateTo: null};

const ModalRoot = (state = initialState, action) => {
  switch (action.type) {
    case 'OPEN_ROOT_MODAL':
      return {
        ...state,
        isOpen: true,
        component: action.component,
        navigateTo: action.navigateTo,
      }
    case 'CLOSE_ROOT_MODAL':
      return initialState;
    default:
      return state
  }
}

export default ModalRoot