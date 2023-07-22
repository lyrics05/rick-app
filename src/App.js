import './App.css';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import Detail from "./components/Detail/Detail"


function App() {
  return (
    <div className="App">
       <Nav/>
       <Routes>
         <Route path='/'  element={<Home/>}/>
         <Route path='/detail'  element={<Detail/>}/>
       </Routes>
    </div>
  );
}

export default App;
