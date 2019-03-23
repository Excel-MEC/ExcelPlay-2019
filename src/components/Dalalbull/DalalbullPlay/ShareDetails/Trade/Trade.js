import React, {useState} from 'react';
import './Trade.scss';

export function tradeProps(type){
  const [pendingDisabled, setPendingDisabled] = useState(true);
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  return {
    type:type,
    quantity:quantity,
    setQuantity:setQuantity,
    pendingDisabled:pendingDisabled,
    setPendingDisabled:setPendingDisabled,
    price:price,
    setPrice:setPrice
  }
}

const Trade = (props) => {
  return (
    <div className="Trade">
      <div className="d-flex">
        <div className="button">
          <button
            type="button"
            className="btn increment-button"
            onClick={() => {
              if (props.quantity > 0) {
	              props.setQuantity(props.quantity - 1);
              }
            }}
          >
            <i className="fa fa-minus" />
          </button>
        </div>
        <div className="align-middle">
          <input
            type="number"
            name="quantity"
            id="quantity-input"
            className="quantity-input text-center"
            placeholder="Quantity"
            value={props.quantity}
            onChange={e => props.setQuantity(parseInt(e.target.value, 10))}
          />
        </div>
        <div>
          <button
            type="button"
            className="btn increment-button"
            onClick={() => props.setQuantity(props.quantity + 1)}
          >
            <i className="fa fa-plus" />
          </button>
        </div>
      </div>

      <br />
      <span className="pending">
        <input
          type="checkbox"
          id="pending"
          onChange={() => props.setPendingDisabled(!props.pendingDisabled)}
        />
        <label htmlFor="pending" className="small">
          Pending
        </label>
        <br />
        <div className={props.pendingDisabled.toString()}>
          <div className="small">
            <span className="pending small">
              {props.type} THE STOCK ONLY WHEN IT REACHES
            </span>
          </div>
          <div className="d-flex" id="pending_block">
            <div>
              <input
                type="number"
                name="quantity"
                id="quantity-input"
                className="quantity-input text-center"
                placeholder="Quantity"
                disabled={props.pendingDisabled}
                value={props.price}
                onChange={e => props.setPrice(parseInt(e.target.value, 10))}
              />
            </div>
          </div>
        </div>
      </span>
    </div>
  );
};

export default Trade;
