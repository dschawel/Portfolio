import React from 'react'
import { Route, Switch } from 'react-router-dom'

// Custom components
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Projects from './pages/Projects'


const Content = props => {
    return (
        <div className="container">
            <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/projects" component={Projects} />
            </Switch>
        </div>
    )
}

export default Content
