import '../styles/CV.css'
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi'
import { BsCircleFill, BsCircle } from 'react-icons/bs'

function Bio({ name, job, email, phone, address }) {
  return (
    <div className='cv-bio'>
      <div className='heading'>
        <span className='name'>{name}</span>
        <span className='job'>{job}</span>
      </div>
      <div className='links'>
        <div className='link'>
          <FiMail />
          <a href={'mailto:' + email}>{email}</a>
        </div>
        <div className='link'>
          <FiPhone />
          <a href={'tel:' + phone}>{phone}</a>
        </div>
        <div className='link'>
          <FiMapPin />
          <span>{address}</span>
        </div>
        {/* links */}
      </div>
    </div>
  )
}

function Section({ heading, array }) {
  const items = []
  return (
    <div className='section'>
      <div className='section-heading'>{heading}</div>
      <div className='section-item'>
        {array.map((elem) => (
          <Item key={elem.id} {...elem} />
        ))}
      </div>
    </div>
  )
}

function Item({ name, sub, city, country, start, end, desc, level }) {
  const dates = () => {
    if (start && end) {
      return (
        <>
          {start} - {end}
        </>
      )
    } else if (start && !end) {
      return <>{start} - Current</>
    }
  }
  const skills = (lvl) => {
    return [0, 1, 2, 3, 4].map((elem) =>
      elem > lvl ? <BsCircle key={elem} /> : <BsCircleFill key={elem} />
    )
  }
  return (
    <div className='cv-item'>
      <div className='left'>
        <span className='title'>
          {name}
          {sub && ','} <span className='place'>{sub}</span>
        </span>
        <p>{desc}</p>
      </div>
      <div className='right'>
        <span className='dates'>{dates()}</span>
        <span className='location'>
          {city}
          {country && ', ' + country}
        </span>
        {level && <div className='skills'>{skills(level)}</div>}
      </div>
    </div>
  )
}

export default function CV({ bio, education, experience, project, skill }) {
  return (
    <div className='cv'>
      {!!bio.length && <Bio {...bio[0]} />}
      {!!skill.length && <Section heading='Skills' array={skill} />}
      {!!experience.length && (
        <Section heading='Experience' array={experience} />
      )}
      {!!project.length && <Section heading='Projects' array={project} />}
      {!!education.length && <Section heading='Education' array={education} />}
    </div>
  )
}
