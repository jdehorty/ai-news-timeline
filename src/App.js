import React, { useState, useEffect } from 'react';
import { Container, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import { mantineTheme } from './mantine-theme';
import { categories, companies, availableMonths, timelineDataByMonth } from './data';
import Header from './components/Header';
import Footer from './components/Footer';
import Timeline from './components/Timeline';
import Filters from './components/Filters';
import styled from 'styled-components';

// Create a theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 500,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 500,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
  },
});

const MainContent = styled.main`
  padding: 40px 0;
`;

function App() {
  // Get initial values from URL parameters
  const getInitialParamValue = (paramName, defaultValue, allowedValues) => {
    const params = new URLSearchParams(window.location.search);
    const paramValue = params.get(paramName);
    
    if (paramValue && allowedValues.includes(paramValue)) {
      return paramValue;
    }
    return defaultValue;
  };

  // Get initial array values from URL parameters (comma-separated)
  const getInitialArrayParamValue = (paramName, allowedValues) => {
    const params = new URLSearchParams(window.location.search);
    const paramValue = params.get(paramName);
    
    if (paramValue) {
      const values = paramValue.split(',');
      // Only include values that are in the allowedValues array
      return values.filter(value => allowedValues.includes(value));
    }
    return [];
  };

  // State for filters
  const [selectedMonth, setSelectedMonth] = useState(
    getInitialParamValue('month', availableMonths[availableMonths.length - 1], availableMonths)
  );
  
  // selectedCategories is now an array. Empty array => show all categories.
  const [selectedCategories, setSelectedCategories] = useState(
    getInitialArrayParamValue('categories', categories.filter(c => c !== 'All'))
  );
  
  // selectedCompanies is now an array. Empty array => show all companies.
  const [selectedCompanies, setSelectedCompanies] = useState(
    getInitialArrayParamValue('companies', companies.filter(c => c !== 'All'))
  );

  // Update URL when filters change
  useEffect(() => {
    const params = new URLSearchParams();
    
    if (selectedMonth !== availableMonths[availableMonths.length - 1]) {
      params.set('month', selectedMonth);
    }
    
    if (selectedCategories.length > 0) {
      params.set('categories', selectedCategories.join(','));
    }
    
    if (selectedCompanies.length > 0) {
      params.set('companies', selectedCompanies.join(','));
    }
    
    // Update the URL without refreshing the page
    const newUrl = params.toString() 
      ? `${window.location.pathname}?${params.toString()}`
      : window.location.pathname;
      
    window.history.pushState({}, '', newUrl);
  }, [selectedMonth, selectedCategories, selectedCompanies]);

  // Get the data for the selected month
  const monthData = selectedMonth === 'All' 
    ? Object.values(timelineDataByMonth).flat() // Use all months data when "All" is selected
    : timelineDataByMonth[selectedMonth] || [];

  // -- FILTERING LOGIC FOR MULTIPLE SELECTIONS --
  const filteredEvents = monthData.filter((event) => {
    // If selectedCategories is empty => match everything, else must match at least one category
    const categoryMatch = 
      selectedCategories.length === 0 || 
      selectedCategories.includes(event.category);

    // If selectedCompanies is empty => match everything, else must match at least one company
    const companyMatch = 
      selectedCompanies.length === 0 || 
      selectedCompanies.includes(event.company);

    return categoryMatch && companyMatch;
  });

  // Handlers
  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value || 'All');
  };

  // Handle array of categories
  const handleCategoryChange = (categoriesArray) => {
    setSelectedCategories(categoriesArray);
  };

  // Handle array of companies
  const handleCompanyChange = (companiesArray) => {
    setSelectedCompanies(companiesArray);
  };

  return (
    <MantineProvider theme={mantineTheme}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
          <Header />
          <MainContent>
            <Container maxWidth="lg">
              <Filters 
                categories={categories.filter(c => c !== 'All')}
                companies={companies.filter(c => c !== 'All')}
                selectedMonth={selectedMonth}
                selectedCategories={selectedCategories}
                selectedCompanies={selectedCompanies}
                onMonthChange={handleMonthChange}
                onCategoryChange={handleCategoryChange}
                onCompanyChange={handleCompanyChange}
                filteredEvents={filteredEvents}
              />
              <Timeline 
                events={filteredEvents}
                selectedMonth={selectedMonth}
                selectedCategories={selectedCategories}
                selectedCompanies={selectedCompanies}
              />
            </Container>
          </MainContent>
          <Footer />
        </div>
      </ThemeProvider>
    </MantineProvider>
  );
}

export default App; 