import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function useAppContext() {
  const state = useContext(AppContext);
  if (!state) throw new Error("useAppContext must used within an AppProvider");
  return state;
}
