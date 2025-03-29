import React from 'react';
import { 
  VerticalTimeline, 
  VerticalTimelineElement 
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

// Material UI Icons
import SmartToyIcon from '@mui/icons-material/SmartToy';
import BusinessIcon from '@mui/icons-material/Business';
import ScienceIcon from '@mui/icons-material/Science';
import SecurityIcon from '@mui/icons-material/Security';
import BuildIcon from '@mui/icons-material/Build';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import HandshakeIcon from '@mui/icons-material/Handshake';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import SmartButtonIcon from '@mui/icons-material/SmartButton';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import RouteIcon from '@mui/icons-material/Route';
import EventIcon from '@mui/icons-material/Event';
import AssistantIcon from '@mui/icons-material/Assistant';
import RocketIcon from '@mui/icons-material/Rocket';
import BarChartIcon from '@mui/icons-material/BarChart';
import DescriptionIcon from '@mui/icons-material/Description';

// Styled components
import styled from 'styled-components';

const TimelineWrapper = styled.div`
  padding: 20px 0;
`;

const CategoryBadge = styled.span`
  display: inline-block;
  padding: 4px 8px;
  margin-right: 8px;
  margin-bottom: 8px;
  border-radius: 16px;
  font-size: 12px;
  font-weight: 500;
  background-color: ${props => props.color || '#e0e0e0'};
  color: white;
`;

const CompanyBadge = styled.span`
  display: inline-block;
  padding: 4px 8px;
  margin-right: 8px;
  margin-bottom: 8px;
  border-radius: 16px;
  font-size: 12px;
  font-weight: 500;
  background-color: #f5f5f5;
  color: #333;
  border: 1px solid #ddd;
`;

const TimelineDate = styled.div`
  font-size: 14px;
  color: #666;
  margin-bottom: 8px;
`;

// Map icon types to Material UI icons
const getIcon = (iconType, category) => {
  // Ensure Product Launches always use the rocket icon
  if (category === 'Product Launches') {
    return <RocketIcon />;
  }
  
  // Ensure Industry Analysis always uses the chart icon
  if (category === 'Industry Analysis') {
    return <BarChartIcon />;
  }
  
  // Ensure Policy Regulation always uses the file description icon
  if (category === 'Policy Regulation') {
    return <DescriptionIcon />;
  }
  
  // Ensure Robotics Automation always uses the precision manufacturing icon
  if (category === 'Robotics Automation') {
    return <PrecisionManufacturingIcon />;
  }
  
  switch (iconType) {
    case 'model':
      return <SmartToyIcon />;
    case 'business':
      return <BusinessIcon />;
    case 'research':
      return <ScienceIcon />;
    case 'ethics':
      return <SecurityIcon />;
    case 'tools':
      return <BuildIcon />;
    case 'newsletter':
      return <NewspaperIcon />;
    case 'partnership':
      return <HandshakeIcon />;
    case 'robotics':
      return <PrecisionManufacturingIcon />;
    case 'assistant':
      return <AssistantIcon />;
    case 'video':
      return <VideoLibraryIcon />;
    case 'privacy':
      return <PrivacyTipIcon />;
    case 'roadmap':
      return <RouteIcon />;
    case 'event':
      return <EventIcon />;
    default:
      return <SmartButtonIcon />;
  }
};

// Get color based on category
const getCategoryColor = (category) => {
  switch (category) {
    case 'Model Releases':
      return '#0078D7'; // Tech blue - technology and innovation
    case 'Product Launches':
      return '#E53935'; // Vibrant red - energy and excitement
    case 'Research Breakthroughs':
      return '#8E24AA'; // Purple - creativity and discovery
    case 'Corporate Partnerships':
      return '#00796B'; // Teal - cooperation and stability
    case 'Policy Regulation':
      return '#3F51B5'; // Indigo - authority and structure with elegance
    case 'AI Ethics Safety':
      return '#FFC107'; // Amber/Yellow - caution and safety
    case 'Industry Analysis':
      return '#00ACC1'; // Cyan - data and clarity
    case 'Robotics Automation':
      return '#78909C'; // Steel blue-gray - machinery and automation
    default:
      return '#757575'; // Grey
  }
};

const Timeline = ({ events, selectedCategories, selectedCompanies }) => {
  // No need to filter events again as they are already filtered in App.js
  // We just use the events passed directly

  const handleVisibilityChange = (isVisible, index) => {
    // This function is used in onVisibilityChange but doesn't need to update state
    // as visibleElements isn't being used elsewhere
  };

  return (
    <TimelineWrapper>
      <VerticalTimeline animate={true}>
        {events.map((event, index) => (
          <VerticalTimelineElement
            key={index}
            date={event.date}
            dateClassName="timeline-date"
            iconStyle={{ background: getCategoryColor(event.category), color: '#fff' }}
            icon={getIcon(event.icon, event.category)}
            onVisibilityChange={(isVisible) => handleVisibilityChange(isVisible, index)}
            intersectionObserverProps={{
              threshold: 0,
              rootMargin: '-50px 0px -50px 0px'
            }}
          >
            <h3 className="vertical-timeline-element-title">{event.title}</h3>
            <TimelineDate>{event.date}</TimelineDate>
            <p>{event.description}</p>
            <div>
              <CategoryBadge color={getCategoryColor(event.category)}>
                {event.category}
              </CategoryBadge>
              <CompanyBadge>{event.company}</CompanyBadge>
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </TimelineWrapper>
  );
};

export default Timeline; 