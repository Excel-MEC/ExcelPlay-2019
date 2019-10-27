import React from 'react';
import './CircuimstanceHintModal.scss';

const CircuimstanceHintModal = props => {
  const { hintText } = props;

  const hints = () => {
    const hintList = [];
    hintText.forEach(h => {
      hintList.push(<li>{h}</li>);
    });
    return (
      <div>
        <ul>{hintList}</ul>
      </div>
    );
  };

  return (
    <div id="hint-modal" className="modal fade" role="dialog">
      {/* Modal triggered by view hint button in CircuimstanceQuestion */}
      <div className="modal-dialog">
        <div className="modal-content">{hints()}</div>
      </div>
    </div>
  );
};

export default CircuimstanceHintModal;
