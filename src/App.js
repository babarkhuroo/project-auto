import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Section from './components/Section'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <div className='main-container'>
        <Header />
        <Hero />
      </div>
      <Section />
      <Footer />
    </>
  )
}

export default App
