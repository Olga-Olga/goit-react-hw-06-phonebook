import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterChanges } from 'redux/slice';

const Filter = ({ value, onChangeFilterValue }) => {
  const dispatch = useDispatch();
  // useSelector();

  onChangeFilterValue = e => {
    dispatch(filterChanges(e.target.value));
  };

  return (
    <div>
      <input onChange={onChangeFilterValue} value={value}></input>
    </div>
  );
};
export default Filter;
