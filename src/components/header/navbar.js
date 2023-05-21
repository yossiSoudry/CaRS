import { AiOutlineMenu } from "react-icons/ai";
import { useStateContext } from "../../contexts/contextProvider";
import NavButtons from "./navButtons";

const Navbar = () => {
  const {
    openSidebar,
    setOpenSidebar,
    screenSize,
    currentColor,
  } = useStateContext();

  // Toggle the navbar state (for the burger button).
  const handleOpenSidebar = () => setOpenSidebar(!openSidebar);

  return (
    <div className="flex md:justify-end mt-3 sm:justify-between p-2 md:ml-6 md:mr-6">
      {/* The burger icon */}
      {screenSize <= 768 && (
        <button
          style={{ color: currentColor }}
          className="relative text-2xl flex items-center shadow-sm gap-4 cursor-pointer p-2 bg-white dark:bg-secondary hover:bg-slate-200 dark:hover:bg-slate-300 rounded-lg ml-4"
          onClick={handleOpenSidebar}
        >
          <AiOutlineMenu />
        </button>
      )}

      <NavButtons />

    </div>
  );
};

export default Navbar;
