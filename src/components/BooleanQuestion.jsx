const BooleanQuestion = ({ handleHideQuestionForm }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="yes or no question"
        className="border-2 border-stone-300/70 border-solid rounded-md my-4 h-10 w-full px-2"
      />
      <div className="flex gap-1 my-2 pl-1">
        <input type="checkbox" name="" id="" />
        <p>Lorem ipsum dolor sit amet</p>
      </div>
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

export default BooleanQuestion;
