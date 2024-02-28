import logo from './logo.svg';
import './App.css';
import React,{useState,useEffect} from 'react';
function App() {
  const [data,setData] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:8080/participants')
    .then(response=> response.json())
    .then(result =>setData(result))
    .catch(error=>console.error('Error Fetching',error));
  },[]);
  console.log(data)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
