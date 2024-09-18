import { ReactNode, useEffect } from "react";
import { useReducer } from "react";
import { createContext } from "react";
import { fetchMe, UserInfo } from "../services/auth/Login";
import getLocalStorageItem from "../utils/getLocalStorageItem";

// types

interface InitialState {
  darkMode: boolean;
  userToken: string | null;
  userInfo: UserInfo | null;
}

interface State extends InitialState {
  toggledarkMode: () => void;
  setUserToken: (token: string) => void;
  setUserInfo: (data: UserInfo | null) => void;
}

type Action =
  | { type: "TOGGLE_DARK_MODE" }
  | { type: "SET_USER_TOKEN"; payload: string }
  | { type: "SET_USER_INFO"; payload: UserInfo | null };

// creating context
export const AppContext = createContext<State | undefined>(undefined);

// reducer function and initial state
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

export default function AppProvider({ children }: { children: ReactNode }) {
  // creating reducer and actions
  const [{ userInfo, userToken, darkMode }, dispatch] = useReducer(
    reducer,
    initialState,
  );
  const toggledarkMode = () => {
    dispatch({ type: "TOGGLE_DARK_MODE" });
  };
  const setUserToken = (token: string) => {
    dispatch({ type: "SET_USER_TOKEN", payload: token });
  };

  const setUserInfo = (data: UserInfo | null) => {
    dispatch({ type: "SET_USER_INFO", payload: data });
  };
  // setting effect of darkmode and usertoken and fetching userinfo with usertoken
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem("userToken", JSON.stringify(userToken));
  }, [userToken]);

  useEffect(() => {
    async function getme() {
      try {
        if (!userToken)
          throw new Error("there is something wronge with userToken");
        const data = await fetchMe(userToken);
        setUserInfo(data);
      } catch (err) {
        console.error("error:", err);
      }
    }
    if (userToken) getme();
  }, [userToken]);
  return (
    <AppContext.Provider
      value={{
        userInfo,
        darkMode,
        userToken,
        toggledarkMode,
        setUserToken,
        setUserInfo,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
