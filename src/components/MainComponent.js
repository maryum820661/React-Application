import React, { Component } from 'react';
import Menu from './menucomponent';
import DishDetail from './Dishdetail';
import { DISHES } from '../shared/dishes';
import {Switch,Route,Redirect} from 'react-router-dom'
import Header from './headercomponent';
import Footer from './footercomponent';
import Home from './Homecomponent';
class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        dishes: DISHES,
        selectedDish: null
    };
  }


  render() {
    const HomePage=()=>{
      return(
     <Home/> 
      );
    }
    return (
      <div>
        <Header/> 
       <Switch>
         <Route path="/home" component={HomePage}/>
         <Route exact path="/menu" component={()=><Menu dishes={this.state.dishes}/>}/>
         <Redirect to="/home"/>
       </Switch>
       <Footer/>
      </div>
    );
  }
}

export default Main;
