import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import About from './About'
import Contact from './Contact'
import Home from './Home'
import Projects from './Projects'
import './App.css';

class App extends React.Component {

  render() {
    return (
      <Router>
        <div className = 'app'>
          <div className='navbar'>
            <Link className='link' to ='/'> Home Page</Link>
            <Link className='link' to ='/about'>About Me</Link>
            <Link className='link' to ='/projects'>Projects</Link>
            <Link className='link' to ='/contact'>Contact Me</Link>
          </div>
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/projects' component={Projects}/>
          <Route path='/contact' component={Contact}/>
        </div>
      </Router>
    )
  }
}

export default App;
