import { DeleteTask } from "@/redux/apiCalls/todoApiCall";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";

const SortableTodo = ({ id, content, hidden, onClick }) => {
  const dispatch = useDispatch();
  const [isDeleting, setIsDeleting] = useState(false);

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id,
    disabled: hidden,
    activationConstraint: {
      distance: 10,
    },
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition: transition || "transform 300ms cubic-bezier(0.25, 1, 0.5, 1)",
    opacity: isDragging || isDeleting ? 0.8 : 1,
    boxShadow: isDragging ? "0px 4px 12px rgba(0, 0, 0, 0.2)" : "none",
    cursor: hidden ? "not-allowed" : "pointer",
  };

  const handleClick = () => {
    if (!hidden && onClick) {
      onClick();
    }
  };

  const handleDelete = useCallback(
    async (e) => {
      e.stopPropagation();
      if (isDeleting) return;

      setIsDeleting(true);
      try {
        dispatch(DeleteTask(id));
      } finally {
        setIsDeleting(false);
      }
    },
    [id, dispatch, isDeleting]
  );

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      onClick={handleClick}
      className={`relative my-3 bg-white dark:bg-[#2C2C2C] p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out flex justify-between items-center group`}
    >
      <p className="text-gray-800 dark:text-gray-200 text-base font-medium">
        {content}
      </p>

      {!hidden && (
        <button
          className={`absolute right-4 top-1/2 transform -translate-y-1/2 text-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out hover:text-red-700`}
          onClick={handleDelete}
          disabled={isDeleting} // Disable button during delete
        >
          {isDeleting ? "Deleting..." : "Delete"}
        </button>
      )}
    </div>
  );
};

export default SortableTodo;
