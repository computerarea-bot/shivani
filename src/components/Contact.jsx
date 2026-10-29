import { profile } from '../data'
import Icon from './Icon'
import Section from './Section'

const items = [
  { icon: 'phone', label: 'Phone', value: profile.phone, href: `tel:${profile.phone}` },
  { icon: 'email', label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: 'github', label: 'GitHub', value: 'github.com/maurya-shivani', href: profile.github },
  { icon: 'location', label: 'Location', value: profile.location },
]

export default function Contact() {
  return (
    <Section id="contact" title="Get In Touch" subtitle="Open to opportunities, collaborations and freelance work" alt>
      <div className="contact-grid">
        {items.map((item) => {
          const content = (
            <>
              <span className="contact-icon"><Icon name={item.icon} size={22} /></span>
              <span className="contact-label">{item.label}</span>
              <span className="contact-value">{item.value}</span>
            </>
          )
          return item.href ? (
            <a
              key={item.label}
              href={item.href}
              className="card contact-card reveal"
              {...(item.href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}
            >
              {content}
            </a>
          ) : (
            <div key={item.label} className="card contact-card reveal">{content}</div>
          )
        })}
      </div>
      <div className="contact-cta reveal">
        <a href={`mailto:${profile.email}`} className="btn btn-primary">Say Hello</a>
      </div>
    </Section>
  )
}
