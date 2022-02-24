import './App.css';
import List from './Components/ListItem';
import { useState } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [list, setList] = useState([]);
  const [color, setColor] = useState(['red', 'green', 'blue']);

  const onchange = (e) => {
    setInput(e.target.value);
  }
  const addItem = () => {
    if (input !== '') {
      const toArray = [...list];
      toArray.push(input);
      setList(toArray);
      setInput('');
    }
  }
  let x = -1;
  const listRender = () => {
    return <List>
      <ul>{list.map((item, index) => {
        if (x > 1) {
          x = -1;
        }
        x++;
        console.log(x);
        return <li key={`list-1${index}`} className={color[x]}>{item}</li>
      }
      )}</ul>
    </List>
  }
  return (
    <div>
      <input type="text" value={input} onChange={onchange} />
      <button onClick={addItem}>Add</button>
      {listRender()}
    </div>
  );
}

export default App;
