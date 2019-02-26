import React from 'react';
import './DalalbullRules.scss';

const DalalbullRules = () => {
  return (
    <div className="rules">
      <h2>Rules and Event Format</h2>
      <ol>
        <li>
          Basically 4 different types of transactions can be performed :-
          <ul>
            <li>Buy</li>
            <li>Sell</li>
            <li>Short Sell</li>
            <li>Short Cover</li>
          </ul>
        </li>
        <li>
          Trading can be done on 50 companies from the National Stock
          Exchange(NSE) known as NIFTY50.
        </li>
        <li>
          The game will follow actual market timings (09:15 to 15:30).Trading
          can be done only on weekdays(Monday To Friday).All stock data is
          real-time fetched from published sources which are provided to all
          participants.
        </li>
        <li>
          The following terminologies related to Dalalbull are used on a
          frequent basis:-
          <ul>
            <li>
              Stock Info: DALAL BULL provides stock information for 50 companies
              from the NSE and you are allowed to trade with these companies
              only. The stock table displayed contains the following
              information.
            </li>
            <li>
              Open: Price level at which the pre open market traded the shares.
            </li>
            <li>High: Highest price during the day.</li>
            <li>Low: Lowest price during the day.</li>
            <li>Current price: Shows the Last traded price for the share.</li>
            <li>
              Change: Difference of current price with respect to previous
              close.
            </li>
            <li>
              % Change: Percentage difference of current price with respect to
              previous close.
            </li>
            <li>
              Total trade Value: Total value of shares traded during the day.
            </li>
            <li>
              Cash Balance: The sum of Cash In Hand and the Margin you deposit
              after Short Selling.
            </li>
            <li>
              Cash In Hand: The maximum amount with which you can trade at any
              point of time. Initially each player is provided with ₹10,00,000
              of virtual money to start the game.
            </li>
            <li>
              Margin: While Short Selling half of the trade value is deducted
              from cash in hand and deposited as margin. This is to ensure that
              the user is able to Short Cover the same even if price rises by
              50%.
            </li>
            <li>
              Net Worth: The total of cash balance and worth of all the stocks
              in procession and this decides your rank.
            </li>
            <li>
              No. of Transaction: The total number of transactions carried out
              by the broker on your behalf. Brokerage charged depends on the
              number of transactions carried out. Brokerage: Here at DalalBull
              for first 100 transactions will be charged 0.5% of transactions
              value as brokerage, next 900 transactions will attract 1%
              brokerage and beyond which 1.5% will be the brokerage.
            </li>
          </ul>
        </li>
        <li>Limit Trading and Market Trading</li>
        <ul>
          <li>
            Limit Trading ­ When you start playing the game you will see a field
            that says Pending Order, well this is what limit trading is all
            about. Here you may mention a price at which you want the shares to
            be bought or sold if you are not happy with the current price. In
            DALAL BULL, all the pending transactions that has not yet executed
            will be cancelled automatically when the market closes (i.e. at
            15:30). So set the limit which may reach the target before 15.30.
            You will have to pay brokerage only for the executed transactions.
          </li>
          <li>
            Market Trading ­ You trade straight away without keeping any limit
            at the current price. And accordingly brokerage will be deducted for
            each successful transaction.
          </li>
        </ul>
        <li>
          A live leader board will be maintained so that the participant can
          check his/her ranking.
        </li>
        <li>
          The admins have the ability to disqualify any players for fraudulent
          behavior.
        </li>
      </ol>
    </div>
  );
};

export default DalalbullRules;
