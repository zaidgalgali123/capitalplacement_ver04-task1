import { useState } from "react";
import SelectForm from "./SelectForm";
const QuestionForm = ({ handleHideQuestionForm }) => {
  const [selectValue, setSelectValue] = useState("");
  function handleChange(e) {
    let value = e.target.value;
    setSelectValue(value);
  }
  return (
    <div className="px-2 py-4">
      <select
        value={selectValue}
        onChange={handleChange}
        className="w-full h-10 p-2 border-2 border-slate-300/70 border-solid outline-2 outline-slate-300/70 rounded-md text-slate-600"
      >
        <option value="" disabled>
          select question type
        </option>
        <option value="paragraph">Paragraph</option>
        <option value="yes_or_no">Yes or no</option>
      </select>
      {selectValue !== "" && (
        <SelectForm
          formType={selectValue}
          handleHideQuestionForm={handleHideQuestionForm}
        />
      )}
    </div>
  );
};

export default QuestionForm;
