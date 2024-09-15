
import './App.css'
import AboutPage from './components/About'
import ContactPage from './components/Contact'
import HiroSection from './components/HiroSection'
import ResponsiveAppBar from './components/NavBar'
import NavBar from './components/NavBar'
import ProjectsPage from './components/Projects'
import SkillsPage from './components/Skills'

function App() {

  return (
    <>
      <div>
        <ResponsiveAppBar/>
        <HiroSection/>
        <AboutPage/>
        <SkillsPage/>
        <ProjectsPage/>
        <ContactPage/>
      </div>
    </>
  )
}

export default App
