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
        <h3>
          <Link link="https://www.linkedin.com/in/welsakka/" text=" Connect with me on LinkedIn"/>
          <br/>
          <Link link="https://github.com/welsakka" text="Check out my Github"/>
          <br/>
          <br/>
        </h3>
        <h4 className='description'>
        Some of my latest projects below. Most are proof of concepts, either for personal use or for research purposes.
        </h4>
        <ProjectContainer projects={this.state.projects}/>
      </div>
    );
  }
}

export default App;
