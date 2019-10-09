import React, { useState, useEffect } from 'react';
import { getUserDetail } from '../apicalls/apicalls';
import './Status.scss';

const Status = props => {
  const [userDetail, setUserDetail] = useState({});
  useEffect(() => {
    getUserDetail().then(res => setUserDetail(res));
  }, []);
  return (
    <div className="userdata">
      <div align="center">
        <img src={userDetail.pic} alt="" className='propic' align="center"/>
      </div>
      <h1 className="h1" align="center">
        {userDetail.name}
      </h1>
      <br />
      <div className=" user-data">
        <div className=" row">
          <div className=" col-lg-6">
            <h1>{props.rank}</h1>
            <h3>Rank</h3>
          </div>
          <div className=" col-lg-6">
            <h1>{props.net_worth}</h1>
            <h3>Net worth</h3>
          </div>
        </div>
        <br/>
        <div className=" row">
          <div className=" col-lg-6">
            <h1>{props.cash_bal}</h1>
            <h3>Cash available</h3>
          </div>
          <div className=" col-lg-6">
            <h1>{props.margin}</h1>
            <h3>Margin</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Status;
