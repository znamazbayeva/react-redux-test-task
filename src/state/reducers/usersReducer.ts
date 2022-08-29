import { ActionType } from "../action-types/index"
import { Action } from "../actions"
import { User, UsersList } from "../../models/common";

interface UsersState {
  loading: boolean;
  error?: null | string;
  data: User[] | [];
}
const initialState: UsersState = {
  loading: false,
  error: null,
  data: [],
};

const reducer = ( state: UsersState = initialState, action: Action) => {
    switch (action.type){
      case ActionType.GET_USER_LIST:
        return {
          loading: true,
          error: null,
          data: [],
        };
        case ActionType.GET_USER_LIST_SUCCESS:
          return {
            loading: false,
            error: null,
            data: action.payload.data,
        };
        case ActionType.GET_USER_LIST_FAIL:
          return {
            loading: false,
            error: action.payload,
            data: [],
          };
        default:
          return state;
    }
}

export default reducer