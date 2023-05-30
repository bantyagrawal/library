import axios from "axios"
import { ADMIN_LOGIN, FETCH_USERS } from "./adminType"

export const adminLogin = (payload) => {
    return {
        type: ADMIN_LOGIN,
        payload
    }
}

export const fetchUser = (payload) => {
    return {
        type: FETCH_USERS,
        payload
    }
}

export const adminLoginMiddleware = (data) => {
    return (dispatch) => {
        axios.post('http://localhost:8080/adminlogin',data)
        .then((response) => {
            alert(response.data.message);
            dispatch(adminLogin(response.data.token))})
    }
}

export const adminFetchUserMiddleware = (token) => {
    console.log('token',token);
    return (dispatch) => {
        axios.get('http://localhost:8080/userdetail', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then((response) => {
            console.log('response',response.data);
            dispatch(fetchUser(response.data));
        });
    }
}

export const deleteUser = (token, data) => {
    console.log('token', token);
    axios({
      method: 'delete',
      url: 'http://localhost:8080/deleteuser',
      headers: {
        Authorization: `Bearer ${token}`
      },
      data
    })
  };
  