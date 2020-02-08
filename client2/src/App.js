import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');


  const  handleClick =(e)=>{
    e.preventDefault();
    if(e.target.id ==="name"){
      setName(e.target.value)
    }else {
      setEmail(e.target.value)
    } 
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataToSubmit = {
      name,
      email
      
    }
    axios.post("api/sendMail", dataToSubmit)
  }

 

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
         <form onSubmit={handleSubmit}>
         <input id="name" placeholder="name" value={name} onChange={handleClick}/><br/>
         <input id="email" placeholder="email" value={email} onChange={handleClick}/><br/>
       
         <button onClick={handleSubmit}>Send Email</button>
         </form>
      </header>
    </div>
  );
}

export default App;
