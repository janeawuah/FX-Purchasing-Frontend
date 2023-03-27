import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import Login from './components/Login/Login';
import Signup from './components/SignUp/Signup';
import Dashboard from "./components/Dashboard/Dashboard";
import RatesTable  from "./components/RatesTable/RatesTable";
import MakeOrder from "./components/MakeOrder/MakeOrder";
import CreateTrader from "./components/CreateTrader/CreateTrader";

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }



  return (

    <div className="App">
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Dashboard onFormSwitch={toggleForm} />
    
      }
    </div>
    // <Dashboard/>
    // <MakeOrder/>
    // <div>
    //   <CreateTrader/>
    // </div>

  );
}

export default App;
