
import './App.css';
import React,{useState,useEffect} from 'react';
import { AccountBox } from './components/accountBox'
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
      <AccountBox />
      </header>
    </div>
  );
}

export default App;
