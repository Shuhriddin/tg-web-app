import React, {useEffect} from 'react';
import './App.css';
import { userTelegram } from "../../hooks/userTelegram";



function App() {
  const {onToggleButton, tg} = userTelegram();

  useEffect(()=> {
    tg.ready()
  }, [])

  
  return (
    <div className="App">
      <button onClick={onToggleButton}>toggle</button>
    </div>
  );
}
export default App;