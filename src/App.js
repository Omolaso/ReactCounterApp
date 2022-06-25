import './App.css';
import {useState} from 'react';

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <p id='counter-value'>Count: {count}</p>
      <button id='increase-button' onClick={() => setCount(count + 1)}> Increase </button>
      <button id='reset-button' onClick={() => setCount(0)}>Reset</button>
      <button id='decrease-button' onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}

export default App;
