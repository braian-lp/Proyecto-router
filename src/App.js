import './App.css';
import CrudApi from './CrudApi/CrudApi';
import SongSearch from './SongSearch/SongSearch'

function App() {
  return (
    <div className="App">
      <h2>Todo preparado para empezar</h2>
      <CrudApi></CrudApi>
      <hr></hr>
      <SongSearch/>
    </div>
  );
}

export default App;
