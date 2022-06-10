import { connect } from "react-redux";
import Todo from '../components/Todo';
import { changeInput, insert, toggle, remove } from '../modules/todo'

const TodoContainer = ({input, todo, changeInput, insert, toggle, remove}) => {
  return <Todo input={input} todo={todo} onChangeInput={changeInput}
  onInsert={insert} onToggle={toggle} onRemove={remove}></Todo>
};
export default connect(
  //state todo를 가져와서 값 할당
  ({todo}) => ({
  input : todo.input,
  todo : todo.todo
}),
//dispatch해서 사용될 액션함수 (모듈)을 넣어줌
{
  changeInput,insert,toggle,remove
}
)(TodoContainer);