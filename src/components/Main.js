import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Headercomponent from './Headercomponent';
import Footer from './Footer';
import Home from "./Home";
import upload from "./Upload";

class  Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


render() {
    return(
        <div>
            <Headercomponent />
            <Switch>
              <Route path='/home' component={Home} />
              <Route path='/upload' component={upload} />
              <Redirect to="/home" />
            </Switch>
            <Footer />
        </div>
    );
  }
}

export default  Main;