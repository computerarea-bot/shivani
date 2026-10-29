import { skills } from '../data'
import Section from './Section'

export default function Skills() {
  return (
    <Section id="skills" title="Technical Skills" subtitle="Tools and technologies I work with" alt>
      <div className="skills-grid">
        {skills.map((group) => (
          <div key={group.category} className="card skill-card reveal">
            <div className="skill-icon">{group.icon}</div>
            <h3>{group.category}</h3>
            <div className="chips">
              {group.items.map((item) => (
                <span key={item} className="chip">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
