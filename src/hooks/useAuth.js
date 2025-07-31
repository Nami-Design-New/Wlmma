import { useEffect } from "react";
import { useCookies } from "react-cookie";
import axiosInstance from "../utils/axiosInstance";

export default function useAuth() {
  const [cookies, , removeCookie] = useCookies(["token"]);
  const token = cookies.token;

  useEffect(() => {
    if (token) {
      axiosInstance.defaults.headers.common["Authorization"] = token;
    } else {
      delete axiosInstance.defaults.headers.common["Authorization"];
      removeCookie("token", { path: "/" });
    }
  }, [token, removeCookie]);

  return {
    isAuthed: !!token,
  };
}
