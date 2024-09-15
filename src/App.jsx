
import './App.css'
import AboutPage from './components/About'
import ContactPage from './components/Contact'
import Footer from './components/Footer'
import HiroSection from './components/HiroSection'
import ResponsiveAppBar from './components/NavBar'
import NavBar from './components/NavBar'
import ProjectsPage from './components/Projects'
import SkillsPage from './components/Skills'
import { ThemeProvider } from '@mui/material/styles';
import theme from './Theme';

function App() {

  return (
    <>
    <ThemeProvider theme={theme}>
      {/* Your app components */}
      <ResponsiveAppBar/>
      <HiroSection/>
      <AboutPage/>
      <SkillsPage/>
      <ProjectsPage/>
      <ContactPage/>
      <Footer/>   
    </ThemeProvider>
      <div>
      </div>
    </>
  )
}

export default App
