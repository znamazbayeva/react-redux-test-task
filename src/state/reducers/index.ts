import { combineReducers } from "redux";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";


const reducers = combineReducers({
    users: usersReducer,
    auth: authReducer
})

export default reducers

export type RootState = ReturnType<typeof reducers>