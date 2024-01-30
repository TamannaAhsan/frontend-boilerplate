import logo from './logo.svg';
import './App.css';
import {getAll, getById,create,update,deleteTest} from './service/TestAxios';
import {useEffect} from "react";

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
