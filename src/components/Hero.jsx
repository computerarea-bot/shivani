import { profile } from '../data'
import Icon from './Icon'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-inner">
        <div className="hero-text reveal">
          <p className="eyebrow">Hello, I&apos;m</p>
          <h1>{profile.name}</h1>
          <h2 className="hero-title">{profile.title}</h2>
          <p className="hero-sub">
            BCA student &amp; aspiring Python Developer building AI-powered applications and
            responsive, user-friendly websites.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#contact" className="btn btn-outline">Contact Me</a>
          </div>
          <ul className="hero-meta">
            <li><Icon name="location" /> {profile.location}</li>
            <li>
              <a href={profile.github} target="_blank" rel="noreferrer">
                <Icon name="github" /> maurya-shivani
              </a>
            </li>
          </ul>
        </div>
        <div className="hero-photo reveal">
          <div className="photo-frame">
            <img src={profile.photo} alt={profile.name} />
          </div>
        </div>
      </div>
    </section>
  )
}
