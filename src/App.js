import './App.css';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import Detail from "./components/Detail/Detail"
import CardFavorites from './components/CardFavorites/CardFavorites';
import UserProvider from './Contexts/UserProvider';


function App() {
  return (
    <div className="App">

       <Nav/>
       <UserProvider>
       <Routes>
         <Route path='/'  element={<Home/>}/>
         <Route path='/detail'  element={<Detail/>}/>
         <Route path='/favorites'  element={<CardFavorites/>}/>
       </Routes>
       </UserProvider>
    </div>
  );
}

export default App;
