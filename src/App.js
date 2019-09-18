import React, {Component} from 'react';
import Header from './Components/Header/Header'
import './App.css';
import routes from './routes'

class App extends Component {

  render(){
  return (
    <div className="App">
      <Header />
      {routes}
    </div>
  );
}
}

export default App;
