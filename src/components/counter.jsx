//리덕스를 사용하기 위해서 보여지는 컴포넌트에서는 props값을 받아온다

/* state를 사용하는 방법
1. useState, useReduce 를 이용하여 한 컴포넌트에서 사용
2. Context API를 이용하여 전역적으로 사용 : useContext()이용하여 값 가져옴
3. 리덕스를 이용하여 상태관리 하여 사용 : props를 통해 값 가져옴 */

const Counter = ({number, onIncrease, onDecrease, zero}) => {
  return(
    <div>
      <h2>{number}</h2>
      <div>
        <button onClick={onDecrease}> - </button>
        <button onClick={zero}> 0 </button>
        <button onClick={onIncrease}> + </button>
      </div>
    </div>
  );
};
export default Counter;