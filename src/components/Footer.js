import React from 'react';
import { Box, Typography, Link, Container } from '@mui/material';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #f5f5f5;
  padding: 24px 0;
  margin-top: 40px;
  border-top: 1px solid #e0e0e0;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="body2" color="text.secondary" align="center">
            {'© '}
            {new Date().getFullYear()}
            {' AI News Timeline. All rights reserved.'}
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 3, mt: { xs: 2, md: 0 } }}>
            <Link href="#" color="inherit" underline="hover">
              Privacy Policy
            </Link>
            <Link href="#" color="inherit" underline="hover">
              Terms of Service
            </Link>
            <Link href="#" color="inherit" underline="hover">
              Contact
            </Link>
          </Box>
        </Box>
        
        <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 2 }}>
          Data sourced from AI newsletters - February 2025
        </Typography>
      </Container>
    </FooterContainer>
  );
};

export default Footer; 