import { ActionType } from "../action-types/index";
import { User, UsersList } from "../../models/common";

interface GetUsersListAction {
  type: ActionType.GET_USER_LIST
}

interface GetUsersListActionSucess {
  type: ActionType.GET_USER_LIST_SUCCESS,
  payload: UsersList
}

interface GetUsersListActionFail {
  type: ActionType.GET_USER_LIST_FAIL,
  payload: string
}

interface LoginAction {
  type: ActionType.LOGIN
}

interface LoginActionSuccess {
  type: ActionType.LOGIN_SUCCESS
  payload: {
    "token": string
  }
}

interface LoginActionFail {
  type: ActionType.LOGIN_FAILED
  payload: string
}

interface RegisterUserAction {
  type: ActionType.REGISTER_USER
}

interface RegisterUserActionSuccess {
  type: ActionType.REGISTER_USER_SUCCESS
  payload: {
    "token": string,
    "id": number
  }
}

interface RegisterUserActionFail {
  type: ActionType.REGISTER_USER_FAILED
  payload: string
}

interface UserLogout {
  type: ActionType.LOGOUT_SUCCESS
}

export type Action =  GetUsersListActionSucess | GetUsersListActionFail | GetUsersListAction
                      | LoginAction | LoginActionSuccess | LoginActionFail 
                      | RegisterUserAction | RegisterUserActionSuccess | RegisterUserActionFail
                      | UserLogout ;