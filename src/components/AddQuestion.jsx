/* import { FaPlus } from "react-icons/fa";
const AddQuestion = () => {
  return (
    <button className="btn btn-primary btn-lg btn-block flex gap-2 items-center px-2 py-4 cursor-pointer">
      <FaPlus /> <p>Add Question</p>
    </button>
  );
};

export default AddQuestion;
 */
/* import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

const AddQuestion = () => {
  const [showForm, setShowForm] = useState(false);
  const [questionType, setQuestionType] = useState("");
  const [questionText, setQuestionText] = useState("");
  const [choices, setChoices] = useState([]);

  const handleAddQuestionClick = () => {
    setShowForm(true);
  };

  const handleQuestionTypeChange = (e) => {
    setQuestionType(e.target.value);
  };

  const handleQuestionTextChange = (e) => {
    setQuestionText(e.target.value);
  };

  const handleChoiceChange = (e, index) => {
    const updatedChoices = [...choices];
    updatedChoices[index] = e.target.value;
    setChoices(updatedChoices);
  };

  const handleAddChoice = () => {
    setChoices([...choices, ""]);
  };

  const handleRemoveChoice = (index) => {
    const updatedChoices = [...choices];
    updatedChoices.splice(index, 1);
    setChoices(updatedChoices);
  };

  return (
    <div>
      <button
        className="btn btn-primary btn-lg btn-block flex gap-2 items-center px-2 py-4 cursor-pointer"
        onClick={handleAddQuestionClick}
      >
        <FaPlus /> <p>Add Question</p>
      </button>
      {showForm && (
        <div>
          <select onChange={handleQuestionTypeChange} value={questionType}>
            <option value="">Select a question type</option>
            <option value="paragraph">Paragraph</option>
            <option value="short">Short Question</option>
            <option value="yesno">Yes or No</option>
            <option value="date">Date</option>
            <option value="number">Number</option>
            <option value="multiplechoice">Multiple Choice</option>
          </select>
          <input
            type="text"
            placeholder="Enter your question"
            value={questionText}
            onChange={handleQuestionTextChange}
          />
          {questionType === "multiplechoice" && (
            <div>
              {choices.map((choice, index) => (
                <div key={index}>
                  <input
                    type="text"
                    placeholder={`Choice ${index + 1}`}
                    value={choice}
                    onChange={(e) => handleChoiceChange(e, index)}
                  />
                  <button onClick={() => handleRemoveChoice(index)}>
                    Remove
                  </button>
                </div>
              ))}
              <button onClick={handleAddChoice}>Add Choice</button>
            </div>
          )}
          
        </div>
      )}
    </div>
  );
};

export default AddQuestion; */
import React, { useState } from "react";
import { FaPlus, FaTrash } from "react-icons/fa";
import "./Profile.css"; // Import the CSS file for styling

const AddQuestion = () => {
  const [showForm, setShowForm] = useState(false);
  const [questionType, setQuestionType] = useState("");
  const [questionText, setQuestionText] = useState("");
  const [choices, setChoices] = useState([]);
  const [questions, setQuestions] = useState([]);

  const handleAddQuestionClick = () => {
    setShowForm(true);
  };

  const handleQuestionTypeChange = (e) => {
    setQuestionType(e.target.value);
  };

  const handleQuestionTextChange = (e) => {
    setQuestionText(e.target.value);
  };

  const handleChoiceChange = (e, index) => {
    const updatedChoices = [...choices];
    updatedChoices[index] = e.target.value;
    setChoices(updatedChoices);
  };

  const handleAddChoice = () => {
    setChoices([...choices, ""]);
  };

  const handleRemoveChoice = (index) => {
    const updatedChoices = [...choices];
    updatedChoices.splice(index, 1);
    setChoices(updatedChoices);
  };

  const handleSaveQuestion = () => {
    const newQuestion = {
      type: questionType,
      text: questionText,
      choices: [...choices],
    };

    setQuestions([...questions, newQuestion]);

    setQuestionType("");
    setQuestionText("");
    setChoices([]);

    setShowForm(false);
  };

  const handleDeleteQuestion = (index) => {
    const updatedQuestions = [...questions];
    updatedQuestions.splice(index, 1);
    setQuestions(updatedQuestions);
  };

  return (
    <div className="profile-container">
      {/* <div className="profile-header">Profile</div> */}
      <button className="add-question-button" onClick={handleAddQuestionClick}>
        <FaPlus /> <span>Add Question</span>
      </button>
      {showForm && (
        <div className="question-form">
          <select
            className="question-type"
            onChange={handleQuestionTypeChange}
            value={questionType}
          >
            <option value="">Select a question type</option>
            <option value="paragraph">Paragraph</option>
            <option value="short">Short Question</option>
            <option value="yesno">Yes or No</option>
            <option value="date">Date</option>
            <option value="number">Number</option>
            <option value="multiplechoice">Multiple Choice</option>
          </select>
          <input
            className="question-text"
            type="text"
            placeholder="Enter your question"
            value={questionText}
            onChange={handleQuestionTextChange}
          />
          {questionType === "multiplechoice" && (
            <div>
              {choices.map((choice, index) => (
                <div key={index} className="choice-container">
                  <input
                    className="choice-input"
                    type="text"
                    placeholder={`Choice ${index + 1}`}
                    value={choice}
                    onChange={(e) => handleChoiceChange(e, index)}
                  />
                  <button
                    className="remove-choice-button"
                    onClick={() => handleRemoveChoice(index)}
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button className="add-choice-button" onClick={handleAddChoice}>
                Add Choice
              </button>
            </div>
          )}
          <button className="save-button" onClick={handleSaveQuestion}>
            Save
          </button>
        </div>
      )}
      {questions.map((q, index) => (
        <div key={index} className="saved-question">
          <p>Type: {q.type}</p>
          <p>Text: {q.text}</p>
          {q.choices && (
            <ul>
              {q.choices.map((choice, choiceIndex) => (
                <li key={choiceIndex}>{choice}</li>
              ))}
            </ul>
          )}
          <button
            className="delete-button"
            onClick={() => handleDeleteQuestion(index)}
          >
            <FaTrash /> Delete Question
          </button>
        </div>
      ))}
    </div>
  );
};

export default AddQuestion;
