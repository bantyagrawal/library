import { BOOK_FETCH, FETCH_ISSUED_BOOK } from "./bookType";

const initialState = {
    book: [],
    issuedBook: []
}
export const bookRouter = (state = initialState, action) => {
    switch (action.type) {
        case BOOK_FETCH:
            return { ...state, book: action.payload }
        case FETCH_ISSUED_BOOK:
            return { ...state, issuedBook: action.payload }
        default:
            return state
    }
}