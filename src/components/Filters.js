import React from 'react';
import { Paper, Typography, Grid, useTheme as useMuiTheme } from '@mui/material';
import {
  MultiSelect,
  Select,
  Group,
  Text,
  Tooltip,
  ActionIcon,
  Badge
} from '@mantine/core';
import {
  Calendar,
  FilterOff,
  Rocket,
  Building,
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
  Tool,


} from 'tabler-icons-react';
// Material UI Icons for category badges
import SmartToyIcon from '@mui/icons-material/SmartToy';
import RocketIcon from '@mui/icons-material/Rocket';
import ScienceIcon from '@mui/icons-material/Science';
import HandshakeIcon from '@mui/icons-material/Handshake';
import DescriptionIcon from '@mui/icons-material/Description';
import SecurityIcon from '@mui/icons-material/Security';
import BarChartIcon from '@mui/icons-material/BarChart';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
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
  gap: 10px;
  margin-top: 16px;
`;

const EventCount = styled(Text)`
  margin-top: 16px;
  font-style: italic;
  opacity: 0.7;
  font-size: 0.9rem;
`;

// Available months array for dropdown
const availableMonths = [
  "All",
  "February 2025",
  "March 2025"
];

// Custom wrapper for Material UI icon to match tabler-icons style
const MuiIconWrapper = ({ children, size = 16, style = {} }) => (
  <div style={{
    width: size,
    height: size,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    ...style
  }}>
    {children}
  </div>
);

// Smaller icon wrapper specifically for badges
const BadgeIconWrapper = ({ children, style = {} }) => (
  <div style={{
    width: 14,
    height: 14,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    ...style
  }}>
    {children}
  </div>
);

const Filters = ({
  categories,
  companies,
  selectedCategories,
  selectedCompanies,
  selectedMonth,
  onCategoryChange,
  onCompanyChange,
  onMonthChange,
  filteredEvents
}) => {
  const muiTheme = useMuiTheme();

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

  // Category icons mapping with intuitive colors based on color theory - using Material UI icons
  const categoryIcons = {
    "Model Releases": <MuiIconWrapper style={{ color: '#0078D7' }}><SmartToyIcon fontSize="small" style={{ color: '#0078D7' }} /></MuiIconWrapper>, // Tech blue - technology and innovation
    "Product Launches": <MuiIconWrapper style={{ color: '#E53935' }}><RocketIcon fontSize="small" style={{ color: '#E53935' }} /></MuiIconWrapper>, // Vibrant red - energy and excitement
    "Research Breakthroughs": <MuiIconWrapper style={{ color: '#8E24AA' }}><ScienceIcon fontSize="small" style={{ color: '#8E24AA' }} /></MuiIconWrapper>, // Purple - creativity and discovery
    "Corporate Partnerships": <MuiIconWrapper style={{ color: '#00796B' }}><HandshakeIcon fontSize="small" style={{ color: '#00796B' }} /></MuiIconWrapper>, // Teal - cooperation and stability
    "Policy Regulation": <MuiIconWrapper style={{ color: '#263238' }}><DescriptionIcon fontSize="small" style={{ color: '#263238' }} /></MuiIconWrapper>, // Dark slate - authority and structure
    "AI Ethics Safety": <MuiIconWrapper style={{ color: '#FFC107' }}><SecurityIcon fontSize="small" style={{ color: '#FFC107' }} /></MuiIconWrapper>, // Amber/Yellow - caution and safety
    "Industry Analysis": <MuiIconWrapper style={{ color: '#00ACC1' }}><BarChartIcon fontSize="small" style={{ color: '#00ACC1' }} /></MuiIconWrapper>, // Cyan - data and clarity
    "Robotics Automation": <MuiIconWrapper style={{ color: '#78909C' }}><PrecisionManufacturingIcon fontSize="small" style={{ color: '#78909C' }} /></MuiIconWrapper> // Steel blue-gray - machinery and automation
  };

  // Company icons mapping with standardized colors
  const companyIcons = {
    "OpenAI": <Brain size={14} style={{ color: '#10a37f' }} />,
    "Google": <BrandGoogle size={14} style={{ color: '#4285f4' }} />,
    "Anthropic": <Brain size={14} style={{ color: '#6b48ff' }} />,
    "xAI": <Rocket size={14} style={{ color: '#333333', opacity: 0.8 }} />,
    "Mistral AI": <Brain size={14} style={{ color: '#4285f4' }} />,
    "ByteDance": <Users size={14} style={{ color: '#333333' }} />,
    "Meta": <BrandFacebook size={14} style={{ color: '#1877f2' }} />,
    "Amazon": <BrandAmazon size={14} style={{ color: '#ff9900' }} />,
    "DeepMind": <Brain size={14} style={{ color: '#ea4335' }} />,
    "Figure": <Tool size={14} style={{ color: '#6c757d' }} />,
    "LangChain": <Code size={14} style={{ color: '#00C49A' }} />,
    "LessWrong": <Article size={14} style={{ color: '#7b8794' }} />,
    "Sourcegraph": <Code size={14} style={{ color: '#00b4f2' }} />,
    "Descript": <Photo size={14} style={{ color: '#9146ff' }} />,
    "Microsoft": <BrandWindows size={14} style={{ color: '#00a4ef' }} />,
    "Apple": <BrandApple size={14} style={{ color: '#A2AAAD' }} />,
    "Stability AI": <Photo size={14} style={{ color: '#b71c1c' }} />,
    "Various": <Settings size={14} style={{ color: '#6c757d' }} />
  };

  // Category color mapping for badges
  const categoryColors = {
    "Model Releases": "indigo",
    "Product Launches": "red",
    "Research Breakthroughs": "grape",
    "Corporate Partnerships": "teal",
    "Policy Regulation": "gray",
    "AI Ethics Safety": "yellow",
    "Industry Analysis": "cyan",
    "Robotics Automation": "indigo"
  };

  // Handler to reset all filters to default values
  const handleClearFilters = () => {
    onMonthChange({ target: { value: 'All' } });
    onCategoryChange([]);
    onCompanyChange([]);
  };

  // Check if any filters are actively applied
  const areFiltersActive = 
    selectedMonth !== 'All' ||
    selectedCategories.length > 0 ||
    selectedCompanies.length > 0;

  // Prepare data for dropdowns with icons
  const categoryData = categories.map(cat => ({
    value: cat,
    label: cat,
    leftSection: categoryIcons[cat]
  }));

  const companyData = companies.map(comp => ({
    value: comp,
    label: comp,
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
            leftSection={<Calendar size={14} style={{ opacity: 0.5 }} />}
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
            onChange={onCategoryChange}
            searchable
            clearable
            checkIconPosition="right"
            comboboxProps={{ shadow: 'md' }}
            renderOption={({ option, checked }) => (
              <Group gap="xs">
                {option.leftSection}
                <div>{option.label}</div>
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
            onChange={onCompanyChange}
            searchable
            clearable
            checkIconPosition="right"
            comboboxProps={{ shadow: 'md' }}
            renderOption={({ option, checked }) => (
              <Group gap="xs">
                {option.leftSection}
                <div>{option.label}</div>
              </Group>
            )}
          />
        </Grid>
      </Grid>

      <EventCount c="dimmed">
        Showing {totalEvents} events
      </EventCount>

      {/* Show category stats only if no specific categories are selected */}
      {selectedCategories.length === 0 && Object.entries(categoryStats).length > 0 && (
        <StatsContainer>
          {Object.entries(categoryStats).map(([category, count]) => {
            // Special handling for Corporate Partnerships
            const iconToRender = category === "Corporate Partnerships"
              ? <BadgeIconWrapper style={{ color: '#00796B' }}><HandshakeIcon fontSize="small" style={{ color: '#00796B' }} /></BadgeIconWrapper>
              : <BadgeIconWrapper style={{ color: categoryIcons[category]?.props?.style?.color }}>
                {categoryIcons[category]?.props?.children ||
                  <DescriptionIcon fontSize="small" style={{ color: '#263238' }} />}
              </BadgeIconWrapper>;

            return (
              <Badge
                key={category}
                size="md"
                radius="sm"
                variant="light"
                gradient={undefined}
                color={categoryColors[category] || "gray"}
                leftSection={iconToRender}
                styles={{
                  root: {
                    paddingLeft: '10px',
                    paddingRight: '12px',
                    paddingTop: '6px',
                    paddingBottom: '6px',
                    cursor: 'pointer',
                    fontWeight: 'normal'
                  },
                  section: {
                    marginRight: '8px'
                  },
                  label: {
                    fontSize: '0.85rem'
                  }
                }}
                onClick={() => {
                  onCategoryChange([category]);
                }}
              >
                {category}: {count}
              </Badge>
            );
          })}
        </StatsContainer>
      )}

      {/* Show company stats only if no specific companies are selected */}
      {selectedCompanies.length === 0 && Object.entries(companyStats).length > 0 && (
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
                    paddingLeft: '10px',
                    paddingRight: '12px',
                    paddingTop: '6px',
                    paddingBottom: '6px',
                    cursor: 'pointer'
                  },
                  section: {
                    marginRight: '8px'
                  },
                  label: {
                    fontSize: '0.85rem'
                  }
                }}
                onClick={() => {
                  onCompanyChange([company]);
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

export default Filters; 