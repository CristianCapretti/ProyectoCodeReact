import Header from './components/Header';
import './App.css';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div>
      <Header />
      <ItemListContainer greeting={"Sitio en construccion"} />
    </div>
  );
}

export default App;
