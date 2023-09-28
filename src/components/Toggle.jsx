import { useState } from "react";
const Toggle = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div onClick={() => setToggle(!toggle)}>
      <div
        className={`w-8 h-2 relative  rounded-full p-1 ${
          toggle ? "bg-blue-200" : "bg-slate-200"
        }`}
      >
        <div
          className={`bg-white w-4 h-4 rounded-full  shadow-xl transform  absolute left-0 top-[-4px] ${
            toggle ? "translate-x-4 bg-blue-400" : " bg-sky-200"
          } transition duration-300 ease-in-out`}
        ></div>
      </div>
    </div>
  );
};

export default Toggle;
