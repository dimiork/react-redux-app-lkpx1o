import * as App from '../components/App';

let nextTodoId = 0
export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export const ModalComponents = {
  App,
};

export const openRootModal = (component, onCloseCb) => dispatch => dispatch({
  type: 'OPEN_ROOT_MODAL',
  component,
  onCloseCb,
})

export const closeRootModal = () => dispatch => dispatch({
  type: 'CLOSE_ROOT_MODAL',
});