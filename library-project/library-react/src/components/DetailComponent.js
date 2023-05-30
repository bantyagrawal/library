import React, { useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { adminFetchUserMiddleware, deleteUser } from '../redux/admin/adminAction';

const DetailComponent = () => {
  const token = useSelector(state => state.admin.adminToken);
  const users = useSelector(state => state.admin.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(adminFetchUserMiddleware(token));
  }, []);

  const handleDelete = (item) => {
    deleteUser(token, item);
  }
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th className="table-primary">Student Name</th>
          <th className="table-primary">Roll Number</th>
          <th className="table-primary">Email</th>
          <th className="table-primary">Contact</th>
          <th className="table-primary">Address</th>
          <th className="table-primary">Delete</th>
        </tr>
      </thead>
      <tbody>
        {users.map((item) => (
          <tr key={item.rollNumber}>
            <td>{item.name}</td>
            <td>{item.rollNumber}</td>
            <td>{item.email}</td>
            <td>{item.contact}</td>
            <td>{item.address}</td>
            <td>
              <Button variant="danger" onClick={() => handleDelete(item)}>Delete</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default DetailComponent;
