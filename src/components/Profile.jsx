import Toggle from "./Toggle";
import AddQuestion from "./AddQuestion";
const Profile = () => {
  return (
    <div className="rounded-xl h-max shadow-md ml-4 mt-4 w-[448px]">
      <div className="bg-[#D0F7FA]  px-3 py-2  font-semibold rounded-tr-xl rounded-tl-xl">
        Profile
      </div>
      <div>
        <div className="px-3 py-2 text-lg border-b-2 border-solid border-slate-300/70 font-semibold flex justify-between">
          <label htmlFor="publication">Publication</label>
          <div className="flex gap-4 items-center">
            <input type="checkbox" name="phone" id="publication" />
            <Toggle />
          </div>
        </div>
        <div className="px-3 py-2 text-lg border-b-2 border-solid border-slate-300/70 font-semibold flex justify-between">
          <label htmlFor="skills">skills</label>
          <div className="flex gap-4 items-center">
            <input type="checkbox" id="skills" />
            <Toggle />
          </div>
        </div>
        <div className="px-3 py-2 text-lg border-b-2 border-solid border-slate-300/70 font-semibold flex justify-between">
          <label htmlFor="interests">Interests</label>
          <div className="flex gap-4 items-center">
            <input type="checkbox" id="interests" />
            <Toggle />
          </div>
        </div>
      </div>
      <AddQuestion />
    </div>
  );
};

export default Profile;
