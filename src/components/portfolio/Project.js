import React, { Component } from 'react';

export default class componentName extends Component {
  state = {
    showInfo: false
  }

  handleInfo = () => {
    this.setState({
      showInfo:!this.state.showInfo
    })
  }
  deletePopUp = () => {
    this.setState({
      showInfo:false
    })
  }

  render() {
    const {name, languagesIcons, source, info, picture, video, link} = this.props.item;

    return (
      <div className="project">

        <div className="icons">
          {languagesIcons.map(icon =>
            <i className={icon} key={icon}></i>
          )}
        </div>
        <h3>{name}</h3>
        <div className="projectImg">
          <img src={picture} onClick={this.handleInfo} alt=""/>
        </div>
        <span className="infos" onClick={this.handleInfo}>
          <i className="fas fa-plus-circle"></i>
        </span>

        {
          this.state.showInfo && (
            <div className="showInfos" onClick={this.deletePopUp}>
              <div className="infosContent">
                
                <div className="head">
                  <h2>{name}</h2>
                  <div className="sourceCode">
                    <a href={source} rel="noopener noreferrer" className="button" target="_blank">Code source</a>
                  </div>
                </div>
                
                <p className="text">{info}</p>

                {
                  link && <div className="link">
                    <a href={link} target="_blank" rel="noopener noreferrer">Lien vers le site</a>
                  </div>
                }

                {
                  video && <div className="video">
                    <iframe title={name} src={video} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                  </div>
                }
          
                <div className="button return" onClick={this.handleInfo}>Retourner sur la page</div>
              </div>
            </div>
          )
        }
      </div>
    );
  }
}