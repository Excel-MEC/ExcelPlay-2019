import React from 'react';
import './Modal.scss';

const Modal = ({ visibility, setVisibility, children }) => {
  return (
    <div className="custom-modal" style={{ visibility: visibility }}>
      <span className="close" onClick={() => setVisibility('hidden')}>
        &times;
      </span>
      <div className="content">{children}</div>
    </div>
  );
};

export default Modal;
