import { languages, profile, stats } from '../data'
import Section from './Section'

export default function About() {
  return (
    <Section id="about" title="About Me" subtitle="A quick introduction">
      <div className="about-grid">
        <div className="about-text reveal">
          <p>{profile.summary}</p>
          <div className="languages">
            <h3>Languages</h3>
            <div className="chips">
              {languages.map((l) => (
                <span key={l} className="chip">{l}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="stats reveal">
          {stats.map((s) => (
            <div key={s.label} className="stat-card">
              <span className="stat-value">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
