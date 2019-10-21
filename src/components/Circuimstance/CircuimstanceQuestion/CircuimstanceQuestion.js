import React, { useState } from 'react';
import './CircuimstanceQuestion.scss';
import { IMAGE_FAILED_TO_LOAD } from '../../common/Constants';

const CircuimstanceQuestion = props => {
  const [text, setText] = useState('');
  const { imgUrl, sourceHint, onSubmit } = props;

  return (
    <div className="questionWrapper">
      {imgUrl ? (
        <img
          src={imgUrl}
          alt={IMAGE_FAILED_TO_LOAD}
          className="img img-fluid"
        />
      ) : null}
      <div className="sourceHint">{sourceHint}</div>
      <div className="answerWrapper">
        <input
          className="answer"
          placeholder="YOUR ANSWER..."
          style={{ textTransform: "lowercase" }}
          onChange={txt => setText(txt.target.value.toLowerCase())}
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

export default CircuimstanceQuestion;
