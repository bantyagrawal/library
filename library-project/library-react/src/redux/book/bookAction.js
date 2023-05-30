import axios from "axios"
import { BOOK_FETCH, FETCH_ISSUED_BOOK } from "./bookType"

export const fetchBook = (payload) => {
    return {
        type: BOOK_FETCH,
        payload,
    }
}

export const fetchIssuedBook = (payload) => {
    return {
        type: FETCH_ISSUED_BOOK,
        payload
    }
}
export const fetchBookMiddleware = (token) => {
    return (dispatch) => {
        axios.get('http://localhost:8080/allbook',{
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
        .then((response) => {
            dispatch(fetchBook(response.data));
        })
    }
}

export const issuedBook = (token, data) => {
    axios.post('http://localhost:8080/asignbook',data,{
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })
    .catch((err) => {console.log('error',err)});
}

export const submitBook = (token, data) => {
    axios.put('http://localhost:8080/submitbook', data, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })
    .catch((err) => {console.log('error');})
}
export const alreadyIssuedBookMiddleware = (token) => {
   return (dispatch) => {
    axios.get('http://localhost:8080/alreadyIssuedBook',{
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })
    .then((response) => {
        dispatch(fetchIssuedBook(response.data))
    })
    .catch((err) => {console.log('error',err)});
   }
}