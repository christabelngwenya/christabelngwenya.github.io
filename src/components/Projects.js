import React from 'react';
import { Box, Typography, Container, Grid, Paper, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaCertificate, FaWater, FaExclamationTriangle, FaLeaf } from 'react-icons/fa';

const Projects = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const projects = [
    {
      title: "Safe Sphere",
      description: "A comprehensive web-based safety application for female students, addressing gender-based violence and harassment in tertiary institutions.",
      icon: <FaShieldAlt size={40} />,
      features: [
        "Counseling Services Booking",
        "Anonymous Abuse Reporting",
        "Whistleblowing Portal",
        "Panic Button Integration",
        "Privacy-focused Design"
      ],
      technologies: ["React.js + vite", "Node.js", "PostgreSQL", "JavaScript"]
    },
    {
      title: "Digital Certificate Issuance System",
      description: "A web-based platform for city councils to generate and manage digital certificates, replacing outdated handwritten systems.",
      icon: <FaCertificate size={40} />,
      features: [
        "Automated Certificate Templates",
        "Digital Record Keeping",
        "Fraud Prevention",
        "Efficient Processing"
      ],
      technologies: ["Laravel", "PHP", "mysql", "HTML5", "CSS3", "JavaScript"]
    },
    {
      title: "Smart Water Management System",
      description: "An IoT-based system for proactive leak detection and real-time water management with data visualization.",
      icon: <FaWater size={40} />,
      features: [
        "Real-time Monitoring",
        "Leak Detection Alerts",
        "Data Visualization Dashboard",
        "Maintenance Response System"
      ],
      technologies: ["react.js", "Node.js", "MySQL","Leaflet","Chart.js", "Microcontrollers", "Sensors"]
    },
    {
      title: "Web-Based Leak Reporting Form",
      description: "A responsive web application for community members to report water leaks and maintenance issues.",
      icon: <FaExclamationTriangle size={40} />,
      features: [
        "Responsive Design",
        "Google Sheets Integration",
        "Report Tracking System",
        "Citizen-Government Collaboration"
      ],
      technologies: ["React.js", "Node.js", "MYSQL"]
    },
    {
      title: "EcoGuard",
      description: "A community-powered environmental monitoring platform that uses real-time reporting and gamification to address water waste, pollution, and resource depletion.",
      icon: <FaLeaf size={40} />,
      features: [
        "GPS-tagged issue reporting (leaks/dumping/drains)",
        "Public dashboard with live issue tracking",
        "Gamification (badges, leaderboards, impact stats)",
        "Water stress zone mapping (color-coded alerts)",
      
        "Authority/NGO response tracking"
      ],
      technologies: [
        "React.js",
        "Node.js",
        "MYSQL",
        "Leaflet",
      ]
    }
  ];

  return (
    <Box
      id="projects"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: '#f8f9fa',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '100%',
          background: 'linear-gradient(135deg, rgba(45, 48, 71, 0.05) 0%, rgba(232, 72, 85, 0.05) 100%)',
          zIndex: 0
        }
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <Typography
            variant="h2"
            sx={{
              textAlign: 'center',
              mb: { xs: 6, md: 8 },
              fontWeight: 700,
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              color: '#2D3047',
            }}
          >
            Projects
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={6} key={index}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    height: '100%',
                    backgroundColor: 'white',
                    borderRadius: '15px',
                    border: '1px solid rgba(0, 0, 0, 0.1)',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      mb: 3,
                      color: '#2D3047',
                    }}
                  >
                    {project.icon}
                    <Typography
                      variant="h5"
                      sx={{
                        ml: 2,
                        fontWeight: 600,
                        color: '#2D3047',
                      }}
                    >
                      {project.title}
                    </Typography>
                  </Box>

                  <Typography
                    variant="body1"
                    sx={{
                      color: '#4A5568',
                      mb: 3,
                      lineHeight: 1.6,
                    }}
                  >
                    {project.description}
                  </Typography>

                  <Box sx={{ mb: 3 }}>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        color: '#2D3047',
                        fontWeight: 600,
                        mb: 1
                      }}
                    >
                      Key Features:
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {project.features.map((feature, idx) => (
                        <Chip
                          key={idx}
                          label={feature}
                          sx={{
                            backgroundColor: 'rgba(45, 48, 71, 0.05)',
                            color: '#2D3047',
                            '&:hover': {
                              backgroundColor: 'rgba(138, 43, 226, 0.1)'
                            }
                          }}
                        />
                      ))}
                    </Box>
                  </Box>

                  <Box>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        color: '#2D3047',
                        fontWeight: 600,
                        mb: 1
                      }}
                    >
                      Technologies:
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {project.technologies.map((tech, idx) => (
                        <Chip
                          key={idx}
                          label={tech}
                          sx={{
                            backgroundColor: 'rgba(138, 43, 226, 0.1)',
                            color: '#8A2BE2',
                            '&:hover': {
                              backgroundColor: 'rgba(138, 43, 226, 0.2)'
                            }
                          }}
                        />
                      ))}
                    </Box>
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects; 