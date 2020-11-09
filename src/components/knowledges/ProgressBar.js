import React from 'react';

const ProgressBar = (props) => {

  return (
    <div className={props.className}>
      <h3>{props.title}</h3>
      <div className="years">
        <span>Années d'expérience</span>
        <span>6 mois</span>
        <span>1 an</span>
      </div>
      
      <div className="flexLine">
        {
          props.languages.map((item) => {
            let xpYears = 1;
            let progressBar = item.xp / xpYears * 100 + '%';

              return (
                <div key={item.id} className="languagesList">
                  <li>{item.value}</li>
                  <div className="progressBar" style={{width:progressBar}}></div>
                </div>
              )
          })
        }
      </div>
    </div>
  );
};

export default ProgressBar;