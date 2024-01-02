import './App.css';
import dogs from "./db.json"
import Routes from './Routes';
import Nav from './Nav';

function App() {

  return (
    <div className="App">
      {console.log(dogs.dogs.map( (d) => ({'name': d.name, 'src': d.src})))}
      <Nav dogs={dogs.dogs.map( (d) => ({'name': d.name, 'src': d.src}))}/>
      <h1>Good luck!</h1>
      <Routes data={dogs}/>

    </div>
  );
}

App.defaultProps = dogs;

export default App;
