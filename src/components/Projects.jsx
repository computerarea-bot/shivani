import { profile, projects } from '../data'
import Icon from './Icon'
import Section from './Section'

export default function Projects() {
  return (
    <Section id="projects" title="Projects" subtitle="Things I have built">
      <div className="projects-grid">
        {projects.map((p) => (
          <article key={p.name} className="card project-card reveal">
            <div className="project-banner">
              <span className="project-emoji" aria-hidden="true">AI</span>
            </div>
            <div className="project-body">
              <h3>{p.name}</h3>
              <p>{p.description}</p>
              <h4>Features</h4>
              <ul className="check-list">
                {p.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <h4>Technologies Used</h4>
              <div className="chips">
                {p.tech.map((t) => (
                  <span key={t} className="chip chip-accent">{t}</span>
                ))}
              </div>
              <a href={profile.github} target="_blank" rel="noreferrer" className="btn btn-outline btn-sm">
                <Icon name="github" size={16} /> View on GitHub
              </a>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
