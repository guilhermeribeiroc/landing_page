const technologies = [
  { name: 'Gemini', logo: '/tech/gemini.svg', variant: 'gemini' },
  { name: 'ChatGPT', logo: '/tech/chatgpt.svg', variant: 'chatgpt' },
  { name: 'Meta', logo: '/tech/meta.svg', variant: 'meta' },
  { name: 'n8n', logo: '/tech/n8n.svg', variant: 'n8n', showName: true },
  { name: 'Supabase', logo: '/tech/supabase.svg', variant: 'supabase' },
  { name: 'Claude', logo: '/tech/claude.svg', variant: 'claude' },
]

function TechnologyList() {
  return technologies.map((technology) => (
    <li className={`tech-item tech-item--${technology.variant}`} key={technology.name}>
      <img src={technology.logo} alt={technology.name} />
      {technology.showName && <span>{technology.name}</span>}
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
