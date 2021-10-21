import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './pages/home';
import Product from './pages/product';
import Header from './components/Header';
import PageNotFound from './pages/pageNotFound';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Router>
          <Header></Header>
          <div className="pt-16">
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/home" component={Home}></Route>
                <Route exact path="/product/:assetid" component={Product}></Route>
                <Route component={PageNotFound} />
            </Switch>
          </div>
      </Router>
    </Provider>
  );
}

export default App;
