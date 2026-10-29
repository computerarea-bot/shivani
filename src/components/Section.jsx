export default function Section({ id, title, subtitle, children, alt = false }) {
  return (
    <section id={id} className={`section ${alt ? 'section-alt' : ''}`}>
      <div className="container">
        <div className="section-head reveal">
          <h2 className="section-title">{title}</h2>
          {subtitle && <p className="section-subtitle">{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  )
}
