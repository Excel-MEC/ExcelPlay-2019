import React, { useState } from 'react';
import './ShareDetails.scss';
import Buy from './Buy/Buy';
import Stock from './Stock/Stock';

const tablist = { stock: '', buy: '', shortSell: '', sharesInHand: '' };

const SetTab = props => {
  if (props.tab.stock === 'active') {
    return <Stock />;
  } else if (props.tab.buy === 'active') {
    return <Buy quantity={props.quantity} setQuantity={props.setQuantity} />;
  }
};

const swapTab = (tab, setTab) => {
  setTab({...tablist, [tab]:"active"})
};

const ShareDetails = () => {
  const [quantity, setQuantity] = useState(0);
  const [tab, setTab] = useState({ ...tablist, stock: 'active' });

  return (
    <div className="share-details">
      <h2 className="h2">STOCK INFO</h2>
      <h1 className="h1">NIFTY 50</h1>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <span className={'nav-link ' + tab.stock} onClick={()=>swapTab("stock", setTab)}>
            Stock
          </span>
        </li>
        <li className="nav-item">
          <span className={'nav-link ' + tab.buy} onClick={()=>swapTab("buy", setTab)}>
            Buy
          </span>
        </li>
        <li className="nav-item">
          <span className={'nav-link ' + tab.shortSell} href="/dalalbull/">
            Short Sell
          </span>
        </li>
        <li className="nav-item">
          <span className={'nav-link ' + tab.sharesInHand} href="/dalalbull/">
            Shares in hand
          </span>
        </li>
      </ul>
      <br />
      <SetTab quantity={quantity} tab={tab} setQuantity={setQuantity} />
    </div>
  );
};

export default ShareDetails;
