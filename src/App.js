import React, { useState, useEffect } from 'react';
import { Container, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { timelineData, categories, companies, availableMonths, timelineDataByMonth } from './data';
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

  // State for filters
  const [selectedMonth, setSelectedMonth] = useState(
    getInitialParamValue('month', availableMonths[0], availableMonths)
  );
  const [selectedCategory, setSelectedCategory] = useState(
    getInitialParamValue('category', 'All', categories)
  );
  const [selectedCompany, setSelectedCompany] = useState(
    getInitialParamValue('company', 'All', companies)
  );

  // Update URL when filters change
  useEffect(() => {
    const params = new URLSearchParams();
    
    if (selectedMonth !== availableMonths[0]) {
      params.set('month', selectedMonth);
    }
    
    if (selectedCategory !== 'All') {
      params.set('category', selectedCategory);
    }
    
    if (selectedCompany !== 'All') {
      params.set('company', selectedCompany);
    }
    
    // Update the URL without refreshing the page
    const newUrl = params.toString() 
      ? `${window.location.pathname}?${params.toString()}`
      : window.location.pathname;
      
    window.history.pushState({}, '', newUrl);
  }, [selectedMonth, selectedCategory, selectedCompany]);

  // Get the data for the selected month
  const monthData = timelineDataByMonth[selectedMonth] || [];

  // Filter events based on selected category and company
  const filteredEvents = monthData.filter(event => {
    const categoryMatch = selectedCategory === 'All' || event.category === selectedCategory;
    const companyMatch = selectedCompany === 'All' || event.company === selectedCompany;
    return categoryMatch && companyMatch;
  });

  // Handle filter changes
  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleCompanyChange = (event) => {
    setSelectedCompany(event.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Header />
        <MainContent>
          <Container maxWidth="lg">
            <Filters 
              categories={categories}
              companies={companies}
              selectedMonth={selectedMonth}
              selectedCategory={selectedCategory}
              selectedCompany={selectedCompany}
              onMonthChange={handleMonthChange}
              onCategoryChange={handleCategoryChange}
              onCompanyChange={handleCompanyChange}
              filteredEvents={filteredEvents}
            />
            <Timeline 
              events={filteredEvents}
              selectedMonth={selectedMonth}
              selectedCategory={selectedCategory}
              selectedCompany={selectedCompany}
            />
          </Container>
        </MainContent>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App; 