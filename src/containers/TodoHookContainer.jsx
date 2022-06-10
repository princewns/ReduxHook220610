import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Todo from '../components/Todo'
import { changeInput, insert, toggle, remove } from '../modules/todo'

const TodosHookContainer = () => {
  const { input, todo } = useSelector((state) => (
    {
    input : state.todo.input,
    todo : state.todo.todo
    }
  ));
  const dispatch = useDispatch();
  const onChangeInput = useCallback((input) => dispatch(changeInput(input)),[dispatch]);
  const onInsert = useCallback((text) => dispatch(insert(text)),[dispatch]);
  const onToggle = useCallback((id) => dispatch(toggle(id)),[dispatch]);
  const onRemove = useCallback((id) => dispatch(remove(id)),[dispatch]);
  return <Todo input={input} todo={todo} onChangeInput={onChangeInput}
  onInsert={onInsert} onToggle={onToggle} onRemove={onRemove}/>
};
export default TodosHookContainer;