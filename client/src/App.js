import './App.css'; 
import {BrowserRouter, Route, Switch} from 'react-router-dom'; 
import LandingPage from './components/LandingPage/LandingPage.jsx' 
import Home from './components/Home/Home.jsx' 
import DogCreated from './components/DogCreated/DogCreated.jsx'

function App() {
  return ( 
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component = {LandingPage}/>
          <Route path="/home" component = {Home}/> 
          <Route path ="/doggie" component = {DogCreated}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
