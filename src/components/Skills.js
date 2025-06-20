import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { FaNetworkWired, FaCloud, FaShieldAlt, FaChartLine, FaTools, FaCode } from 'react-icons/fa';

const Skills = () => {
  const skillCategories = [
    {
      title: "Networking & Infrastructure",
      icon: <FaNetworkWired size={32} />,
      skills: [
        "Network Configuration",
        "Troubleshooting",
        "LAN/WAN Concepts",
        "Network Security",
        "System Administration"
      ]
    },
   
    {
      title: "Data Analysis",
      icon: <FaChartLine size={32} />,
      skills: [
        "Data Visualization",
        "Trend Analysis",
        "Python (Pandas, NumPy)",
        "SQL",
    
      ]
    },
    {
      title: "Development Knowledge",
      icon: <FaCode size={32} />,
      skills: [
        "HTML5/CSS3",
        "React",
        "Node.js",
        "Database Management"
      ]
    },
    {
      title: "Tools & Technologies",
      icon: <FaTools size={32} />,
      skills: [
        "MySQL/PostgreSQL",
        "Git",
        "Cloud Computing",
        "Project Management"
      ]
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

  return (
    <Box
      id="skills"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: '#f8f9fa',
        position: 'relative',
        overflow: 'hidden',
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
            Technical Skills
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {skillCategories.map((category, index) => (
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
                    {category.icon}
                    <Typography
                      variant="h5"
                      sx={{
                        ml: 2,
                        fontWeight: 600,
                        color: '#2D3047',
                      }}
                    >
                      {category.title}
                    </Typography>
                  </Box>

                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {category.skills.map((skill, idx) => (
                      <Box
                        key={idx}
                        sx={{
                          px: 2,
                          py: 1,
                          backgroundColor: 'rgba(45, 48, 71, 0.05)',
                          borderRadius: '20px',
                          color: '#2D3047',
                          fontWeight: 500,
                          fontSize: '0.9rem',
                        }}
                      >
                        {skill}
                      </Box>
                    ))}
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

export default Skills; 