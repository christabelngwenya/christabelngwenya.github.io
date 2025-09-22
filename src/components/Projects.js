import React from 'react';
import { Box, Typography, Container, Grid, Paper, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaCertificate, FaWater, FaLaptopCode, FaTrafficLight, FaHome } from 'react-icons/fa';

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
      title: "Portfolio Website",
      description: "Designed and deployed a responsive single-page application showcasing my skills and projects. Demonstrates modern front-end development, version control with Git, and CI/CD via GitHub Actions deployed to GitHub Pages.",
      icon: <FaLaptopCode size={40} />,
      features: [
        "Responsive SPA (React)",
        "Hosted on GitHub Pages",
        "CI/CD with GitHub Actions",
        "Version control with Git"
      ],
      technologies: ["React", "CSS", "GitHub Pages", "GitHub Actions"]
    },
    {
      title: "AI-Powered Smart Traffic Management System",
      description: "Researched and developed an AI model to optimize traffic flow, simulating real-time adaptive signal control for Zimbabwean intersections (e.g., Harare).",
      icon: <FaTrafficLight size={40} />,
      features: [
        "YOLOv8 for vehicle detection and counting",
        "Reinforcement Learning for dynamic signal timing",
        "Flask dashboard for real-time monitoring",
        "Scalable approach to reduce congestion"
      ],
      technologies: ["Python", "YOLOv8", "OpenCV", "Flask", "Reinforcement Learning"]
    },
    {
      title: "Safe Sphere – IoT-Based Safety & Wellness Platform",
      description: "Full-stack developer on the team that won 1st Place ($1000) at the Pada Platform hackathon (Harare, Mar 2024). Platform improves female student safety and wellness at universities in Zimbabwe.",
      icon: <FaShieldAlt size={40} />,
      features: [
        "Anonymous incident reporting",
        "Counseling booking & mental health self-assessment",
        "Virtual Walk Companion (real-time location sharing)",
        "Hardware panic button sending GPS to campus security",
        "Privacy-first design"
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "IoT (Microcontrollers)"]
    },
    {
      title: "Digital Certificate Issuance System",
      description: "Centralized web platform for city councils to digitally manage and issue business shop licenses, replacing error-prone handwritten processes and reducing fraud.",
      icon: <FaCertificate size={40} />,
      features: [
        "Automated certificate generation",
        "Owner record management & payment tracking",
        "Verifiable printable certificates",
        "Fraud reduction"
      ],
      technologies: ["Laravel", "PHP", "MySQL", "HTML5", "CSS3", "JavaScript"]
    },
    {
      title: "Smart Water Management System",
      description: "End-to-end IoT system to reduce urban water loss with sub-5-second leak detection, realtime dashboards, maps, and automated alerts.",
      icon: <FaWater size={40} />,
      features: [
        "ESP32 + flow sensors; Arduino IDE firmware",
        "Automatic valve control & alarm on leak detection",
        "Admin dashboard with graphs/map + public reporting site",
        "Email notifications to admins on reports"
      ],
      technologies: [
        "Arduino (C++)", "ESP32", "IoT Sensors", "React.js", "Node.js", "Express.js", "MySQL", "REST APIs", "Serial Communication"
      ]
    },
    {
      title: "Biometric Home Surveillance System (Facial Recognition)",
      description: "Affordable automated home security prototype using facial recognition to control access and enhance safety.",
      icon: <FaHome size={40} />,
      features: [
        "Python + OpenCV real-time detection/identification",
        "Classify authorized vs unauthorized",
        "Gmail API with 2FA for secure notifications",
        "Automatic email alert with captured photo on unauthorized access"
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