//Todos안에 사용될 TodoItem
const TodoItem = ({todo, onToggle, onRemove}) => {
  //안에서 실행될 내용 todo (할일 목록)
  //todo(할일목록), onToggle(체크박스), onRemove(삭제)
  return(
    <div>
      <input type="checkbox" onClick={() => {onToggle(todo.id);}} 
      checked={todo.done} readOnly={true}/>
      <span style={{textDecoration : todo.done ? 'line-through' : 'none'}}>
        {todo.text}</span>
      <button onClick={() => { onRemove(todo.id);}}>삭제</button>
    </div>
  );
};

//내보낼 Todo
const Todo = ({
  input, //input에 입력되는 텍스트
  todo, // 할일목록이 들어가있는 객체
  onChangeInput, //input 안에 값을 가져오는 메소드
  onInsert, //가져온 값을 todo 목록에 추가
  onToggle,
  onRemove // Todoitem 테그에 전달해줄 내용
}) => {
  const onChange = (e) => {
    onChangeInput(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    onInsert(input);
    onChangeInput('');
  };
  return(
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" value={input} onChange={onChange}/>
        <button type="submit">등록</button>
      </form>
      {
        todo.map((todo) => (
          <TodoItem todo={todo} key={todo.id} onToggle={onToggle} onRemove={onRemove} />
        ))
      }
    </div>
  );
};
export default Todo;