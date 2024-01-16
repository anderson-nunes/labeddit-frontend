import Cookies from "js-cookie";
import fetchApp from "./customFetch";

export const login = async (body: any) => {
  const response = await fetchApp("users/login", {
    body,
    method: "POST",
  });

  Cookies.set("user_name", response.name);

  return response;
};

export const signup = async (body: any) => {
  const response = await fetchApp("users/signup", {
    body,
    method: "POST",
  });

  return response;
};
