import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllUsers } from '../action';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  tableCOntainer: {
    marginBottom: '50px',
  },
});
const AllUsers = () => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.users);
  const classes = useStyles();

  const [users, setUsers] = useState([]);
  useEffect(() => {
    dispatch(fetchAllUsers());
  }, []);
  useEffect(() => {
    setUsers(userState);
  }, [userState]);
  const renderUserData = () => {
    return users.map((user, idx) => (
      <TableRow key={`${user.username}-${idx}`}>
        <TableCell align='left'>{user.username}</TableCell>
        <TableCell align='left'>{user.age}</TableCell>
      </TableRow>
    ));
  };
  return (
    <TableContainer component={Paper} className={classes.tableCOntainer}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell align='left'>Username</TableCell>
            <TableCell align='left'>Age</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{renderUserData()}</TableBody>
      </Table>
    </TableContainer>
  );
};

export default AllUsers;
