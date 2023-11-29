import React, {useEffect} from 'react';
import './App.css';
import {userTelegram} from "./hooks/userTelegram";
import Header from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";
import ProductList from "./components/ProductList/ProductList";
import Form from './components/Form/Form';


function App() {
  const {onToggleButton, tg} = userTelegram();

  useEffect(()=> {
    tg.ready()
  }, [])

  
  return (
    <div className="App">
      <Header />
        <Routes>
            <Route index element={<ProductList />} />
            <Route path={'form'} element={<Form />} />
        </Routes>
    </div>
  );
}
export default App;