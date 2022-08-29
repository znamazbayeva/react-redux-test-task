import { useAppDispatch } from "./hooks";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state";

export const useActions = () => {
  const dispatch = useAppDispatch();
  return bindActionCreators(actionCreators, dispatch);
};