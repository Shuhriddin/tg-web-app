import React, {useEffect} from 'react';
import './App.css';
import {userTelegram} from "./hooks/userTelegram";
import Header from "./components/Header/Header";



function App() {
  const {onToggleButton, tg} = userTelegram();

  useEffect(()=> {
    tg.ready()
  }, [])

  
  return (
    <div className="App">
      <Header />
      <button onClick={onToggleButton}>toggle</button>
    </div>
  );
}
export default App;