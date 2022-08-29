import { Dispatch } from "redux"
import { ActionType } from "../action-types"
import { Action } from "../actions/index"
import axios from "axios";

export const getUsersList = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.GET_USER_LIST,
    });
    try {
      const response = await axios.get('https://reqres.in/api/users/');
      dispatch({
        type: ActionType.GET_USER_LIST_SUCCESS,
        payload: response.data,
      });
    } catch(error) {
      if (error instanceof Error) { 
        dispatch({
          type: ActionType.GET_USER_LIST_FAIL,
          payload: error.message,
        });
      } else {
        dispatch({
          type: ActionType.GET_USER_LIST_FAIL,
          payload: "This is an error",
        });
      }
    }
  };
}

export const logout = () => {
  return  (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.LOGOUT_SUCCESS,
    });
  };
}


export const loginClient = ({ email, password } : {email: string | undefined, password: string | undefined}) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ email, password });
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.LOGIN,
    });
    try {
      const response = await axios.post('https://reqres.in/api/login', body, config);
      dispatch({
        type: ActionType.LOGIN_SUCCESS,
        payload: response.data,
      });
    } catch(error) {
      if (error instanceof Error) { 
        dispatch({
          type: ActionType.LOGIN_FAILED,
          payload: error.message,
        });
      } else {
        dispatch({
          type: ActionType.LOGIN_FAILED,
          payload: "This is an error",
        });
      }
    }
  };
}

export const registerClient = ({ email, password } : {email: any, password: any}) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ email, password });
  console.log(body)
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.REGISTER_USER,
    });
    try {
      const response = await axios.post('https://reqres.in/api/register', body, config);
      dispatch({
        type: ActionType.REGISTER_USER_SUCCESS,
        payload: response.data,
      });
    } catch(error) {
      if (error instanceof Error) { 
        dispatch({
          type: ActionType.REGISTER_USER_FAILED,
          payload: error.message,
        });
      } else {
        dispatch({
          type: ActionType.REGISTER_USER_FAILED,
          payload: "This is an error",
        });
      }
    }
  };
}
