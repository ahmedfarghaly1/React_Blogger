import React from 'react';
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ArticlesListPage from "./pages/ArticlesListPage";
import ArticlePage from "./pages/ArticlePage";
import NotFound from "./pages/NotFoundPage";
import Navbar from "./Navbar";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom"
import './App.css';

function App() {
  return (

      <Router>
        <div className='App'>
            <Navbar />
        <div id='page-body'>
            <Switch>
                <Route path='/' component={HomePage} exact/>
                <Route path='/about' component={AboutPage} />
                <Route path='/articles' component={ArticlesListPage} />
                <Route path='/article/:name' component={ArticlePage}  />
                <Route component={NotFound}/>
            </Switch>
        </div>
        </div>
      </Router>

  );
}

export default App;
