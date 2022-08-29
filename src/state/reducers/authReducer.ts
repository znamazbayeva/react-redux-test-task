import { ActionType } from "../action-types/index"
import { Action } from "../actions"
import { User } from "../../models/common";

interface AuthState {
  isAuthenticated: boolean,
  loading: boolean;
  error: string | null;
  userId: null | number;
  token: string | null;
}

const initialState: AuthState = {
  isAuthenticated: Boolean(localStorage.getItem("isAuthenticated")),
  loading: false,
  error: null,
  userId: Number(localStorage.getItem("userId")),
  token: localStorage.getItem("token")
};

const reducer = ( state: AuthState = initialState, action: Action) => {
    switch (action.type){
      case ActionType.LOGIN:
        return {
          ...state,
          isAuthenticated: false,
          loading: true,
          error: null,
          userId: null,
        };
        case ActionType.LOGIN_SUCCESS:
          localStorage.setItem("isAuthenticated", "true");
          localStorage.setItem("token", action.payload.token);
          return {
            ...state,
            isAuthenticated: true,
            loading: false,
            error: null,
            token: action.payload.token
        };
        case ActionType.LOGIN_FAILED:
          localStorage.setItem("isAuthenticated", "false");
          localStorage.removeItem("token");
          return {
            isAuthenticated: false,
            loading: false,
            error: action.payload,
            userId: null,
            token: null
          };
        case ActionType.REGISTER_USER:
          return {
            ...state,
            isAuthenticated: false,
            loading: true,
            error: null,
            userId: null,
          };
        case ActionType.REGISTER_USER_SUCCESS:
            localStorage.setItem("token", action.payload.token);
            localStorage.setItem("userId", (action.payload.id).toString());
            return {
              ...state,
              loading: false,
              token: action.payload.token,
              userId: action.payload.id
          };
        case ActionType.REGISTER_USER_FAILED:
            localStorage.removeItem("token");
            return {
              isAuthenticated: false,
              loading: false,
              error: action.payload,
              userId: null,
              token: null
            };
          case ActionType.LOGOUT_SUCCESS:
              localStorage.removeItem("token");
                localStorage.removeItem("userId");
              return {
                isAuthenticated: false,
                loading: false,
                error: null,
                userId: null,
                token: null
          };
        default:
          return state;
    }
}

export default reducer