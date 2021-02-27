import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import About from './components/Home/About/About';
import Contact from './components/Home/Contact/Contact';
import Blog from './components/Blog/Blog';
import AboutPage from './components/AllPages/AboutPage/AboutPage';
import ContactPage from './components/AllPages/ContactPage/ContactPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>

          <Route path="/about">
            <About></About>
          </Route>

          <Route path="/contact">
            <Contact></Contact>
          </Route>

          <Route path="/blog">
            <Blog></Blog>
          </Route>

          <Route path="/aboutPage">
             <AboutPage></AboutPage>
          </Route>

          <Route path="/contactPage">
             <ContactPage></ContactPage>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
