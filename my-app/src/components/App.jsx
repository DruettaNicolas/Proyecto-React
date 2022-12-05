import './App.css';
import NavBar from './NavBar/NavBar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
function App() {
    return (
    <>
    <NavBar/>
    <ItemListContainer greeting={"Hola, bienvenido"}/>
    </>
    );
}
export default App;