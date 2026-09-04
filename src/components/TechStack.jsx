const technologies = [
  { name: 'Gemini', logo: '/tech/gemini-mark.svg', variant: 'gemini' },
  { name: 'ChatGPT', logo: '/tech/chatgpt-mark.svg', variant: 'chatgpt' },
  { name: 'Meta', logo: '/tech/meta-mark.svg', variant: 'meta' },
  { name: 'n8n', logo: '/tech/n8n-mark.svg', variant: 'n8n' },
  { name: 'Supabase', logo: '/tech/supabase-mark.svg', variant: 'supabase' },
  { name: 'Claude', logo: '/tech/claude-mark.svg', variant: 'claude' },
]

function TechnologyList() {
  return technologies.map((technology) => (
    <li className={`tech-item tech-item--${technology.variant}`} key={technology.name}>
      <img src={technology.logo} alt={technology.name} />
      <span>{technology.name}</span>
    </li>
  ))
}

export default function TechStack() {
  return (
    <section className="tech-stack" aria-label="Tecnologias do ecossistema Otimiza">
      <div className="container">
        <p>Tecnologias do ecossistema Otimiza</p>
      </div>
      <div className="tech-marquee">
        <ul><TechnologyList /><TechnologyList /></ul>
      </div>
    </section>
  )
}
