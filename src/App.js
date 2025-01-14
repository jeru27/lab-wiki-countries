import './App.css';
import Router from './Router.js';
import countries from './countries.json';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='container'>
        <div className='row'>
          <CountriesList countries={countries}/> 
        </div>
        <div className='row'>
        <CountryDetails/>
        </div>

      </div>
      <Router/>
    </div>
  );
}

export default App;