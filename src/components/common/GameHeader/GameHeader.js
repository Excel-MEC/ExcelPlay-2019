import React from 'react';
import './GameHeader.scss';
import excelPlayLogo from '../../../assets/logo.png';

const MItem = props => {
  return (
    <li className="nav-item">
      <a className="nav-link active" href={props.link}>
        <span className="link-rotate">{props.text}</span>
      </a>
    </li>
  );
};

const GameHeader = (props) => {
  return (
    <div className="gameHeader">
      <div className="top-banner">
        <div className="row">
          <div className="col-md-4">
            <div className="d-flex">
	            <div className="excel-play-logo">
		            <img src={excelPlayLogo} className="img img-fluid" alt="" />
	            </div>
              <div>
                <img src={props.icon} className="img img-fluid" alt="" />
              </div>
              <div>
                <h1>{props.gName}</h1>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <ul className="nav justify-content-end">
	            {props.children}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export { GameHeader, MItem };
