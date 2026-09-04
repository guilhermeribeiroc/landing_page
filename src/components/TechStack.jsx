const technologies = [
  { name: 'Gemini', mark: '✦' },
  { name: 'ChatGPT', mark: '◎' },
  { name: 'Meta', mark: '∞' },
  { name: 'n8n', mark: '⌘' },
  { name: 'Supabase', mark: '▲' },
  { name: 'Claude', mark: '✳' },
]

function TechnologyList() {
  return technologies.map((technology) => (
    <li className="tech-item" key={technology.name}>
      <span aria-hidden="true">{technology.mark}</span>
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
