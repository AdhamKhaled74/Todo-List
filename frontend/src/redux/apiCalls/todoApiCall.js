import { toast } from "react-toastify";
import { request } from "@/utils/request";
import { todoActions } from "../reducers/todoSlice";

export function FetchTodos() {
  return async (dispatch, getState) => {
    try {
      const userId = getState().auth.user._id;
      const { data } = await request.get(
        `api/v1/todo/${userId}`,
        {},
        {
          headers: {
            authorization: "Bearer " + getState().auth.user.token,
          },
        }
      );
      console.log(data);

      dispatch(todoActions.setTodos(data.data.todos));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}

export function CreateTask(todo) {
  return async (dispatch, getState) => {
    try {
      dispatch(todoActions.setLoading());
      const { data } = await request.post(`api/v1/todo`, todo, {
        headers: {
          authorization: "Bearer " + getState().auth.user.token,
        },
      });
      dispatch(todoActions.setIsTodoCreated());
      setTimeout(() => {
        dispatch(todoActions.clearIsTodoCreated());
      }, 2000);
    } catch (error) {
      toast.error(error.response.data.message);
      dispatch(todoActions.clearLoading());
    }
  };
}

export function UpdateTaskStatus(todo) {
  return async (dispatch, getState) => {
    try {
      const { data } = await request.patch(`api/v1/todo/${todo._id}`, todo);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}

export function DeleteTask(todoId) {
  return async (dispatch, getState) => {
    try {
      await request.delete(`api/v1/todo/${todoId}`);
      const todos = getState().todo.todos;
      dispatch(
        todoActions.setTodos(todos.filter((todo) => todo._id !== todoId))
      );
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}
