import { Route, Routes } from 'react-router-dom';
import './App.css';
import CounterRedux from './components/CounterRedux';
import Employee from './components/Employee';
import Home from './components/Home';
import NavBar from './components/NavBar';
import UserList from './components/UserList';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/employee'} element={<Employee />} />
        <Route path={'/counter'} element={<CounterRedux />} />
        <Route path={'/users'} element={<UserList />} />
      </Routes>
    </div>
  );
}

export default App;
