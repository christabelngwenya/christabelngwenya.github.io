import React from 'react'
import { Box, Container, Typography, Button, Stack, Avatar } from '@mui/material'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa'

const Hero = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  }

  return (
    <Box
      id="home"
      sx={{
        py: { xs: 8, md: 12 },
        background: 'radial-gradient(1200px 600px at 75% 50%, rgba(138,43,226,0.15), transparent 60%), linear-gradient(135deg, #1f2235 0%, #2D3047 70%)',
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        <Stack direction={{ xs: 'column', md: 'row' }} alignItems="center" spacing={{ xs: 6, md: 8 }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={fadeInUp} style={{ flex: 1 }}>
            <Typography variant="h2" sx={{ fontWeight: 800, fontSize: { xs: '3rem', md: '4.8rem' }, lineHeight: 1.05, letterSpacing: '-0.5px' }}>
              Hi, I'm
              <br />
              <Box component="span" sx={{ color: '#9F7AEA' }}>Christabel Ngwenya</Box>
            </Typography>
            <Typography variant="h6" sx={{ mt: 2, opacity: 0.95, fontWeight: 700, fontSize: { xs: '1.1rem', md: '1.4rem' } }}>
              Tech Enthusiast | Computer Systems Engineering Graduate
            </Typography>
            <Typography variant="body1" sx={{ mt: 2, maxWidth: 640, opacity: 0.9, lineHeight: 1.7 }}>
              Tech professional with skills in development, networking, and data, ready to solve problems in
              any tech area.
            </Typography>
            <Stack spacing={2} sx={{ mt: 4 }}>
              <Stack direction="row" spacing={2}>
                <Button
                  href="#contact"
                  size="large"
                  sx={{
                    px: 3.5,
                    py: 1.4,
                    fontWeight: 700,
                    borderRadius: 999,
                    background: 'linear-gradient(90deg, #8A2BE2 0%, #9F7AEA 100%)',
                    color: '#fff',
                    boxShadow: '0 8px 24px rgba(138, 43, 226, 0.35)',
                    textTransform: 'none',
                    '&:hover': {
                      background: 'linear-gradient(90deg, #7a23d0 0%, #8e6de0 100%)',
                      boxShadow: '0 10px 28px rgba(138, 43, 226, 0.45)'
                    }
                  }}
                >
                  Contact Me
                </Button>
                <Button
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  size="large"
                  sx={{
                    px: 3.5,
                    py: 1.4,
                    fontWeight: 700,
                    borderRadius: 999,
                    textTransform: 'none',
                    color: 'rgba(255,255,255,0.9)',
                    border: '2px solid rgba(255,255,255,0.4)',
                    background: 'transparent',
                    '&:hover': {
                      borderColor: 'rgba(255,255,255,0.7)',
                      background: 'rgba(255,255,255,0.05)'
                    }
                  }}
                >
                  Download CV
                </Button>
              </Stack>

              <Stack direction="row" spacing={2}>
                <Button
                  href="#certifications"
                  size="medium"
                  sx={{
                    px: 2.5,
                    py: 1.0,
                    fontWeight: 600,
                    borderRadius: 999,
                    textTransform: 'none',
                    color: 'rgba(255,255,255,0.9)',
                    border: '1px solid rgba(255,255,255,0.35)',
                    background: 'rgba(255,255,255,0.06)',
                    '&:hover': {
                      background: 'rgba(255,255,255,0.12)'
                    }
                  }}
                >
                  View Certifications
                </Button>
              </Stack>

              <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', mt: 1 }}>
                <a href="https://github.com/christabelngwenya" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                   style={{ color: 'rgba(255,255,255,0.9)' }}>
                  <FaGithub size={22} />
                </a>
                <a href="https://www.linkedin.com/in/christabel-ngwenya-705330261?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                   style={{ color: 'rgba(255,255,255,0.9)' }}>
                  <FaLinkedin size={22} />
                </a>
                <a href="https://www.instagram.com/christabel_ngwenya_01?igsh=aHMxdHh0M3Bhemhx" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                   style={{ color: 'rgba(255,255,255,0.9)' }}>
                  <FaInstagram size={22} />
                </a>
                <a href="https://www.facebook.com/christabel.ngwenya.637442?rdid=R1A8AJ6HgwoZsNfh&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19u4C6k6m4%2F#" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                   style={{ color: 'rgba(255,255,255,0.9)' }}>
                  <FaFacebook size={22} />
                </a>
              </Box>
            </Stack>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={fadeInUp} style={{ flex: 1, width: '100%' }}>
            <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
              {/* Responsive wrapper to match About image animation */}
              <Box
                sx={{
                  position: 'relative',
                  width: { xs: 260, md: 380 },
                  height: { xs: 260, md: 380 },
                }}
              >
                {/* Animated purple ring (same effect as About) */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: -20,
                    left: -20,
                    right: -20,
                    bottom: -20,
                    border: '2px solid rgba(107, 70, 193, 0.2)',
                    borderRadius: '50%',
                    animation: 'pulse 2s infinite',
                  }}
                />

                {/* Soft purple glow behind the avatar */}
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(159,122,234,0.3) 0%, rgba(159,122,234,0.05) 60%, transparent 70%)',
                    filter: 'blur(0.5px)',
                  }}
                />

                <Avatar
                  src="/profile.jpg"
                  alt="Christabel Ngwenya"
                  sx={{
                    width: '100%',
                    height: '100%',
                    border: '6px solid rgba(255,255,255,0.9)',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.35)',
                    objectFit: 'cover',
                    position: 'relative',
                    zIndex: 1,
                  }}
                />
              </Box>
            </Box>
            <style>{`
              /* Match About.js pulse effect */
              @keyframes pulse {
                0% { transform: scale(1); opacity: 1; }
                50% { transform: scale(1.1); opacity: 0.5; }
                100% { transform: scale(1); opacity: 1; }
              }
            `}</style>
          </motion.div>
        </Stack>
      </Container>
    </Box>
  )
}

export default Hero
