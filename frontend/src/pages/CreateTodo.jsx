import { CreateTask } from "@/redux/apiCalls/todoApiCall";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ClipLoader from "react-spinners/ClipLoader";

const CreateTodo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const dispatch = useDispatch();
  const { loading, isTodoCreated } = useSelector((state) => state.todo);
  const navigate = useNavigate();
  useEffect(() => {
    if (isTodoCreated) {
      navigate("/");
    }
  }, [isTodoCreated, navigate]);
  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      return toast.error("title is required");
    }
    if (!description.trim()) {
      return toast.error("description is required");
    }
    if (!status.trim()) {
      return toast.error("status is required");
    }
    dispatch(CreateTask({ title, description, status }));
  };
  return (
    <form
      className="bg-white my-2 p-4 md:p-6 rounded-lg shadow-md w-full max-w-lg mx-4 md:mx-auto space-y-4"
      onSubmit={formSubmitHandler}
    >
      <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mb-4">
        Create Todo
      </h2>

      <div className="flex flex-col space-y-1">
        <label htmlFor="title" className="text-sm font-medium text-gray-600">
          Title
        </label>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
          placeholder="Enter title"
        />
      </div>

      <div className="flex flex-col space-y-1">
        <label
          htmlFor="description"
          className="text-sm font-medium text-gray-600"
        >
          Description
        </label>
        <textarea
          name="description"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
          placeholder="Enter description"
          rows="3"
        />
      </div>

      <div className="flex flex-col space-y-1">
        <label htmlFor="status" className="text-sm font-medium text-gray-600">
          Status
        </label>
        <select
          name="status"
          id="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
        >
          <option value="">Select status</option>
          <option value="will do">Todo</option>
          <option value="doing">Doing</option>
          <option value="done">Done</option>
        </select>
      </div>

      <button
        type="submit"
        className="bg-red-400 hover:bg-red-500 text-white font-semibold py-3 px-6 rounded-md transition duration-200 flex items-center justify-center"
        disabled={loading} // Optionally disable the button while loading
      >
        {loading ? (
          <>
            <ClipLoader />
          </>
        ) : (
          "Add Task"
        )}
      </button>
    </form>
  );
};

export default CreateTodo;
