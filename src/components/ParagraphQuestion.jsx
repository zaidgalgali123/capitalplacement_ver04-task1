/* const ParagraphQuestion = ({ handleHideQuestionForm }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="paragraph question"
        className="border-2 border-stone-300/70 border-solid rounded-md my-4 h-10 w-full px-2"
      />
      <div className="flex gap-2 w-full justify-between">
        <button
          onClick={handleHideQuestionForm}
          className="bg-red-500 text-slate-100 rounded-lg px-4 py-2"
        >
          delete
        </button>
        <button className="bg-green-500 text-slate-100 rounded-lg px-4 py-2">
          save
        </button>
      </div>
    </div>
  );
};

export default ParagraphQuestion; */
import React, { useState } from "react";

const QuestionForm = ({ handleHideQuestionForm }) => {
  const [questionType, setQuestionType] = useState("paragraph");
  const [questionText, setQuestionText] = useState("");
  const [savedQuestions, setSavedQuestions] = useState([]);

  const handleQuestionTypeChange = (e) => {
    setQuestionType(e.target.value);
    setQuestionText(""); // Clear the input field when the question type changes
  };

  const handleQuestionTextChange = (e) => {
    setQuestionText(e.target.value);
  };

  const handleSaveQuestion = () => {
    if (questionType === "paragraph" || questionType === "yesno") {
      const newQuestion = {
        type: questionType,
        text: questionText,
      };

      setSavedQuestions([...savedQuestions, newQuestion]);
      setQuestionType("paragraph");
      setQuestionText(""); // Clear the input field after saving
    }
  };

  const handleDeleteQuestion = (index) => {
    const updatedQuestions = [...savedQuestions];
    updatedQuestions.splice(index, 1);
    setSavedQuestions(updatedQuestions);
  };

  return (
    <div className="question-form-container">
      <div className="mb-2">
        <select
          className="select-type"
          onChange={handleQuestionTypeChange}
          value={questionType}
        >
          <option value="paragraph">Paragraph</option>
          <option value="yesno">Yes or No</option>
        </select>
      </div>
      <textarea
        className="question-textarea"
        placeholder="Enter your question"
        value={questionText}
        onChange={handleQuestionTextChange}
      />
      <div className="button-group">
        <button className="save-button" onClick={handleSaveQuestion}>
          Save
        </button>
      </div>
      {savedQuestions.map((q, index) => (
        <div key={index} className="saved-question">
          <p>Type: {q.type}</p>
          <p>Text: {q.text}</p>
          <button
            className="delete-button"
            onClick={() => handleDeleteQuestion(index)}
          >
            Delete
          </button>
        </div>
      ))}
      <button className="close-button" onClick={handleHideQuestionForm}>
        Close
      </button>
    </div>
  );
};

export default QuestionForm;
