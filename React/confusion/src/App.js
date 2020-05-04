import React from 'react';
import logo from './logo.svg';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './components/MenuComponent';
import './App.css';
import {DISHES} from './shared/dishes';




class App extends React.Component {

  constructor(props){
    super(props);
  

  this.state={
    dishes:DISHES
  };
}
  

  render(){

  return (
    <div className="App">

      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Sandys Food Service</NavbarBrand>
        </div>

      </Navbar>
      <Menu dishes ={this.state.dishes}/>
      



    </div>
    );
}
}

export default App;
