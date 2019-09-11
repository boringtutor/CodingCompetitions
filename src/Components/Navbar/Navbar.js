import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from '../Pages/Home/Home';
import './Navbar.css';
import ProblemSet from '../Pages/Problemsets/Problemsets';
import Github from '../Pages/Github/Github';
import About from '../Pages/About/About';
import SignIn from '../Pages/SignPage/SignIn';

function Index() {
    return <Home/>;
  }
  function Problemsets() {
    return <ProblemSet/>;
  }
  
  function SignInPage(){
    return <SignIn/>
  }

  function GithubPage(){
    return <Github/>
  }
  function AboutPage(){
    return <About/>
  }

export default class Navbar extends Component {
    render() {
        return (
    <Router>
      
          <div >
            <div className="navbar_container">
              <div className="logo_main_container" ><Link to="/" className="special_color">ALGOS</Link></div>
              <div className="tab_containers">
              <Link to="/Problemsets" id="no_underline" className="tabs">Problem Sets</Link>
              <Link to="/Github" id="no_underline" className="tabs">Github</Link>
              <Link to="/About" id="no_underline" className="tabs">About</Link>
              
            </div>
            <div className="sign_in_container">
              <Link to="/signIn" id="no_underline">Sign In</Link>
            </div>
            
            </div>
            <Route path="/" exact component={Index} />
            <Route path="/Problemsets/" component={Problemsets} />
            <Route path="/SignIn/" component={SignInPage} />
            <Route path="/Github/" component={GithubPage} />
            <Route path="/About/" component={AboutPage} />
            
          </div>
    </Router>
        
        );
    }
}
