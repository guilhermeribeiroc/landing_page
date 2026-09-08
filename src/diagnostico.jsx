import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './ia-humanizada.css'
import DiagnosticQuiz from './components/DiagnosticQuiz'

const base = import.meta.env.BASE_URL

function Mark() {
  return <a className="ai-logo" href={base} aria-label="Voltar para a Otimiza AI"><img src={`${base}otimiza-mark-transparent.png`} alt="" /><span>Otimiza<span>AI</span></span></a>
}

function DiagnosticoPage() {
  return <div className="ai-page">
    <header className="ai-header"><div className="container ai-header-inner"><Mark /><a href={`${base}ia-humanizada/`} className="ai-back">Conhecer a IA humanizada</a></div></header>
    <main>
      <DiagnosticQuiz variant="atendimento" anchorId="diagnostico" />
    </main>
    <footer className="ai-footer"><div className="container"><Mark /><span>Tecnologia pensada para a sua operação.</span></div></footer>
  </div>
}

ReactDOM.createRoot(document.getElementById('root')).render(<React.StrictMode><DiagnosticoPage /></React.StrictMode>)
