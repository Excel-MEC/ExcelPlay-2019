import React from 'react';
import './Buy.scss';

const Buy = props => {
  return (
    <div className="buy">
	    <div className="quantity-wrapper">
		    <div className="row">
			    <div className="col-md-6">
				    <div>Buy Share</div>
			    </div>
			    <div className="col-md-6">
				    <div className="d-flex">
					    <div>
						    <button
							    className="btn increment-button"
							    onClick={e => {
								    if (props.quantity !== 0) {
									    return props.setQuantity(props.quantity - 1);
								    }
							    }}
						    >
							    <icon className="fa fa-minus" />
						    </button>
					    </div>
					    <div>
						    <input
							    type="number"
							    name="quantity"
							    id="quantity-input"
							    className="quantity-input text-center"
							    placeholder="Quantity"
							    value={props.quantity}
							    onChange={e => props.setQuantity(parseInt(e.target.value | 0))}
						    />
					    </div>
					    <div>
						    <button
							    className="btn increment-button"
							    onClick={e => props.setQuantity(props.quantity + 1)}
						    >
							    <icon className="fa fa-plus" />
						    </button>
					    </div>
				    </div>
			    </div>
		    </div>
	    </div>
	    <div className="row">
		    <div className="col-md-6">
			    <button type="button" className="btn btn-success btn-block my-2">
				    BUY
			    </button>
		    </div>
		    <div className="col-md-6">
			    <button type="button" className="btn btn-danger btn-block my-2">
				    SHORT
			    </button>
		    </div>
	    </div>
    </div>
  );
};

export default Buy;
