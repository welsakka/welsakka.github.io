import './App.css';
import React from 'react';
import ProjectContainer from './components/ProjectContainer';
import Link from './components/Link'

class App extends React.Component {

  constructor(props){
    super(props);
    this.state =
      {
        projects: [
          {
            title: "Whisper Speech AI React Native Project",
            link: "https://github.com/welsakka/WhisperApiReactNative"
          },
          {
            title: "Yemen Ministry of Finance PoC",
            link: "https://github.com/welsakka/yemen_pfm"
          },
          {
            title: "Blog Post: The Fundamental Difference Between Swift Protocols and Java Interfaces",
            link: "/#/blog"
          }
        ],
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
          <Link link="https://github.com/welsakka" text="Check out my GitHub"/>
          <br/>
          <Link link="https://www.upwork.com/freelancers/~018e92b4c1819c2c3b" text="Need development help? Show me your project on Upwork"/>
          <br/>
        </h3>
        <br/>
        <br/>
        <h4 className='description'>
        Some of my latest projects below. Most are proof of concepts, either for personal use or for research purposes.
        </h4>
        <ProjectContainer projects={this.state.projects}/>
      </div>
    );
  }
}

export default App;
