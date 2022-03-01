import './App.css';
import CrudApi from './CrudApi/CrudApi';
import SongSearch from './SongSearch/SongSearch';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import MenuPrincipal from './MenuPrincipal';

function App() {
  return (
    <div className="App">
      <h1>Practica React Router</h1>
      <Home/>
      <Router>
        <MenuPrincipal/>
        <Routes>
          <Route path="/contactos" element={<CrudApi/>}/>
          <Route path="/songsearch" element={<SongSearch/>}/>
        </Routes>
      </Router>
{/*       <CrudApi></CrudApi>
      <hr></hr>
      <SongSearch/> */}
    </div>
  );
}

export default App;
