import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Product from './pages/product';
import Header from './components/Header';
import PageNotFound from './pages/pageNotFound';

function App() {
  return (
        <Router>
          <Header></Header>
          <div className="pt-16">
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/home" component={Home}></Route>
                <Route exact path="/product" component={Product}></Route>
                <Route component={PageNotFound} />
            </Switch>
          </div>
        </Router>
  );
}

export default App;
