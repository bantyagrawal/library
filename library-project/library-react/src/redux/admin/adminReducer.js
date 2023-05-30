import { ADMIN_LOGIN, FETCH_USERS } from "./adminType";

const initialState = {
    adminToken: "",
    users: []
}
export const adminRouter = (state = initialState, action) => {
    switch (action.type) {
        case ADMIN_LOGIN:
            return { ...state, adminToken: action.payload }
        case FETCH_USERS:
            return { ...state, users: action.payload }
        default:
            return state
    }
}