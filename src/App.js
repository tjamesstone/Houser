import React, {Component} from 'react';
import Header from './Components/Header/Header'
import Wizard from './Components/Wizard/Wizard'
import House from './Components/House/House'
import './App.css';

class App extends Component {

  render(){
  return (
    <div className="App">
      <Header />
      <Wizard />
      <House />
    </div>
  );
}
}

export default App;
