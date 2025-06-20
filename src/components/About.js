import React from 'react';
import { Box, Container, Typography, Grid, Avatar, Chip, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaSchool, FaBook } from 'react-icons/fa';

const About = () => {
  const educationItems = [
    {
      degree: "BSc in Computer Systems Engineering",
      school: "Midlands State University",
      years: "2021- 2025",
      icon: <FaGraduationCap size={24} />,
      details: "Focused on computer systems, networking, and software development"
    },
    {
      degree: "A-Level",
      school: "Sikhulile High School",
      years: "2019 - 2020",
      icon: <FaSchool size={24} />,
      details: "Pure Mathematics, Physics, Chemistry, and Mechanical Mathematics (14 points)"
    },
    {
      degree: "O-Level",
      school: "Sikhulile High School",
      years: "2015 - 2018",
      icon: <FaBook size={24} />,
      details: "9 subjects with 4As, 3Bs, and 2Cs"
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <Box
      id="about"
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(135deg, #F8F9FA 0%, #EDF2F7 100%)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 50% 50%, rgba(107, 70, 193, 0.05) 0%, transparent 70%)',
          zIndex: 1,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
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
              background: 'linear-gradient(45deg, #6B46C1, #9F7AEA)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              letterSpacing: '-0.5px'
            }}
          >
            About Me
          </Typography>
        </motion.div>

        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={4}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  position: 'relative',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: -20,
                    left: -20,
                    right: -20,
                    bottom: -20,
                    border: '2px solid rgba(107, 70, 193, 0.2)',
                    borderRadius: '50%',
                    animation: 'pulse 2s infinite',
                  },
                  '@keyframes pulse': {
                    '0%': {
                      transform: 'scale(1)',
                      opacity: 1,
                    },
                    '50%': {
                      transform: 'scale(1.1)',
                      opacity: 0.5,
                    },
                    '100%': {
                      transform: 'scale(1)',
                      opacity: 1,
                    },
                  },
                }}
              >
                <Avatar
                  src="/about.jpg"
                  alt="Christabel Ngwenya"
                  sx={{
                    width: { xs: 200, md: 300 },
                    height: { xs: 200, md: 300 },
                    border: '4px solid white',
                    boxShadow: '0 0 30px rgba(107, 70, 193, 0.2)',
                    objectFit: 'cover',
                  }}
                />
              </Box>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={8}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              <Typography
                variant="h4"
                sx={{
                  mb: 3,
                  fontWeight: 600,
                  color: '#2D3748',
                  fontSize: { xs: '1.8rem', md: '2.2rem' },
                  letterSpacing: '-0.5px'
                }}
              >
                Computer Systems Engineering Graduate
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mb: 4,
                  color: '#4A5568',
                  fontSize: { xs: '1.1rem', md: '1.2rem' },
                  lineHeight: 1.8,
                  letterSpacing: '0.3px'
                }}
              >
                I recently graduated with a degree in Computer Systems Engineering, giving me a strong background in both hardware and software. I have skills in many areas of tech, including:
              </Typography>
              <Box sx={{ mb: 4, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {[
                  "Networking",
                  "Database Management",
                  "Data Analytics",
                  "Cybersecurity",
                  "Software Development",
                  "And more!"
                ].map((skill, index) => (
                  <Chip
                    key={index}
                    label={skill}
                    sx={{
                      backgroundColor: 'rgba(107, 70, 193, 0.1)',
                      color: '#6B46C1',
                      fontWeight: 500,
                      fontSize: '1rem',
                      '&:hover': {
                        backgroundColor: 'rgba(107, 70, 193, 0.2)',
                      },
                    }}
                  />
                ))}
              </Box>
              <Typography
                variant="body1"
                sx={{
                  mb: 4,
                  color: '#4A5568',
                  fontSize: { xs: '1.1rem', md: '1.2rem' },
                  lineHeight: 1.8,
                  letterSpacing: '0.3px'
                }}
              >
                I'm open to opportunities in any tech field whether it's coding, securing systems, analyzing data, or working with networks. I love learning new things and solving real-world problems with technology.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: '#4A5568',
                  fontSize: { xs: '1.1rem', md: '1.2rem' },
                  lineHeight: 1.8,
                  letterSpacing: '0.3px',
                  fontWeight: 500
                }}
              >
                If you're looking for someone who's flexible, eager to learn, and ready to contribute, let's connect!
              </Typography>
            </motion.div>
          </Grid>
        </Grid>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <Typography
            variant="h3"
            sx={{
              textAlign: 'center',
              mt: { xs: 8, md: 12 },
              mb: { xs: 4, md: 6 },
              fontWeight: 700,
              fontSize: { xs: '2rem', md: '2.5rem' },
              color: '#2D3748',
              letterSpacing: '-0.5px'
            }}
          >
            Education
          </Typography>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <Grid container spacing={4}>
            {educationItems.map((item, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div variants={fadeInUp}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 4,
                      height: '100%',
                      background: 'rgba(255, 255, 255, 0.8)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: '20px',
                      border: '1px solid rgba(107, 70, 193, 0.1)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 10px 30px rgba(107, 70, 193, 0.1)',
                        borderColor: 'rgba(107, 70, 193, 0.2)',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        mb: 2,
                        color: '#6B46C1',
                      }}
                    >
                      {item.icon}
                      <Typography
                        variant="h6"
                        sx={{
                          ml: 2,
                          fontWeight: 600,
                          color: '#2D3748',
                          fontSize: '1.2rem',
                        }}
                      >
                        {item.degree}
                      </Typography>
                    </Box>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        color: '#6B46C1',
                        fontWeight: 500,
                        mb: 1,
                        fontSize: '1.1rem',
                      }}
                    >
                      {item.school}
                    </Typography>
                    <Chip
                      label={item.years}
                      sx={{
                        mb: 2,
                        backgroundColor: 'rgba(107, 70, 193, 0.1)',
                        color: '#6B46C1',
                        fontWeight: 500,
                        '&:hover': {
                          backgroundColor: 'rgba(107, 70, 193, 0.2)',
                        },
                      }}
                    />
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#4A5568',
                        lineHeight: 1.6,
                        fontSize: '1rem',
                      }}
                    >
                      {item.details}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About; 