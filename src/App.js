import './App.css';
import CounterContainer from './containers/CounterContainer';
import CounterHookContainer from './containers/CounterHookContainer';
import TodoContainer from './containers/TodoContainer';
import TodoHookContainer from './containers/TodoHookContainer';

function App() {
  return (
    <div className="App">
      <CounterContainer/>
      <CounterHookContainer/>
      <hr/>
      <TodoContainer/>
      <TodoHookContainer/>
    </div>
  );
}

export default App;
