import UploadImage from "./UploadImage";
import PersonalInformation from "./PersonalInformation";
import Profile from "./Profile";
import AdditionalQuestions from "./AdditionalQuestions";
import { AiOutlineRight } from "react-icons/ai";
const Main = () => {
  return (
    <main className="min-h-0 pb-8 overflow-y-auto max-h-[calc(100vh-80px)]">
      <UploadImage />
      <PersonalInformation />
      <Profile />
      <AdditionalQuestions />
      <input
        type="text"
        className="border-2 border-stone-300/70 border-solid rounded-md my-4 h-12 w-[450px] ml-4"
      />
      <button className=" bg-[#21B592] px-4 py-2 text-white flex items-center ml-[300px]">
        save & continue <AiOutlineRight className="inline-block" />
      </button>
    </main>
  );
};

export default Main;
