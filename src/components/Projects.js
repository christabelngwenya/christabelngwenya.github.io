import React from 'react';
import { Box, Typography, Container, Grid, Paper, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaCertificate, FaWater, FaExclamationTriangle, FaHome } from 'react-icons/fa';

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
      title: "Safe Sphere – IoT-Based Safety & Wellness Platform",
      description: "A 1st Place ($1000 USD) winning hackathon project designed to improve female student safety and mental health at universities in Zimbabwe. I was responsible for full-stack development and contributed to hardware engineering.",
      icon: <FaShieldAlt size={40} />,
      features: [
        "Secure, anonymous incident reporting forms",
        "Counseling services booking system",
        "Interactive mental health self-assessment tool",
        "Real-time 'Virtual Walk Companion' location sharing",
        "Hardware panic button with GPS location transmission"
      ],
      technologies: ["React.js", "Node.js", "PostgreSQL", "IoT Hardware (Microcontrollers)"]
    },
    {
      title: "Digital Certificate Issuance System",
      description: "A centralized web-based platform for city councils to digitally manage and issue business shop licenses, automating the process to replace error-prone handwritten methods and reduce fraud.",
      icon: <FaCertificate size={40} />,
      features: [
        "Automated storage of shop owner details",
        "Payment tracking system",
        "Generation of printable, verifiable certificates",
        "Centralized digital record management"
      ],
      technologies: ["PHP", "Laravel", "MySQL"]
    },
    {
      title: "Smart Water Management System",
      description: "A complete IoT system designed to detect water leaks in under 5 seconds (a process that previously took weeks), helping to reduce water loss in urban areas.",
      icon: <FaWater size={40} />,
      features: [
        "Real-time leak detection with automatic valve control",
        "Admin dashboard with interactive graphs and maps",
        "Public portal for leak reporting and status tracking",
        "Automated email alerts to admin team upon leak detection"
      ],
      technologies: ["Arduino (C++)", "ESP32", "IoT Sensors", "React.js", "Node.js", "Express.js", "MySQL", "REST APIs"]
    },
    {
      title: "AI-Powered Smart Traffic Management System",
      description: "An AI model developed to optimize traffic flow by simulating real-time adaptive signal control for intersections in Zimbabwean cities like Harare.",
      icon: <FaExclamationTriangle size={40} />,
      features: [
        "Vehicle detection and counting using YOLOv8 computer vision",
        "Dynamic signal timing via a reinforcement learning algorithm",
        "Flask web dashboard for real-time monitoring and reporting",
        "Scalable solution to reduce urban congestion"
      ],
      technologies: ["Python", "YOLOv8", "OpenCV", "Flask", "Reinforcement Learning"]
    },
    {
      title: "Biometric Home Surveillance System",
      description: "An affordable, automated home security system prototype that uses facial recognition to control access and enhance household safety.",
      icon: <FaHome size={40} />,
      features: [
        "Real-time face detection and identification using OpenCV",
        "Classification of individuals as authorized or unauthorized",
        "Automatic image capture of unauthorized persons",
        "Secure email alert system with photo attachment via Gmail API"
      ],
      technologies: ["Python", "OpenCV", "Gmail API", "OAuth 2.0", "Haar Cascades"]
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