import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Languages extends Component {
  state = {
    languages: [
      {id: 1, value: "Javascript", xp:0.95},
      {id: 2, value: "Css", xp:1},
      {id: 3, value: "Php", xp:0.5},
    ],
    frameworks: [
      {id: 1, value: "React", xp:0.75},
      {id: 2, value: "Redux", xp:0.3},
      {id: 3, value: "Nodejs", xp:0.4},
      {id: 4, value: "Vue", xp:0.35},
      {id: 5, value: "Sass", xp:0.7},
    ]
  };

  render() {
    let {languages, frameworks} = this.state;

    return (
      <div className="languagesFrameworks">
        <ProgressBar 
          languages={languages}
          className="languagesDisplay"
          title="langages"
        /> 
        <ProgressBar
          languages={frameworks}
          className="frameworksDisplay"
          title="frameworks & bibliothèques"
        />
      </div>
    );
  }
}

export default Languages;