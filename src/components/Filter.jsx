import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ value, onChangeFilterValue }) => {
  return (
    <div>
      <input onChange={onChangeFilterValue} value={value}></input>
    </div>
  );
};
export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilterValue: PropTypes.func,
};
