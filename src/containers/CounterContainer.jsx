import Counter from "../components/counter";
import { connect } from 'react-redux';
import { decrease, increase, zero } from "../modules/counter";

const CounterContainer = ({number, increase, decrease, zero}) => {
  return <Counter number={number} onIncrease={increase} onDecrease={decrease} zero={zero}/>
};
/*const mapStateToProps = state => ({
  number : state.counter.number
});
const mapDispatchToProps = dispatch => ({
  increase : () => {dispatch(increase())},
  decrease : () => {dispatch(decrease())},
  zero : () => {dispatch(zero())}
});

 store로 가져온 리덕스 모듈(reducer함수)를 컨테이너 컴포넌트와 연결함
connect를 통해서 store로 가져온 리덕스 모듈과
mapStateToProps, mapDispatchToProps를 연결해준다.
위와같은 형태를 고정해서 사용 
export default connect(mapDispatchToProps)(mapStateToProps);*/

export default connect(state => ({number : state.counter.number}),
{increase,decrease,zero})(CounterContainer);