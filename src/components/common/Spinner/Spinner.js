import React from 'react';

const Spinner = () => (
  <div style={{ postion: 'relative' }} className="loader">
    <h1
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      Loading...
    </h1>
  </div>
);

export default Spinner;
