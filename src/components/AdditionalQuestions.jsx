import Toggle from "./Toggle";
import AddQuestion from "./AddQuestion";
const AdditionalQuestions = () => {
  return (
    <div className="rounded-xl h-max shadow-md ml-4 mt-4 w-[448px]">
      <div className="bg-[#D0F7FA]  px-3 py-2  font-semibold rounded-tr-xl rounded-tl-xl">
        Additional Questions
      </div>
      <div>
        <div className="px-3 py-2 text-lg border-b-2 border-solid border-slate-300/70 font-semibold flex justify-between">
          <label htmlFor="id-number">Resume</label>
          <div className="flex gap-4 items-center">
            <input type="checkbox" id="resume" />
            <Toggle />
          </div>
        </div>
        <div className="px-3 py-2 text-lg border-b-2 border-solid border-slate-300/70 font-semibold flex justify-between">
          <label htmlFor="dob">Experience</label>
          <div className="flex gap-4 items-center">
            <input type="checkbox" id="experience" />
            <Toggle />
          </div>
        </div>
        <div className="px-3 py-2 text-lg border-b-2 border-solid border-slate-300/70 font-semibold flex justify-between">
          <label htmlFor="education">Education</label>
          <div className="flex gap-4 items-center">
            <input type="checkbox" id="education" />
            <Toggle />
          </div>
        </div>
      </div>
      <AddQuestion />
    </div>
  );
};

export default AdditionalQuestions;
