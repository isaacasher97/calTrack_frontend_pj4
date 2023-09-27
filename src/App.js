import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet/>
    </div>
  );
}

export default App;
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import "../src/styles.scss";
import React from 'react';
import Login from './pages/Login';

function App() {

  const [token, setToken] = React.useState("")

  const URL = "https://caltrack-backend-2eww.onrender.com/"

  const getToken = async (un, pw) => {
    const response = await fetch(URL + "token/", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({username: un, password: pw})
    })
    const data = await response.json()
    console.log(data)
    setToken(data)
  } 


  return (
    <div className="App">
      <Header />
      <Outlet/>
    </div>
  );
}

export default App;
