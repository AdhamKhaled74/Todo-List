import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for burger and close menu
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { LogoutUser } from "@/redux/apiCalls/authApiCall";
import { toast } from "react-toastify";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  return (
    <div>
      <button
        className="p-4 text-gray-700 dark:text-white lg:hidden"
        onClick={toggleSidebar}
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      <aside
        className={`fixed lg:static top-0 left-0 z-50 w-80 min-h-svh bg-white dark:bg-[#1E1E1E] border-r border-gray-300 dark:border-gray-700 shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 transition-transform duration-300 ease-in-out`}
      >
        <div className="flex flex-col mt-6 px-6 py-8">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-8">
            To Do App
          </h1>
          <nav className="space-y-4">
            <Link
              className="flex items-center px-4 py-3 text-gray-700 dark:text-gray-100 bg-gray-100 dark:bg-[#333] transition-all duration-300 ease-in-out transform rounded-lg hover:bg-gray-200 dark:hover:bg-[#444] hover:shadow-lg"
              to="/"
            >
              <span className="ml-3 text-lg font-medium">Home</span>
            </Link>
            {user && (
              <Link
                className="flex items-center px-4 py-3 text-gray-700 dark:text-gray-100 bg-gray-100 dark:bg-[#333] transition-all duration-300 ease-in-out transform rounded-lg hover:bg-gray-200 dark:hover:bg-[#444] hover:shadow-lg"
                to="/addTask"
              >
                <span className="ml-3 text-lg font-medium">Add Task</span>
              </Link>
            )}
            {!user && (
              <Link
                className="flex items-center px-4 py-3 text-gray-700 dark:text-gray-100 bg-gray-100 dark:bg-[#333] transition-all duration-300 ease-in-out transform rounded-lg hover:bg-gray-200 dark:hover:bg-[#444] hover:shadow-lg"
                to="/login"
              >
                <span className="ml-3 text-lg font-medium">Login</span>
              </Link>
            )}
            {!user && (
              <Link
                className="flex items-center px-4 py-3 text-gray-700 dark:text-gray-100 bg-gray-100 dark:bg-[#333] transition-all duration-300 ease-in-out transform rounded-lg hover:bg-gray-200 dark:hover:bg-[#444] hover:shadow-lg"
                to="/register"
              >
                <span className="ml-3 text-lg font-medium">Register</span>
              </Link>
            )}
            {user && (
              <button
                className="flex w-full items-center px-4 py-3 text-gray-700 dark:text-gray-100 bg-gray-100 dark:bg-[#333] transition-all duration-300 ease-in-out transform rounded-lg hover:bg-gray-200 dark:hover:bg-[#444] hover:shadow-lg"
                onClick={() => {
                  dispatch(LogoutUser());
                }}
              >
                <span className="ml-3 text-lg font-medium">Logout</span>
              </button>
            )}
          </nav>
        </div>
      </aside>

      {/* Overlay when the sidebar is open on mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black opacity-50 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
