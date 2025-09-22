import React from 'react'
import { Box, Container, Typography, Paper, Stack, Link } from '@mui/material'
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Contact = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  }

  const itemStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    color: '#2D3748',
  }

  return (
    <Box
      id="contact"
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(180deg, #F4F5F7 0%, #F9FAFB 100%)',
      }}
    >
      <Container maxWidth="md">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={fadeInUp}>
          <Typography
            variant="h3"
            sx={{
              textAlign: 'center',
              fontWeight: 800,
              color: '#2D3047',
            }}
          >
            Contact Me
          </Typography>
          <Box sx={{ width: 80, height: 4, background: '#E53E3E', borderRadius: 999, mx: 'auto', mt: 2 }} />
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={fadeInUp}>
          <Paper
            elevation={0}
            sx={{
              mt: 5,
              p: { xs: 3, md: 4 },
              borderRadius: 3,
              border: '1px solid rgba(0,0,0,0.08)',
              background: 'white',
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 1, color: '#2D3748' }}>
              Get in Touch
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, color: '#4A5568', lineHeight: 1.7 }}>
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </Typography>

            <Stack spacing={2.5}>
              <Box sx={itemStyle}>
                <FaEnvelope size={18} color="#6B46C1" />
                <Link href="mailto:christabelprogrammer@gmail.com" underline="hover" color="inherit">
                  christabelprogrammer@gmail.com
                </Link>
              </Box>
              <Box sx={itemStyle}>
                <FaPhoneAlt size={18} color="#6B46C1" />
                <Box component="span">+263 71 510 8592 / +263 78 104 1167</Box>
              </Box>
              <Box sx={itemStyle}>
                <FaMapMarkerAlt size={18} color="#6B46C1" />
                <Box component="span">Bulawayo, Zimbabwe</Box>
              </Box>
              <Box sx={itemStyle}>
                <FaLinkedin size={18} color="#0A66C2" />
                <Link href="https://linkedin.com/in/christabelngwenya" target="_blank" rel="noopener noreferrer" underline="hover" color="inherit">
                  linkedin.com/in/christabelngwenya
                </Link>
              </Box>
              <Box sx={itemStyle}>
                <FaGithub size={18} color="#333" />
                <Link href="https://github.com/christabelngwenya" target="_blank" rel="noopener noreferrer" underline="hover" color="inherit">
                  github.com/christabelngwenya
                </Link>
              </Box>
            </Stack>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  )
}

export default Contact
