import React from 'react';
import './SharesInHand.scss';
import { tablist } from '../ShareDetails';

const SharesInHand = ({ stockholdings, symbol, setActiveTab }) => {
  return (
    <div className="sharesInHand">
      <div className="head">Shares In Hand</div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Type</th>
            <th scope="col">Shares in Hand</th>
            <th scope="col">Current Price</th>
            <th scope="col">Gain</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {stockholdings ? (
            stockholdings.map((holding, i) => {
              if (holding.company === symbol)
                return (
                  <tr key={i}>
                    <td>{holding.type}</td>
                    <td>{holding.number}</td>
                    <td>{(holding.current * holding.number).toFixed(2)}</td>
                    <td>
                      {(
                        ((holding.current * holding.number -
                          holding.purchase * holding.number) *
                          100) /
                        (holding.purchase * holding.number)
                      ).toFixed(2)}
                    </td>
                    <td>
                      <button
                        type="button"
                        className="btn"
                        onClick={e => {
                          e.preventDefault();
                          setActiveTab(tablist.sell);
                        }}
                      >
                        Sell
                      </button>
                    </td>
                  </tr>
                );
              return '';
            })
          ) : (
            <tr>
              <td colSpan="5">
                <h1>No shares</h1>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default SharesInHand;
