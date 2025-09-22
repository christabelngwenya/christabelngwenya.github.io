import React from 'react'
import { CssBaseline, ThemeProvider, createTheme, Box, AppBar, Toolbar, Typography, Container, Button, Stack } from '@mui/material'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Contact from './components/Contact'

const theme = createTheme({
  palette: {
    primary: { main: '#2D3047' },
    secondary: { main: '#8A2BE2' },
  },
  typography: {
    fontFamily: 'Poppins, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"',
  },
})

export default function App() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <AppBar position="sticky" color="primary" elevation={0}>
        <Toolbar>
          <Container maxWidth="lg" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography variant="h6" sx={{ fontWeight: 700 }}>Christabel Ngwenya</Typography>
            <Stack direction="row" spacing={1}>
              <Button color="inherit" onClick={() => scrollTo('home')}>Home</Button>
              <Button color="inherit" onClick={() => scrollTo('about')}>About</Button>
              <Button color="inherit" onClick={() => scrollTo('skills')}>Skills</Button>
              <Button color="inherit" onClick={() => scrollTo('projects')}>Projects</Button>
              <Button color="inherit" onClick={() => scrollTo('contact')}>Contact</Button>
            </Stack>
          </Container>
        </Toolbar>
      </AppBar>

      <Box component="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </Box>

      <Footer />
    </ThemeProvider>
  )
}
