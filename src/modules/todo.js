//액션타입
const CHANGE_INPUT = 'todo/CHANGE_INPUT'; //인풋값 수정
const INSERT = 'todo/INSERT'; // 새로운 todo 추가
const TOGGLE = 'todo/TOGGLE'; // 체크박스
const REMOVE = 'todo/REMOVE'; // 삭제

//액션함수
export const changeInput = (input) => ({
  type : CHANGE_INPUT,
  input
});
let id = 3;
export const insert = (text) => ({
  type : INSERT,
  todo : {
    id : id++,
    text,
    done:false
  }
});
export const toggle = (id) => ({
  type : TOGGLE,
  id
});
export const remove = (id) => ({
  type : REMOVE,
  id
});

//초기 state 작성 후 reducer 함수로 수정
const initialState = {
  input : '',
  todo : [
    {
      id : 1,
      text : '첫번째 할일입니다.',
      done : false
    },
    {
      id : 2,
      text : '두번째 할일입니다.',
      done : false
    }
  ]
};

function todo(state = initialState, action) {
  switch(action.type) {
    case CHANGE_INPUT :
      return{
        ...state, // initialState값 전부를 받아와 필요한 부분만 뽑아 수정
        input : action.input
      };
    case INSERT :
      return{
        ...state,
        todo : state.todo.concat(action.todo)
      };
    case TOGGLE :
      return{
        ...state,
        todo : state.todo.map((todo) => 
        todo.id === action.id ? {...todo, done : !todo.done} : todo)
      };
    case REMOVE :
      return{
        ...state,
        todo : state.todo.filter(
          (todo) => todo.id !== action.id
        )
      };
      default:
        return state;
  };
};
export default todo;