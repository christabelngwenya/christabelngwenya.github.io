import React from 'react';
import { Box, Container, Typography, IconButton, Link } from '@mui/material';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    {
      icon: <FaGithub size={24} />,
      url: 'https://github.com/christabelngwenya',
      label: 'GitHub',
    },
    {
      icon: <FaLinkedin size={24} />,
      url: 'https://linkedin.com/in/christabelngwenya',
      label: 'LinkedIn',
    },

    {
      icon: <FaEnvelope size={24} />,
      url: 'mailto:christabelprogrammer@gmail.com',
      label: 'Email',
    },
  ];

  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        backgroundColor: 'primary.main',
        color: 'white',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              gap: 2,
              mb: 2,
            }}
          >
            {socialLinks.map((link) => (
              <IconButton
                key={link.label}
                component={Link}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                sx={{
                  color: 'white',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  },
                }}
              >
                {link.icon}
              </IconButton>
            ))}
          </Box>
          <Typography variant="body2" align="center">
            © {new Date().getFullYear()} Christabel Ngwenya. All rights reserved.
          </Typography>
          <Typography variant="body2" align="center" sx={{ opacity: 0.8 }}>
            Computer Systems Engineer | Network Specialist | Software Developer
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 