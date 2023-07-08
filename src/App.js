import logo from './logo.svg';
import './App.css';
import NavBar from './componets/NavBar/NavBar';
import ItemListContainer from './componets/ItemListContainer/ItemListContainer';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer prop_greeting={"Bienvenidos a Mhoa.App"}/>
    </div>
  );
}

export default App;
