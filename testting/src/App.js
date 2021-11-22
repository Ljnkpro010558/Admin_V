import React, {Component} from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import NavigationURL from "./Router/Navigation.js";

export default class App extends Component{
  render(){
    return(
      <div>
       <Router>
        <NavigationURL></NavigationURL>
        </Router>
      </div>
    )
  }
}
