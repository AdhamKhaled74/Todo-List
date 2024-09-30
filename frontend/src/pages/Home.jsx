import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { useEffect, useState } from "react";
import SortableTodo from "./SortableTodo";
import { useDispatch, useSelector } from "react-redux";
import { FetchTodos, UpdateTaskStatus } from "@/redux/apiCalls/todoApiCall";
import { toast } from "react-toastify";

const Home = () => {
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todo);

  const [tasks, setTasks] = useState({
    todo: [{ _id: "4", description: "Todo", hidden: true }],
    inProgress: [{ _id: "7", description: "In-Progress", hidden: true }],
    done: [{ _id: "9", description: "Done", hidden: true }],
  });

  useEffect(() => {
    dispatch(FetchTodos());
  }, [dispatch]);

  useEffect(() => {
    setTasks({
      todo: [
        { _id: "4", description: "Todo", hidden: true },
        ...todos.filter((task) => task.status === "will do" && !task.hidden),
      ],
      inProgress: [
        { _id: "7", description: "In-Progress", hidden: true },
        ...todos.filter((task) => task.status === "doing" && !task.hidden),
      ],
      done: [
        { _id: "9", description: "Done", hidden: true },
        ...todos.filter((task) => task.status === "done" && !task.hidden),
      ],
    });
  }, [todos]);

  const getStatusFromListName = (listName) => {
    switch (listName) {
      case "todo":
        return "will do";
      case "inProgress":
        return "doing";
      case "done":
        return "done";
      default:
        return "";
    }
  };

  const handleDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return; // If dropped outside a list, return

    const sourceList = source.droppableId;
    const destinationList = destination.droppableId;

    // Optimistically update the UI
    const updatedTasks = { ...tasks };

    if (sourceList === destinationList) {
      // Reorder within the same list (excluding the static task)
      const reorderedTasks = Array.from(
        updatedTasks[sourceList].filter((task) => !task.hidden)
      );
      const [removed] = reorderedTasks.splice(source.index - 1, 1);
      reorderedTasks.splice(destination.index - 1, 0, removed);

      setTasks((prevTasks) => ({
        ...prevTasks,
        [sourceList]: [
          ...prevTasks[sourceList].filter((task) => task.hidden),
          ...reorderedTasks,
        ],
      }));
    } else {
      // Move between different lists (excluding the static tasks)
      const sourceTasks = Array.from(
        updatedTasks[sourceList].filter((task) => !task.hidden)
      );
      const [movedTask] = sourceTasks.splice(source.index - 1, 1);

      const updatedTask = {
        ...movedTask,
        status: getStatusFromListName(destinationList),
      };

      const destinationTasks = Array.from(
        updatedTasks[destinationList].filter((task) => !task.hidden)
      );
      destinationTasks.splice(destination.index - 1, 0, updatedTask);

      setTasks((prevTasks) => ({
        ...prevTasks,
        [sourceList]: [
          ...prevTasks[sourceList].filter((task) => task.hidden),
          ...sourceTasks,
        ],
        [destinationList]: [
          ...prevTasks[destinationList].filter((task) => task.hidden),
          ...destinationTasks,
        ],
      }));

      // Dispatch the update to the backend
      dispatch(UpdateTaskStatus(updatedTask))
        .then(() => {
          // Optionally refetch todos or handle success
        })
        .catch((error) => {
          toast.error("Failed to update task status, reverting changes.");
          setTasks((prevTasks) => {
            const revertedSourceTasks = [...prevTasks[destinationList]].filter(
              (task) => !task.hidden
            );
            revertedSourceTasks.splice(destination.index - 1, 1);

            const revertedDestinationTasks = [...prevTasks[sourceList]].filter(
              (task) => !task.hidden
            );
            revertedDestinationTasks.splice(source.index - 1, 0, movedTask);

            return {
              ...prevTasks,
              [sourceList]: [
                ...prevTasks[sourceList].filter((task) => task.hidden),
                ...revertedDestinationTasks,
              ],
              [destinationList]: [
                ...prevTasks[destinationList].filter((task) => task.hidden),
                ...revertedSourceTasks,
              ],
            };
          });
        });
    }
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="grid my-2 w-full grid-cols-1 md:grid-cols-3 gap-6">
        {Object.keys(tasks).map((listName) => (
          <Droppable key={listName} droppableId={listName}>
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className={`p-4 rounded-lg shadow-lg ${
                  listName === "todo"
                    ? "bg-red-100"
                    : listName === "inProgress"
                    ? "bg-yellow-100"
                    : "bg-green-100"
                }`}
              >
                <h2 className="text-lg font-semibold mb-4 capitalize">
                  {listName.replace(/([A-Z])/g, " $1").toLowerCase()}
                </h2>
                {tasks[listName].length > 0 ? (
                  <>
                    {/* Render static tasks */}
                    {tasks[listName]
                      .filter((task) => task.hidden)
                      .map((task) => (
                        <SortableTodo
                          key={task._id}
                          id={task._id}
                          content={task.description}
                          hidden={task.hidden}
                          onClick={() =>
                            toast.info(`Task clicked: ${task.description}`)
                          }
                        />
                      ))}

                    {/* Render draggable tasks */}
                    {tasks[listName]
                      .filter((task) => !task.hidden)
                      .map((task, index) => (
                        <Draggable
                          key={task._id}
                          draggableId={task._id}
                          index={index + 1} // Index starts from 1 to skip the static task
                        >
                          {(provided) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              <SortableTodo
                                id={task._id}
                                content={task.description}
                                hidden={task.hidden}
                                onClick={() =>
                                  toast.info(
                                    `Task clicked: ${task.description}`
                                  )
                                }
                              />
                            </div>
                          )}
                        </Draggable>
                      ))}
                  </>
                ) : (
                  <p>No tasks available</p>
                )}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
};

export default Home;
