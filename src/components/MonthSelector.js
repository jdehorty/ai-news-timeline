import React from 'react';
import { FormControl, InputLabel, Select, MenuItem, Box } from '@mui/material';
import { availableMonths } from '../data/timelineData';

const MonthSelector = ({ selectedMonth, onMonthChange }) => {
  return (
    <Box sx={{ minWidth: 200, mb: 2 }}>
      <FormControl fullWidth>
        <InputLabel id="month-select-label">Month</InputLabel>
        <Select
          labelId="month-select-label"
          id="month-select"
          value={selectedMonth}
          label="Month"
          onChange={onMonthChange}
        >
          {availableMonths.map((month) => (
            <MenuItem key={month} value={month}>
              {month}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default MonthSelector; 