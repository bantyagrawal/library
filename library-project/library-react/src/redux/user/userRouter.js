import { LOGIN } from "./userType";
import { SIGNUP } from "./userType";

const initialState = {
    token: '',
    user: '',
}
export const userRouter = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state, token: action.payload,
            }

        case SIGNUP:
            return {
                ...state, user: action.payload,
            }

        default:
            return state
    }
}