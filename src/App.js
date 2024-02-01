import logo from './logo.svg';
import './App.css';
import {getAll, getById,create,update,deleteTest} from './Service/TestAxios';
import {useEffect} from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LoginSignup from "./Components/LoginSignup/LoginSignup";
import Login from "./Components/Login/Login";
import Register from "./Components/Registration/Register";

function App() {
  useEffect(() => {
    /*const payload = {"name": "Tammy", "email":"test"};
    getAll();
    getById(1);
    create(payload);
    update(payload,1);
    deleteTest(1);*/
  })
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
