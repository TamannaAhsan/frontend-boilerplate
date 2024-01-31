import logo from './logo.svg';
import './App.css';
import {getAll, getById,create,update,deleteTest} from './Service/TestAxios';
import {useEffect} from "react";
import LoginSignup from "./Components/LoginSignup/LoginSignup";

function App() {
  useEffect(() => {
    const payload = {"name": "Tammy", "email":"test"};
    getAll();
    getById(1);
    create(payload);
    update(payload,1);
    deleteTest(1);
  })
  return (
    <div className="App">
      <LoginSignup/>
    </div>
  );
}

export default App;
