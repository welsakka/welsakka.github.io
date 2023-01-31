import './App.css';
import React from 'react';
import ProjectContainer from './components/ProjectContainer';
import { style } from '@mui/system';
import Link from './components/Link'

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = 
      { 
        projects: [
        "Autopay",
        "Masjid Finder Application"
        ],
        textStyle : {
          textDecoration : "none",
          color: "skyblue"
        }
      };
  }

  render(){
    return (
      <div className="App">
        <h1>Waleed Elsakka</h1>
        <h2>
          Software Developer
        </h2>
        <h4>Throwing things at the wall and seeing what sticks, pasta included.</h4>
        <h3>
          <Link link="https://www.linkedin.com/in/welsakka/" text="LinkedIn"/>
          <br/>
          <Link link="https://github.com/welsakka" text="Github"/>
        </h3>
        <ProjectContainer projects={this.state.projects}/>
      </div>
    );
  }
}

export default App;
