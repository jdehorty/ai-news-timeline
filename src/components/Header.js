import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import GitHubIcon from '@mui/icons-material/GitHub';
import InfoIcon from '@mui/icons-material/Info';
import styled from 'styled-components';

const StyledAppBar = styled(AppBar)`
  background: linear-gradient(90deg, #3f51b5 0%, #2196f3 100%);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Header = () => {
  return (
    <StyledAppBar position="static">
      <Toolbar>
        <LogoContainer>
          <SmartToyIcon fontSize="large" />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            AI News Timeline
          </Typography>
        </LogoContainer>
        
        <Box sx={{ flexGrow: 1 }} />
        
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button 
            color="inherit" 
            startIcon={<InfoIcon />}
            onClick={() => window.open('https://github.com/jdehorty/ai-news-timeline', '_blank')}
          >
            About
          </Button>
          <Button 
            color="inherit" 
            startIcon={<GitHubIcon />}
            onClick={() => window.open('https://github.com/jdehorty/ai-news-timeline', '_blank')}
          >
            GitHub
          </Button>
        </Box>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Header; 