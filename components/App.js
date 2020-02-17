import React from 'react'
import { connect } from 'react-redux';
import ModalRoot from '../containers/modalRoot';
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = (props) => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
    <ModalRoot isOpen={true}/>
  </div>
)

const mapStateToProps = state => {
  return {
    isOpen: state.title
  };
};

export default connect(mapStateToProps)(App)