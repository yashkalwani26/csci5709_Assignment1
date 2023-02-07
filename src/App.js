import './App.css';
import ListItem from './components/listItem/listItem';
import Header from './components/header/header';
import Navbar from './components/navbar/navbar';

function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <ListItem/>
    </div>
  );
}

export default App;
