import React, { useState } from 'react';
import './KryptosQuestion.scss';
import { IMAGE_FAILED_TO_LOAD } from '../../common/Constants';

const KryptosQuestion = props => {
  const [text, setText] = useState('');
  const { imgUrl, sourceHint, onSubmit } = props;

  return (
    <div className="questionWrapper">
      {
        (imgUrl) ?
          <img src={imgUrl} alt={IMAGE_FAILED_TO_LOAD} className="img img-fluid" />
          : null
      }
      <div className="sourceHint">
        {sourceHint}
      </div>
      <div className="answerWrapper">
        <input
          className="answer"
          placeholder="YOUR ANSWER..."
          onChange={txt => setText(txt.target.value)}
        />
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => onSubmit(text)}
        >
          SUBMIT
        </button>
      </div>
      <button
        type="button"
        className="btn btn-hint btn-primary"
        data-toggle="modal"
        data-target="#hint-modal"
      >
        VIEW HINTS
      </button>
    </div>
  );
};

export default KryptosQuestion;
