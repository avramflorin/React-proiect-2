import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";

import Home from "./Pages/Home";
import Bootstrap from "./Pages/Bootstrap";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route to="/boostratp" component={Bootstrap}></Route>
        <Route to="*" component={Home}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
