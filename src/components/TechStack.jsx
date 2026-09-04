const technologies = [
  { name: 'Gemini', logo: '/tech/gemini.svg' },
  { name: 'ChatGPT', logo: '/tech/chatgpt.svg' },
  { name: 'Meta', logo: '/tech/meta.svg' },
  { name: 'n8n', logo: '/tech/n8n.svg' },
  { name: 'Supabase', logo: '/tech/supabase.svg' },
  { name: 'Claude', logo: '/tech/claude.svg' },
]

function TechnologyList() {
  return technologies.map((technology) => (
    <li className="tech-item" key={technology.name}>
      <img src={technology.logo} alt="" aria-hidden="true" />
      {technology.name}
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
