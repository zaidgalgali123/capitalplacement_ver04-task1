import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillHome } from "react-icons/ai";
import { FaClipboardList } from "react-icons/fa";
const Sidebar = () => {
  return (
    <div className="border-2 border-gray-300/75 border-solid">
      <GiHamburgerMenu className="text-3xl block mx-auto my-2 mt-6 mb-6 ease-in-out duration-300 cursor-pointer hover:scale-110 hover:text-[#00635B]" />
      <AiFillHome className="text-3xl block mx-auto my-2 mb-6 ease-in-out duration-300 cursor-pointer hover:scale-110 hover:text-[#00635B]" />
      <FaClipboardList className="text-3xl block mx-auto my-2 ease-in-out duration-300 cursor-pointer hover:scale-110 hover:text-[#00635B]" />
    </div>
  );
};

export default Sidebar;
