import { experience } from '../data'
import Section from './Section'

export default function Experience() {
  return (
    <Section id="experience" title="Experience" subtitle="Internship & work history" alt>
      <div className="timeline">
        {experience.map((job) => (
          <div key={job.company} className="timeline-item reveal">
            <span className="timeline-dot" />
            <div className="card timeline-card">
              <div className="timeline-head">
                <div>
                  <span className="badge">{job.type}</span>
                  <h3>{job.role}</h3>
                  <p className="company">{job.company}</p>
                </div>
                <span className="duration">{job.duration}</span>
              </div>
              <ul className="check-list">
                {job.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
