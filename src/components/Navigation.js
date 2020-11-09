import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {

  return(
    <div className="sidebar"> 

      <div className="id">
        <div className="idContent">
          <img src="./media/Ju.jpg" alt="profil-pic"/>
          <h3>Julien Azambourg</h3>
        </div>
      </div>

      <div className="navigation">
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="navActive">
              <i className="fas fa-home"></i>
              <span>Accueil</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/knowledges" activeClassName="navActive">
              <i className="fas fa-mountain"></i>
              <span>Compétences</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/portfolio" activeClassName="navActive">
              <i className="fas fa-images"></i>
              <span>Portfolio</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/contact" activeClassName="navActive">
              <i className="fas fa-address-book"></i>
              <span>Contact</span>
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="socialNetwork">
        <ul>
          <li>
            <a href="https://www.youtube.com/channel/UCHGLV13U7YRbjrKpqfbtyYg/videos" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
          </li>
          <li>
            <a href="https://github.com/JustFS" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
          </li>
          <li>
            <a href="https://fr.linkedin.com/in/julien-azambourg-1bb1301b4" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
          </li>
          <li>
            <a href="https://codepen.io/ju-az" target="_blank" rel="noopener noreferrer"><i className="fab fa-codepen"></i></a>
          </li>
        </ul>
        <div className="signature">
          <p>J. Azambourg - 2020</p>
        </div>
      </div>
    </div>
  )
}

export default Navigation;