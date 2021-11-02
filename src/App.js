import './App.css';
import React from 'react';

import {Switch, Route} from "react-router-dom";
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Category from './pages/Category/Category';
import Cart from './pages/Cart/Cart';
import Favorites from './pages/Favorites/Favorites';
import Login from './pages/Login/Login';
import Page404 from './pages/Page404/Page404';
import TermsConditions from './pages/TermsConditions/TermsConditions';
import Product from './pages/Product/Product';
//  import "./utils/utility-classes.css"; // am mutat totul in App.css





class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    //  console.log("App.jsx", this.props);
    return (
      <Switch>
        {/* <Route exact path="/" component={Home} /> */}
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/tc" component={TermsConditions} />
        <Route path="/cart" component={Cart} />
        <Route path="/favorites" component={Favorites} />
        {/* <Route path="/login">
          <Login  signInWithGoogle={this.props.signInWithGoogle} />
        </Route> */}
        {/* 
        // asa se trimit propuri la componnta
        <Route
          path='/login'
          render={
            (props) => {
              return <Login {... props} />
            } 
          }
        /> */}
        <Route path="/login" component={Login} />
        <Route path="/category/:categoryLabel" component={Category} />
        <Route path="/product/:productId" component={Product} />
        <Route path="*" component={Page404} />
      </Switch>
    );
  }
}




export default App;
