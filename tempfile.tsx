import { ReactNode, useEffect } from "react";
import { useReducer } from "react";
import { createContext } from "react";
import { fetchMe } from "../services/auth/Login";
import getLocalStorageItem from "../utils/getLocalStorageItem";

// types

type ContextProviderProps = {
  children: ReactNode;
};
interface InitialState {
  darkMode: boolean;
  userToken: string | null;
  userInfo: any;
}
interface State extends InitialState {
  toggleDarkMode: () => void;
  setUserToken: (token: string) => void;
  setUserInfo: (data: any) => void;
}

type Action =
  | { type: "TOGGLE_DARK_MODE" }
  | { type: "SET_USER_TOKEN"; payload: string }
  | { type: "SET_USER_INFO"; payload: any };
// creating context

export const AppContext = createContext<State | undefined>(undefined);

// reducer and its initialstate

const initialState: InitialState = {
  darkMode: getLocalStorageItem<boolean>("darkMode", false),
  userToken: getLocalStorageItem<string | null>("userToken", null),
  userInfo: null,
};

const reducer = (state: InitialState, action: Action) => {
  switch (action.type) {
    case "TOGGLE_DARK_MODE":
      return { ...state, darkMode: !state.darkMode };
    case "SET_USER_TOKEN":
      return { ...state, userToken: action.payload };
    case "SET_USER_INFO":
      return { ...state, userInfo: action.payload };
    default:
      return state;
  }
};

export default function AppProvider({ children }: ContextProviderProps) {
  // creating reducer and its actions
  const [{ userInfo, userToken, darkMode }, dispatch]: [
    InitialState,
    (action: Action) => void,
  ] = useReducer(reducer, initialState);

  const toggleDarkMode = () => {
    dispatch({ type: "TOGGLE_DARK_MODE" });
  };
  const setUserToken = (token: string) => {
    dispatch({ type: "SET_USER_TOKEN", payload: token });
  };

  const setUserInfo = (data: any) => {
    dispatch({ type: "SET_USER_INFO", payload: data });
  };
  // adding effect to darkmode and usertoken
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem("userToken", JSON.stringify(userToken));
  }, [userToken]);

  useEffect(() => {
    async function getme() {
      try {
        const data = await fetchMe(userToken);
        setUserInfo(data);
      } catch (err) {
        console.error("error:", err);
      }
    }
    if (userToken) getme();
  }, [userToken, setUserInfo]);
  return (
    <AppContext.Provider
      value={{
        userInfo,
        darkMode,
        userToken,
        toggleDarkMode,
        setUserToken,
        setUserInfo,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const BASE_URL = "http://localhost:4000/v1";
async function fetchLogIn(userName, password) {
  const response = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      identifier: userName,
      password: password,
    }),
  });
  if (!response.ok) {
    const error = new Error(
      `there is an error in login fetch (status ${response.status})`,
    );
    error.status = response.status;
    throw error;
  }
  const data = await response.json();
  return data;
}
async function fetchMe(userToken) {
  const res = await fetch(`${BASE_URL}/auth/me`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  });
  if (!res.ok) throw new Error("there is an error in fetchMe api.");
  const data = await res.json();
  return data;
}
async function x(username, password) {
  const a = await fetchLogIn(username, password);
  const b = await fetchMe(a);
  console.log(b);
}
x("alirezam", "80289900");
