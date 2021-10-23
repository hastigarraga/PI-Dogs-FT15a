import './App.css'; 
import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'; 
import LandingPage from './components/LandingPage/LandingPage.jsx' 
import Home from './components/Home/Home.jsx' 
import DogCreated from './components/DogCreated/DogCreated.jsx';
import Detail from './components/Detail/Detail.jsx';

function App() {
  return ( 
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component = {LandingPage}/>
          <Route path="/home" component = {Home}/> 
          <Route path ="/dog" component = {DogCreated}/>
          <Route exact path='/home:id' component={Detail}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
