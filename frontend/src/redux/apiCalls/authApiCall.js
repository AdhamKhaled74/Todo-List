import { request } from "@/utils/request";
import { authActions } from "../reducers/authSlice";
import { toast } from "react-toastify";

export function LoginUser(user) {
  return async (dispatch) => {
    try {
      const { data } = await request.post("api/v1/users/login", user);
      dispatch(authActions.login(data.data.user));

      localStorage.setItem("user", JSON.stringify(data.data.user));
      toast.success("You logged in successfully");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}
export function LogoutUser() {
  return async (dispatch) => {
    try {
      dispatch(authActions.logout());
      localStorage.removeItem("user");
      toast.success("You logged out successfully");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}
export function RegisterUser(user) {
  return async (dispatch) => {
    try {
      const { data } = await request.post("api/v1/users/signup", user);
      dispatch(authActions.register(data.message));
      toast.success("You registered successfully");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}
