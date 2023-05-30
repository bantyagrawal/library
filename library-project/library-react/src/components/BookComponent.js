import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBookMiddleware, issuedBook } from '../redux/book/bookAction';
import { Button, Table } from 'react-bootstrap';
export const BookComponent = () => {
  const book = useSelector(state => state.book.book);
  const token = useSelector(state => state.user.token);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBookMiddleware(token));
  }, []);

  const handleClick = (data) => {
    issuedBook(token,data);
  }
  return (
    <>
       <Table striped bordered hover>
  <thead>
    <tr>
      <th className="table-primary">Book Name</th>
      <th className="table-primary">Author Name</th>
      <th className="table-primary">Status</th>
      <th className="table-primary">Issue</th>
    </tr>
  </thead>
  <tbody>
    {book.map((item) => (
      <tr key={item.bookName}>
        <td>{item.bookName}</td>
        <td>{item.authorName}</td>
        <td>{item.issued ? 'Already Issued' : 'Not Issued'}</td>
        <td>
          <Button variant="success" disabled={item.issued} onClick={() => handleClick(item)}>Issue</Button>
        </td>
      </tr>
    ))}
  </tbody>
</Table>

    </>
  )
}