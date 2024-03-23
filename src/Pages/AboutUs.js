import React,{useState} from 'react'
import { Link } from 'react-router-dom'

const AboutUs = () => {
  // const [count,setCount] = React.useState(0);
  const [count,setCount] = useState(0);
  const [text, setText] = useState('');
  const [array, setArray] = useState([]);

  const increment = () => {
    setCount(count+1)
  }

  const appendText = () => {
    setText(text + 'A');
  };

  const addItem = () => {
    setArray([...array, array.length + 1]);
  };


  return (
    <div>
      AboutUs
      <br />
      <Link to="/">Home</Link>
      <button onClick={increment}>click me</button>
      <h1>{count}</h1>

      <p>{text}</p>
      <button onClick={appendText}>Append 'A'</button>

      <ul>
        {array.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <button onClick={addItem}>Add Item</button>
    </div>
  )
}

export default AboutUs
