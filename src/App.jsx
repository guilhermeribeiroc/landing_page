import Header from './components/Header'
import Hero from './components/Hero'
import TechStack from './components/TechStack'
import HowItWorks from './components/HowItWorks'
import ValueSection from './components/ValueSection'
import DiagnosticQuiz from './components/DiagnosticQuiz'
import FAQ from './components/FAQ'
import CtaSection from './components/CtaSection'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TechStack />
        <HowItWorks />
        <ValueSection />
        <DiagnosticQuiz />
        <FAQ />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}

export default App
