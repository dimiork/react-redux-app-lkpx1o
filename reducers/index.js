import { combineReducers } from 'redux'
import todos from './todos'
import modalRoot from './modalRoot';
import visibilityFilter from './visibilityFilter'

export default combineReducers({
  todos,
  visibilityFilter,
  modalRoot,
})