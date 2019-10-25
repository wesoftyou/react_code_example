/* Libs */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

/* Utils */

import { generateEmptyQuestion } from 'utils/custom';

/* Constants */

import { GAME_DEF_CONFIG } from 'config';

/* Components */

import {
  BigTitle,
  AddGameDefinitionForms,
  CircleWithSign
} from 'components';

/* Styles */

import * as Styled from './styles';

function QuestionSection({
  data,
  disabled,
  formName,
  handleChange: changeQuestions,
}) {
  const [  activeNumber , setActive ] = useState(0);

  const handleChange = (questions, isValid = true ) => {
    changeQuestions(
      { target: { name: 'questions', value: questions }},
      { formName, isValid: isValid } 
    );
  }

  const onChange = updatedQuestion => {
    const questions = data.map( question => (
      updatedQuestion.number === question.number ? { ...updatedQuestion } : question
    ));
    handleChange( questions, true);
  }

  /**
   * 
   *  Initial - mean that we always need to have 1 question, even if disabled
   *  disabled - need for preventing adding questions if final code only option
   * 
   * @param {Boolean} initial 
   */
  const addQuestion = (initial = false) => {
    if (disabled && initial !== true) return; 
    const questionCount = data.length || 0;
    if (questionCount < GAME_DEF_CONFIG.MAX_QUESTIONS_COUNT ) {
      handleChange([ ...data, generateEmptyQuestion( questionCount + 1 ) ]);
      setActive(questionCount + 1);
    }
  }

  const deleteQuestion = (number) => {
    handleChange(data.filter( 
      question => question.number !== number 
    ).map( 
      (question, id) => ({ ...question, number: id + 1 })
    ));
    setActive(1);
  }

  useEffect(() => {
    if (data.length < 1) {
      addQuestion(true);
    }
    if ( !data.find( question => question.number === activeNumber )) {
      setActive(1);
    }
  }, [data])
  return (
    <Styled.Wrapper>
      <Styled.Header>
        <BigTitle>
          Questions
        </BigTitle>
        <Styled.AddQuestion onClick={addQuestion}>
          <CircleWithSign sign='+'/>
          <Styled.Label>
            Add a question
          </Styled.Label>
        </Styled.AddQuestion>
      </Styled.Header>
      <Styled.QuestionsList>
        { 
          data.map( ({ number }) => (
            <Styled.QuestionTab
              key={number}
              onClick={() => setActive(number )}
              isActive={ activeNumber === number}
            >
              {number}
            </Styled.QuestionTab>
          ))
        }
      </Styled.QuestionsList>
      <AddGameDefinitionForms.QuestionForm
        data={data.find( question => question.number === activeNumber ) || generateEmptyQuestion(1) }
        handleChange={onChange}
        deleteQuestion={deleteQuestion}
      />
      {disabled && (
        <Styled.OnlyFinalCodeMessage>
          You can't create questions with "only final code" option.
        </Styled.OnlyFinalCodeMessage>
      )
      }
    </Styled.Wrapper>
  );
}

/* QuestionSection type of props */

QuestionSection.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    game_def: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    number: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    unlock_code: PropTypes.string.isRequired,
    intro_vimeo_id: PropTypes.string.isRequired,
    question: PropTypes.string.isRequired,
    correct_answer_message: PropTypes.string.isRequired,
    incorrect_answer_message: PropTypes.string.isRequired,
    hint_text: PropTypes.string.isRequired,
    answers: PropTypes.array.isRequired,
  })).isRequired,
  disabled: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  formName: PropTypes.string.isRequired,
};

export default QuestionSection;
