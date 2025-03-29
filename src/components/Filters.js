import React, { useState, useRef, useEffect } from 'react';
import { Paper, Typography, Grid, useTheme as useMuiTheme } from '@mui/material';
import { 
  MultiSelect, 
  Select,
  Group, 
  Text, 
  Tooltip, 
  ActionIcon,
  Badge,
  Pill,
  Combobox
} from '@mantine/core';
import { 
  Calendar, 
  FilterOff, 
  Robot, 
  Rocket, 
  Flask, 
  Building, 
  FileDescription, 
  Shield, 
  ChartBar,
  DeviceDesktop,
  BrandGoogle,
  BrandFacebook,
  BrandApple,
  BrandAmazon,
  BrandWindows,
  Brain,
  Code,
  Article,
  Settings,
  Users,
  Photo,
  Tool
} from 'tabler-icons-react';
import styled from 'styled-components';

// Styled components
const FiltersContainer = styled(Paper)`
  margin-bottom: 30px;
  padding: 24px;
  border-radius: 10px;
  background-color: #fcfcfc;
  box-shadow: 0 1px 4px rgba(0,0,0,0.04);
`;

const StatsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 16px;
`;

const EventCount = styled(Text)`
  margin-top: 16px;
  font-style: italic;
  opacity: 0.7;
  font-size: 0.9rem;
`;

// For Product Launches category
const ProductLaunchesTag = ({ label, onRemove, classNames, ...others }) => (
  <div className={classNames?.value} {...others}>
    <span style={{ display: 'flex', alignItems: 'center' }}>
      <span style={{ marginRight: '5px' }}>🚀</span> {/* Simple emoji as a fallback */}
      {label}
    </span>
    <button className={classNames?.closeButton} onClick={onRemove} />
  </div>
);

// For Industry Analysis category
const IndustryAnalysisTag = ({ label, onRemove, classNames, ...others }) => (
  <div className={classNames?.value} {...others}>
    <span style={{ display: 'flex', alignItems: 'center' }}>
      <span style={{ marginRight: '5px' }}>📊</span> {/* Simple emoji as a fallback */}
      {label}
    </span>
    <button className={classNames?.closeButton} onClick={onRemove} />
  </div>
);

// Map categories to emoji
const categoryEmojis = {
  "Model Releases": "💻",
  "Product Launches": "🚀",
  "Research Breakthroughs": "🧪",
  "Corporate Partnerships": "🤝",
  "Policy Regulation": "📜",
  "AI Ethics Safety": "🛡️",
  "Industry Analysis": "📊",
  "Robotics Automation": "🦾"
};

// Map companies to emoji
const companyEmojis = {
  "OpenAI": "🧠",
  "Google": "🔍",
  "Anthropic": "🧠",
  "xAI": "🚀",
  "Mistral AI": "🧠",
  "ByteDance": "👥",
  "Meta": "👤",
  "Amazon": "📦",
  "DeepMind": "🧠",
  "Figure": "🤖",
  "LangChain": "⛓️",
  "LessWrong": "📝",
  "Sourcegraph": "🔍",
  "Descript": "🎙️",
  "Microsoft": "🪟",
  "Apple": "🍎",
  "Stability AI": "🖼️",
  "Various": "🔄"
};

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
  const muiTheme = useMuiTheme();
  
  // State for multi-select categories and companies
  const [selectedCategories, setSelectedCategories] = useState(
    selectedCategory === 'All' ? [] : [selectedCategory]
  );
  const [selectedCompanies, setSelectedCompanies] = useState(
    selectedCompany === 'All' ? [] : [selectedCompany]
  );

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

  // Category icons mapping with intuitive colors based on color theory
  const categoryIcons = {
    "Model Releases": <DeviceDesktop size={14} style={{color: '#0078D7'}} />, // Tech blue - represents technology and innovation
    "Product Launches": <Rocket size={14} style={{color: '#E53935'}} />, // Vibrant red - represents energy and excitement
    "Research Breakthroughs": <Flask size={14} style={{color: '#8E24AA'}} />, // Purple - represents creativity and discovery
    "Corporate Partnerships": <Building size={14} style={{color: '#00796B'}} />, // Teal - represents cooperation and stability
    "Policy Regulation": <FileDescription size={14} style={{color: '#263238'}} />, // Dark slate - represents authority and structure
    "AI Ethics Safety": <Shield size={14} style={{color: '#FFC107'}} />, // Amber/Yellow - represents caution and safety
    "Industry Analysis": <ChartBar size={14} style={{color: '#00ACC1'}} />, // Cyan - represents data and clarity
    "Robotics Automation": <Tool size={14} style={{color: '#78909C'}} /> // Steel blue-gray - represents machinery and automation
  };

  // Company icons mapping with standardized colors
  const companyIcons = {
    "OpenAI": <Brain size={14} style={{color: '#10a37f'}} />,
    "Google": <BrandGoogle size={14} style={{color: '#4285f4'}} />,
    "Anthropic": <Brain size={14} style={{color: '#6b48ff'}} />,
    "xAI": <Rocket size={14} style={{color: '#333333', opacity: 0.8}} />,
    "Mistral AI": <Brain size={14} style={{color: '#4285f4'}} />,
    "ByteDance": <Users size={14} style={{color: '#333333'}} />,
    "Meta": <BrandFacebook size={14} style={{color: '#1877f2'}} />,
    "Amazon": <BrandAmazon size={14} style={{color: '#ff9900'}} />,
    "DeepMind": <Brain size={14} style={{color: '#ea4335'}} />,
    "Figure": <Robot size={14} style={{color: '#6c757d'}} />,
    "LangChain": <Code size={14} style={{color: '#00C49A'}} />,
    "LessWrong": <Article size={14} style={{color: '#7b8794'}} />,
    "Sourcegraph": <Code size={14} style={{color: '#00b4f2'}} />,
    "Descript": <Photo size={14} style={{color: '#9146ff'}} />,
    "Microsoft": <BrandWindows size={14} style={{color: '#00a4ef'}} />,
    "Apple": <BrandApple size={14} style={{color: '#A2AAAD'}} />,
    "Stability AI": <Photo size={14} style={{color: '#b71c1c'}} />,
    "Various": <Settings size={14} style={{color: '#6c757d'}} />
  };

  // Category color mapping for badges
  const categoryColors = {
    "Model Releases": "blue",
    "Product Launches": "red",
    "Research Breakthroughs": "grape",
    "Corporate Partnerships": "teal",
    "Policy Regulation": "gray",
    "AI Ethics Safety": "yellow",
    "Industry Analysis": "cyan", 
    "Robotics Automation": "indigo"
  };

  // Handle multi-select category change
  const handleCategoryMultiChange = (values) => {
    setSelectedCategories(values);
    // If no categories selected or "All" is selected, set filter to "All"
    if (values.length === 0) {
      onCategoryChange({ target: { value: 'All' } });
    } else {
      // Currently we're only supporting single selection in the filter logic
      onCategoryChange({ target: { value: values[0] } });
    }
  };

  // Handle multi-select company change
  const handleCompanyMultiChange = (values) => {
    setSelectedCompanies(values);
    // If no companies selected or "All" is selected, set filter to "All"
    if (values.length === 0) {
      onCompanyChange({ target: { value: 'All' } });
    } else {
      // Currently we're only supporting single selection in the filter logic
      onCompanyChange({ target: { value: values[0] } });
    }
  };

  // Handler to reset all filters to "All"
  const handleClearFilters = () => {
    onMonthChange({ target: { value: 'All' } });
    onCategoryChange({ target: { value: 'All' } });
    onCompanyChange({ target: { value: 'All' } });
    setSelectedCategories([]);
    setSelectedCompanies([]);
  };

  // Check if any filters are actively applied
  const areFiltersActive = selectedMonth !== 'All' || 
                           selectedCategory !== 'All' || 
                           selectedCompany !== 'All';

  // Prepare data for dropdowns with icons
  const categoryData = categories
    .filter(cat => cat !== 'All')
    .map(cat => ({ 
      value: cat, 
      label: `${categoryEmojis[cat] || ''} ${cat}`,
      leftSection: categoryIcons[cat]
    }));

  const companyData = companies
    .filter(comp => comp !== 'All')
    .map(comp => ({ 
      value: comp, 
      label: `${companyEmojis[comp] || ''} ${comp}`,
      leftSection: companyIcons[comp] || <Building size={14} />
    }));

  return (
    <FiltersContainer elevation={0}>
      <Group justify="space-between" align="center" mb="md">
        <Typography 
          variant="h5" 
          component="h2" 
          sx={{ 
            fontSize: '1.25rem',
            fontWeight: 500,
            color: muiTheme.palette.primary.main,
            margin: 0
          }}
        >
          Filter Events
        </Typography>
        
        {areFiltersActive && (
          <Tooltip label="Clear all filters">
            <ActionIcon 
              variant="subtle" 
              color="gray" 
              onClick={handleClearFilters}
              aria-label="Clear filters"
            >
              <FilterOff size={16} />
            </ActionIcon>
          </Tooltip>
        )}
      </Group>
      
      <Grid container spacing={2.5}>
        {/* Month Selector */}
        <Grid item xs={12} sm={4}>
          <Select
            placeholder="Select month"
            label="Month"
            leftSection={<Calendar size={14} style={{opacity: 0.5}} />}
            data={availableMonths.map(month => ({ value: month, label: month }))}
            value={selectedMonth}
            onChange={(value) => onMonthChange({ target: { value: value || 'All' } })}
            searchable
            clearable
            comboboxProps={{ shadow: 'md' }}
          />
        </Grid>

        {/* Category Multi-Select with icons */}
        <Grid item xs={12} sm={4}>
          <MultiSelect
            placeholder="Select categories"
            label="Category"
            data={categoryData}
            value={selectedCategories}
            onChange={handleCategoryMultiChange}
            searchable
            clearable
            checkIconPosition="right"
            comboboxProps={{ shadow: 'md' }}
            renderOption={({ option, checked }) => (
              <Group gap="xs">
                {option.leftSection}
                <div>{option.label.split(' ').slice(1).join(' ')}</div>
              </Group>
            )}
          />
        </Grid>

        {/* Company Multi-Select with icons */}
        <Grid item xs={12} sm={4}>
          <MultiSelect
            placeholder="Select companies"
            label="Company"
            data={companyData}
            value={selectedCompanies}
            onChange={handleCompanyMultiChange}
            searchable
            clearable
            checkIconPosition="right"
            comboboxProps={{ shadow: 'md' }}
            renderOption={({ option, checked }) => (
              <Group gap="xs">
                {option.leftSection}
                <div>{option.label.split(' ').slice(1).join(' ')}</div>
              </Group>
            )}
          />
        </Grid>
      </Grid>

      <EventCount c="dimmed">
        Showing {totalEvents} events
      </EventCount>
      
      {selectedCategory === 'All' && Object.entries(categoryStats).length > 0 && (
        <StatsContainer>
          {Object.entries(categoryStats).map(([category, count]) => (
            <Badge 
              key={category} 
              size="md" 
              radius="sm" 
              variant="light"
              color={categoryColors[category] || "gray"}
              leftSection={categoryIcons[category] || <FileDescription size={14} style={{color: '#263238'}} />}
              styles={{
                root: {
                  paddingLeft: '8px'
                },
                section: {
                  marginRight: '4px'
                }
              }}
            >
              {category}: {count}
            </Badge>
          ))}
        </StatsContainer>
      )}
      
      {selectedCompany === 'All' && Object.entries(companyStats).length > 0 && (
        <StatsContainer>
          {Object.entries(companyStats)
            .sort((a, b) => b[1] - a[1]) // Sort by count descending
            .slice(0, 5) // Show top 5
            .map(([company, count]) => (
              <Badge 
                key={company} 
                size="md" 
                radius="sm" 
                variant="light"
                color="indigo"
                leftSection={companyIcons[company] || <Building size={14} />}
                styles={{
                  root: {
                    paddingLeft: '8px'
                  },
                  section: {
                    marginRight: '4px'
                  }
                }}
              >
                {company}: {count}
              </Badge>
            ))}
        </StatsContainer>
      )}
    </FiltersContainer>
  );
};

// Available months array for dropdown
const availableMonths = [
  "All",
  "February 2025",
  "March 2025"
];

export default Filters; 