import { LOGIN, SIGNUP } from "./userType";
import axios from 'axios';

export const login = (data) => {
    return {
        type: LOGIN,
        payload: data,
    }
}

export const signup = (data) => {
    return {
        type: SIGNUP,
        payload: data,
    }
}

export const userinfo = (data) => {
    return async (dispatch) => {
        try {
            const response = await axios.post('http://localhost:8080/login',data);
            dispatch(login(response.data.token));
        } catch (error) {
            console.error(error);
        }
    }
}
