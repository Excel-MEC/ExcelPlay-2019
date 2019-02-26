import React from 'react';
import './DalalbullHeader.scss';
import Dalalbull from '../../../assets/bull5.png';

const DalalbullHeader = () => {
  return (
    <div className="dalalbullHeader">
      <div className="top-banner">
        <div className="row">
          <div className="col-md-4">
            <div className="d-flex">
              <div>
                <img src={Dalalbull} className="img img-fluid" alt="" />
              </div>
              <div>
                <h1>DALALBULL</h1>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <ul className="nav justify-content-end">
              <li className="nav-item">
                <a className="nav-link active" href="/Dalalbull/rules">
                  <span className="link-rotate">Rules</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Dalalbull">
                  Play
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Dalalbull">
                  History
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Dalalbull/ranklist">
                  Ranklist
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default DalalbullHeader;
