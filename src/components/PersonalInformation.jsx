/* import Toggle from "./Toggle";
import AddQuestion from "./AddQuestion";
import { useState } from "react";
import QuestionForm from "./QuestionForm";
const PersonalInformation = () => {
  const [showAddQuestion, setShowAddQuestion] = useState(false);
  function handleShowQuestionForm() {
    setShowAddQuestion(true);
  }
  function handleHideQuestionForm() {
    setShowAddQuestion(false);
  }
  return (
    <div className="rounded-xl h-max shadow-md ml-4 mt-4 w-[448px]">
      <div className="bg-[#D0F7FA]  px-3 py-2  font-semibold rounded-tr-xl rounded-tl-xl">
        Personal Information
      </div>
      <div>
        <div className="px-3 py-2 text-lg border-b-2 border-solid border-slate-300/70 font-semibold">
          First name
        </div>
        <div className="px-3 py-2 text-lg border-b-2 border-solid border-slate-300/70 font-semibold">
          Last name
        </div>
        <div className="px-3 py-2 text-lg border-b-2 border-solid border-slate-300/70 font-semibold">
          Email
        </div>
        <div className="px-3 py-2 text-lg border-b-2 border-solid border-slate-300/70 font-semibold flex justify-between">
          <label htmlFor="phone">Phone</label>
          <div className="flex gap-4 items-center">
            <input type="checkbox" name="phone" id="phone" />
            <Toggle />
          </div>
        </div>
        <div className="px-3 py-2 text-lg border-b-2 border-solid border-slate-300/70 font-semibold flex justify-between">
          <label htmlFor="nationality">Nationality</label>
          <div className="flex gap-4 items-center">
            <input type="checkbox" name="phone" id="nationality" />
            <Toggle />
          </div>
        </div>
        <div className="px-3 py-2 text-lg border-b-2 border-solid border-slate-300/70 font-semibold flex justify-between">
          <label htmlFor="current-address">current address</label>
          <div className="flex gap-4 items-center">
            <input type="checkbox" name="phone" id="current-address" />
            <Toggle />
          </div>
        </div>
        <div className="px-3 py-2 text-lg border-b-2 border-solid border-slate-300/70 font-semibold flex justify-between">
          <label htmlFor="id-number">ID number</label>
          <div className="flex gap-4 items-center">
            <input type="checkbox" name="phone" id="id-number" />
            <Toggle />
          </div>
        </div>
        <div className="px-3 py-2 text-lg border-b-2 border-solid border-slate-300/70 font-semibold flex justify-between">
          <label htmlFor="dob">DOB</label>
          <div className="flex gap-4 items-center">
            <input type="checkbox" name="phone" id="dob" />
            <Toggle />
          </div>
        </div>
        <div className="px-3 py-2 text-lg border-b-2 border-solid border-slate-300/70 font-semibold flex justify-between">
          <label htmlFor="gender">gender</label>
          <div className="flex gap-4 items-center">
            <input type="checkbox" name="phone" id="gender" />
            <Toggle />
          </div>
        </div>
      </div>
      {showAddQuestion ? (
        <QuestionForm handleHideQuestionForm={handleHideQuestionForm} />
      ) : (
        <div onClick={handleShowQuestionForm}>
          <AddQuestion />
        </div>
      )}
    </div>
  );
};

export default PersonalInformation; */
import React, { useState } from "react";
import { BsUpload } from "react-icons/bs";
import Toggle from "./Toggle";
import AddQuestion from "./AddQuestion";
import QuestionForm from "./QuestionForm";

const PersonalInformation = () => {
  const [showAddQuestion, setShowAddQuestion] = useState(false);

  function handleShowQuestionForm() {
    setShowAddQuestion(true);
  }

  function handleHideQuestionForm() {
    setShowAddQuestion(false);
  }

  return (
    <div className="rounded-xl h-max shadow-md ml-4 mt-4 w-[448px]">
      <div className="bg-[#D0F7FA] px-3 py-2 font-semibold rounded-tr-xl rounded-tl-xl">
        Personal Information
      </div>
      <div>
        <div className="px-3 py-2 text-lg border-b-2 border-solid border-slate-300/70 font-semibold">
          First name
        </div>
        <div className="px-3 py-2 text-lg border-b-2 border-solid border-slate-300/70 font-semibold">
          Last name
        </div>
        <div className="px-3 py-2 text-lg border-b-2 border-solid border-slate-300/70 font-semibold">
          Email
        </div>
        <div className="px-3 py-2 text-lg border-b-2 border-solid border-slate-300/70 font-semibold flex justify-between">
          <label htmlFor="phone">Phone</label>
          <div className="flex gap-4 items-center">
            <input type="checkbox" name="phone" id="phone" />
            <Toggle />
          </div>
        </div>
        <div className="px-3 py-2 text-lg border-b-2 border-solid border-slate-300/70 font-semibold flex justify-between">
          <label htmlFor="nationality">Nationality</label>
          <div className="flex gap-4 items-center">
            <input type="checkbox" name="phone" id="nationality" />
            <Toggle />
          </div>
        </div>
        <div className="px-3 py-2 text-lg border-b-2 border-solid border-slate-300/70 font-semibold flex justify-between">
          <label htmlFor="current-address">current address</label>
          <div className="flex gap-4 items-center">
            <input type="checkbox" name="phone" id="current-address" />
            <Toggle />
          </div>
        </div>
        <div className="px-3 py-2 text-lg border-b-2 border-solid border-slate-300/70 font-semibold flex justify-between">
          <label htmlFor="id-number">ID number</label>
          <div className="flex gap-4 items-center">
            <input type="checkbox" name="phone" id="id-number" />
            <Toggle />
          </div>
        </div>
        <div className="px-3 py-2 text-lg border-b-2 border-solid border-slate-300/70 font-semibold flex justify-between">
          <label htmlFor="dob">DOB</label>
          <div className="flex gap-4 items-center">
            <input type="checkbox" name="phone" id="dob" />
            <Toggle />
          </div>
        </div>
        <div className="px-3 py-2 text-lg border-b-2 border-solid border-slate-300/70 font-semibold flex justify-between">
          <label htmlFor="gender">gender</label>
          <div className="flex gap-4 items-center">
            <input type="checkbox" name="phone" id="gender" />
            <Toggle />
          </div>
        </div>
      </div>
      {showAddQuestion ? (
        <QuestionForm handleHideQuestionForm={handleHideQuestionForm} />
      ) : (
        <div onClick={handleShowQuestionForm}>
          <AddQuestion />
        </div>
      )}
    </div>
  );
};

export default PersonalInformation;
