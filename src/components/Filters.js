import React from 'react';
import { 
  FormControl, 
  InputLabel, 
  Select, 
  MenuItem, 
  Box,
  Chip,
  Typography,
  Grid
} from '@mui/material';
import styled from 'styled-components';
import MonthSelector from './MonthSelector';

const FiltersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 30px;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const StatsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 15px;
`;

const EventCount = styled(Typography)`
  margin-top: 15px;
  font-style: italic;
`;

const Filters = ({ 
  categories, 
  companies, 
  selectedCategory, 
  selectedCompany, 
  selectedMonth,
  onCategoryChange, 
  onCompanyChange,
  onMonthChange,
  filteredEvents
}) => {
  // Calculate stats
  const totalEvents = filteredEvents.length;
  
  // Count events by category
  const categoryStats = filteredEvents.reduce((acc, event) => {
    acc[event.category] = (acc[event.category] || 0) + 1;
    return acc;
  }, {});
  
  // Count events by company
  const companyStats = filteredEvents.reduce((acc, event) => {
    acc[event.company] = (acc[event.company] || 0) + 1;
    return acc;
  }, {});

  return (
    <FiltersContainer>
      <Typography variant="h5" component="h2" gutterBottom>
        Filter Events
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <MonthSelector 
            selectedMonth={selectedMonth}
            onMonthChange={onMonthChange}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box sx={{ minWidth: 200 }}>
            <FormControl fullWidth>
              <InputLabel id="category-select-label">Category</InputLabel>
              <Select
                labelId="category-select-label"
                id="category-select"
                value={selectedCategory}
                label="Category"
                onChange={onCategoryChange}
              >
                {categories.map((category) => (
                  <MenuItem key={category} value={category}>
                    {category}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box sx={{ minWidth: 200 }}>
            <FormControl fullWidth>
              <InputLabel id="company-select-label">Company</InputLabel>
              <Select
                labelId="company-select-label"
                id="company-select"
                value={selectedCompany}
                label="Company"
                onChange={onCompanyChange}
              >
                {companies.map((company) => (
                  <MenuItem key={company} value={company}>
                    {company}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </Grid>
      </Grid>
      <EventCount variant="body2" color="textSecondary">
        Showing {totalEvents} events
      </EventCount>
      
      {selectedCategory === 'All' && (
        <StatsContainer>
          {Object.entries(categoryStats).map(([category, count]) => (
            <Chip 
              key={category} 
              label={`${category}: ${count}`} 
              size="small" 
              variant="outlined" 
            />
          ))}
        </StatsContainer>
      )}
      
      {selectedCompany === 'All' && (
        <StatsContainer>
          {Object.entries(companyStats)
            .sort((a, b) => b[1] - a[1]) // Sort by count descending
            .slice(0, 5) // Show top 5
            .map(([company, count]) => (
              <Chip 
                key={company} 
                label={`${company}: ${count}`} 
                size="small" 
                variant="outlined" 
              />
            ))}
        </StatsContainer>
      )}
    </FiltersContainer>
  );
};

export default Filters; 