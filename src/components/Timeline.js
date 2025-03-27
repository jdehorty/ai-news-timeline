import React, { useState } from 'react';
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
const getIcon = (iconType) => {
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
      return '#3f51b5'; // Indigo
    case 'Product Launches':
      return '#2196f3'; // Blue
    case 'Research Breakthroughs':
      return '#009688'; // Teal
    case 'Corporate Partnerships':
      return '#4caf50'; // Green
    case 'Policy Regulation':
      return '#f44336'; // Red
    case 'AI Ethics Safety':
      return '#e91e63'; // Pink
    case 'Industry Analysis':
      return '#9c27b0'; // Purple
    case 'Robotics Automation':
      return '#ff9800'; // Orange
    default:
      return '#757575'; // Grey
  }
};

const Timeline = ({ events, selectedCategory, selectedCompany }) => {
  const [visibleElements, setVisibleElements] = useState({});

  // Filter events based on selected category and company
  const filteredEvents = events.filter(event => {
    const categoryMatch = selectedCategory === 'All' || event.category === selectedCategory;
    const companyMatch = selectedCompany === 'All' || event.company === selectedCompany;
    return categoryMatch && companyMatch;
  });

  const handleVisibilityChange = (isVisible, index) => {
    if (isVisible) {
      setVisibleElements(prev => ({ ...prev, [index]: true }));
    } else {
      // When element leaves viewport completely, reset its visibility state
      setVisibleElements(prev => {
        const newState = { ...prev };
        delete newState[index];
        return newState;
      });
    }
  };

  return (
    <TimelineWrapper>
      <VerticalTimeline animate={true}>
        {filteredEvents.map((event, index) => (
          <VerticalTimelineElement
            key={index}
            date={event.date}
            dateClassName="timeline-date"
            iconStyle={{ background: getCategoryColor(event.category), color: '#fff' }}
            icon={getIcon(event.icon)}
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