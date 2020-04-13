import React,{Component} from 'react';
import './App.css';
import Menu from './components/menucomponent'
import {Navbar,NavbarBrand} from 'reactstrap'

class App extends Component {
  render()
  {
  return (
    <div className="App">
      <Navbar dark color="primary"></Navbar>
      <div className="container">
        <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
      </div>
      <Menu/>
    </div>
     
  );
  }
}

export default App;
