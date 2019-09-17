import React, {Component} from 'react';
import Header from './Components/Header/Header'
import Wizard from './Components/Wizard/Wizard'
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';

class App extends Component {

  render(){
  return (
    <div className="App">
      <Header />
      <Wizard />
      <Dashboard />
    </div>
  );
}
}

export default App;
