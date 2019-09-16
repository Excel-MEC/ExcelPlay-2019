import React, { useState } from 'react';
import './KryptosQuestion.scss';

const KryptosQuestion = props => {
  const [text, setText] = useState('');
  const { imgUrl, onSubmit, onViewHint } = props;

  return (
    <div className="questionWrapper">
      <img src={imgUrl} alt="failed to load" className="img img-fluid" />
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
        onClick={() => onViewHint()}
        data-toggle="modal"
        data-target="#hint-modal"
      >
        VIEW HINTS
      </button>
    </div>
  );
};

export default KryptosQuestion;
