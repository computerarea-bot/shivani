import { education } from '../data'
import Section from './Section'

export default function Education() {
  return (
    <Section id="education" title="Education" subtitle="Academic background">
      <div className="edu-grid">
        {education.map((e) => (
          <div key={e.school} className="card edu-card reveal">
            <span className="edu-year">{e.year}</span>
            <h3>{e.school}</h3>
            <p>{e.degree}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
