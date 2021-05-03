import React, {useState, useEffect} from 'react'
import logo from './logo.svg';
import './App.css';
import Axios from 'axios'

function App() {
  const [message, setMessage] = useState('')
  const fetchData = async () => {
    const results = await Axios.get('/.netlify/functions/helloWorld')
    console.log(results);
    setMessage(results.data.message)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {message}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
