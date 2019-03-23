import React, { useState } from 'react';
import './KryptosQuestion.scss';

const KryptosQuestion = props => {
  const [text, setText] = useState('');
  const { imgUrl, onSubmit } = props;

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
    </div>
  );
};

export default KryptosQuestion;
