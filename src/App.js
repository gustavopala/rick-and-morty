import './App.css'
import Cards from './components/Cards.jsx'
import { useState, useEffect } from "react";
import Nav from './components/Nav.jsx'
import { Routes, Route } from 'react-router-dom'
import About from './components/About.jsx';
import Detail from './components/Detail.jsx';
import Form from './components/Form';
import { useLocation } from 'react-router-dom';
import {useNavigate} from 'react-router-dom'
import  Favorites  from './components/Favorites';

function App() {
  const location=useLocation([]);
  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const username = 'ejemplo@gmail.com';
  const password = '1password';
  const login=(user) =>{
     if (user.password === password && user.name === username) {
        setAccess(true);
        navigate('/home');
     }
  }
  const onSearch = (id) => {
    const URL_BASE = "https://be-a-rym.up.railway.app/api"
    const API_KEY = "7f3295b85d1e.89c5c9bd63bcfb16a7e1"
    fetch(`${URL_BASE}/character/${id}?key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name && !characters.find((char) => char.id === data.id)) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert('No hay personajes con ese ID');
        }
      });
  }
  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
  }

  useEffect(() => {
    !access && navigate('/');
 }, [access]);
  return (
    <div className='App' style={{ padding: '25px' }}>
      {location.pathname === '/' ? <Form login={login}/>: <Nav onSearch={onSearch} />}
      <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/favorite' element={<Favorites/>}/>
        <Route path='/home' element={<Cards
          characters={characters}
          onClose={onClose}
        />}
        />
        <Route path="/detail/:detailId" element={<Detail />} />
      </Routes>
      <hr />
    </div>
  )
}

export default App
