import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { fetchListOfAgesOfUsersWith } from '../action';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  selectorLabel: {
    padding: '3px 5px',
    background: 'white',
  },
  table: {
    minWidth: 650,
  },
  TableContainer: {
    marginBottom: '50vh',
  },
}));

const AgeDemographic = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const agesState = useSelector((state) => state.ages);
  const [item, setItem] = useState('');
  const [ages, setAges] = useState([]);

  useEffect(() => {
    setAges(agesState);
  }, [agesState]);
  const itemSelectHandler = (event) => {
    const currItem = event.target.value;
    setItem(currItem);
    dispatch(fetchListOfAgesOfUsersWith({ item: currItem }));
  };
  const renderAgeData = () => {
    console.log('ages', ages);
    const ageArray = Object.keys(ages);
    return ageArray.map((age, idx) => (
      <TableRow key={`${age}-${idx}`}>
        <TableCell align='left'>{age}</TableCell>
        <TableCell align='left'>{ages[age]}</TableCell>
      </TableRow>
    ));
  };
  return (
    <div>
      <FormControl className={classes.formControl} variant='outlined'>
        <InputLabel id='item-selector_label' className={classes.selectorLabel}>
          Item
        </InputLabel>
        <Select
          labelId='item-selector_label'
          id='item-selector'
          value={item}
          onChange={itemSelectHandler}>
          <MenuItem value={'carrot'}>carrot</MenuItem>
          <MenuItem value={'grapes'}>grapes</MenuItem>
          <MenuItem value={'apple'}>apple</MenuItem>
          <MenuItem value={'cake'}>cake</MenuItem>
          <MenuItem value={'crackers'}>crackers</MenuItem>
          <MenuItem value={'chips'}>chips</MenuItem>
          <MenuItem value={'tv'}>tv</MenuItem>
          <MenuItem value={'ham'}>ham</MenuItem>
          <MenuItem value={'beef'}>beef</MenuItem>
        </Select>
      </FormControl>
      <TableContainer component={Paper} className={classes.TableContainer}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align='left'>Age</TableCell>
              <TableCell align='left'>Count</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{renderAgeData()}</TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
export default AgeDemographic;
