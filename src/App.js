import { useState } from 'react';
import './App.css';

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => {
  return {
    value: num,
    id: `id${num}`
  }
})

console.log(data)

function App() {

  const [numbers, setNumbers] = useState(data);


  const renderItem = (pair, index) =>
    // In the <h2> below, swap the key for index to see how it is going to behave
    <h2 key={pair.id} onClick={() => deleteItem(pair.id)}> {pair.value} </h2>


  const deleteItem = (id) => {
    const filtered = numbers.filter(pair => pair.id !== id);
    setNumbers(filtered);
  }

  return (
    <div className="App">
      {numbers.map(renderItem)}
    </div>
  );
}

export default App;
