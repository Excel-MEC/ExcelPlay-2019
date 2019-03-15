import React, { useState } from 'react';
import './ShareDetails.scss';
import Buy from './Buy/Buy';
import Stock from './Stock/Stock';
import SharesInHand from './SharesInHand/SharesInHand';

const tablist = { stock: '', buy: '', shortSell: '', sharesInHand: '' };

const SetTab = props => {
  if (props.tab.stock === 'active') {
    return <Stock />;
  } else if (props.tab.buy === 'active') {
    return <Buy quantity={props.quantity} setQuantity={props.setQuantity} />;
  } else if (props.tab.sharesInHand === 'active') {
    return <SharesInHand />;
  }
};

const swapTab = (tab, setTab) => {
  setTab({ ...tablist, [tab]: 'active' });
};

const ShareDetails = () => {
  const [quantity, setQuantity] = useState(0);
  const [pQuantity, setPQuantity] = useState(0);
  const [tab, setTab] = useState({ ...tablist, sharesInHand: 'active' });

  return (
    <div className="share-details">
      <h2 className="h2">STOCK INFO</h2>
      <h1 className="h1">NIFTY 50</h1>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <span
            className={'nav-link ' + tab.stock}
            onClick={() => swapTab('stock', setTab)}
          >
            Stock
          </span>
        </li>
        <li className="nav-item">
          <span
            className={'nav-link ' + tab.buy}
            onClick={() => swapTab('buy', setTab)}
          >
            Buy
          </span>
        </li>
        <li className="nav-item">
          <span className={'nav-link ' + tab.shortSell} href="/dalalbull/">
            Short Sell
          </span>
        </li>
        <li className="nav-item">
          <span
            className={'nav-link ' + tab.sharesInHand}
            onClick={() => swapTab('sharesInHand', setTab)}
          >
            Shares in hand
          </span>
        </li>
      </ul>
      <br />
      <SetTab
        quantity={quantity}
        pQuantiry={pQuantity}
        setPQuantity={setPQuantity}
        tab={tab}
        setQuantity={setQuantity}
      />
    </div>
  );
};

export default ShareDetails;
