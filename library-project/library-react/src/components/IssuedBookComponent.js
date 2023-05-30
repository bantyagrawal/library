import { useEffect } from "react";
import { Button, Table } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { alreadyIssuedBookMiddleware, submitBook } from "../redux/book/bookAction";

export const IssuedBookComponent = () => {
    const dispatch = useDispatch();
    const token = useSelector(state => state.user.token);
    const book = useSelector(state => state.book.issuedBook);
    useEffect(() => {
        dispatch(alreadyIssuedBookMiddleware(token));
    })
    const handleSubmit = (data) => {
        submitBook(token,data);
    }
    return (
        <Table>
            <thead>
                <tr>
                    <th>
                        Book Name
                    </th>
                    <th>
                        Author Name
                    </th>
                    <th>
                        Available Book
                    </th>
                    <th>
                        Submit
                    </th>
                </tr>
            </thead>
            <tbody>
                {book.map((item) => <tr key={item.bookName}>
                    <td>{item.bookName}</td>
                    <td>{item.authorName}</td>
                    <td>{item.available}</td>
                    <td><Button variant="success" onClick={() => handleSubmit(item)}>Submit</Button></td>
                </tr>)}
            </tbody>
        </Table>
    )
}