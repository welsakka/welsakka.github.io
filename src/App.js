import './App.css';
import React from 'react';
import ProjectContainer from './components/ProjectContainer';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = 
      { 
        projects: [
        "Autopay",
        "Masjid Finder Application"
        ]
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
        <a href="https://www.linkedin.com/in/welsakka/">My LinkedIn</a>
        <br/>
        <a href="https://github.com/welsakka">My Github</a>
        </h3>

        <ProjectContainer projects={this.state.projects}/>
      </div>
    );
  }
}

export default App;
