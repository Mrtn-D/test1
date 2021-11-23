import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('#fff');

  useEffect(() => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    setColor(randomColor);
  }, [count]);

  console.log(color);
  return (
    <div className="App" style={{ backgroundColor: `#${color}`, height: '100vh' }}>
      <input onChange={(e) => (setCount(e.target.value))} />
      <h2>{count}</h2>
    </div>
  );
}

export default App;
