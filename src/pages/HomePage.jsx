import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Main from "../components/Main";
const HomePage = () => {
  return (
    <div className="h-screen grid grid-cols-[70px_auto]">
      <Sidebar />
      <div className="min-h-0">
        <Navbar />
        <Main />
      </div>
    </div>
  );
};

export default HomePage;
