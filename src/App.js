
import './App.css';
import NewTask from './components/newTask/newTask';
import HomePage from './components/pages/homePage';
import TaskList from './components/taskList/taskList';
import { Link, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
        <nav>
          <button><Link className='link' to="/">Home Page</Link></button>
          <button><Link className='link' to="/tasks">Tasks</Link></button>
          <button><Link className='link' to="/new">New Task</Link></button>
        
        
        
      </nav>
     
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/tasks' element={<TaskList/>}></Route>
          <Route path='/new' element={<NewTask/>}></Route>
          <Route path='*' element={<h1>Page not found</h1>}></Route>
        </Routes>
    </div>
  );
}

export default App;
