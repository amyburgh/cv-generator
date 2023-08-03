import '../styles/CV.css'
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi'
import { BsCircleFill, BsCircle } from 'react-icons/bs'

function Heading({ text }) {
  return <div className='section-heading'>{text}</div>
}

function Bio({ name, job, email, phone, address }) {
  // console.log(name)
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

function Education({ field, school, city, country, start, end, description }) {
  // console.log(field)
  return (
    <div className='cv-education cv-item'>
      <div className='left'>
        <span className='title'>
          {field}, <span className='place'>{school}</span>
        </span>
        <p>{description}</p>
      </div>
      <div className='right'>
        <span className='dates'>
          {start} - {end}
        </span>
        <span className='location'>
          {city}, {country}
        </span>
      </div>
    </div>
  )
}

function Experience({
  role,
  employer,
  city,
  country,
  start,
  end,
  description,
}) {
  return (
    <div className='cv-experience cv-item'>
      <div className='left'>
        <span className='title'>
          {role}, <span className='place'>{employer}</span>
        </span>
        <p>{description}</p>
      </div>
      <div className='right'>
        <span className='dates'>
          {start} - {end}
        </span>
        <span className='location'>
          {city}, {country}
        </span>
      </div>
    </div>
  )
}

function Project({ title, sub, start, end, description }) {
  return (
    <div className='cv-project cv-item'>
      <div className='left'>
        <span className='title'>
          {title}, <span className='place'>{sub}</span>
        </span>
        <p>{description}</p>
      </div>
      <div className='right'>
        <span className='dates'>
          {start} - {end}
        </span>
      </div>
    </div>
  )
}

function Skill({ name, info, level }) {
  const lvl = (level) => {
    const arr = []
    for (let i = 0; i < 5; i += 1) {
      if (i > level) arr.push(<BsCircle />)
      else arr.push(<BsCircleFill />)
    }
    return <div className='skills'>{arr}</div>
  }
  return (
    <div className='cv-skill cv-item'>
      <div className='left'>
        <span className='title'>{name}</span>
        <p>{info}</p>
      </div>
      <div className='right'>{lvl(level)}</div>
    </div>
  )
}

function Section({ heading, array }) {
  const items = []
  return (
    <div className='section'>
      <div className='section-heading'>{heading}</div>
      {array.map((elem) => (
        <Item key={elem.id} {...elem} />
      ))}
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
  console.log(skill)
  return (
    <div className='cv'>
      {bio && <Bio {...bio} />}
      {!!skill.length && <Section heading='Skills' array={skill} />}
      {!!experience.length && (
        <Section heading='Experience' array={experience} />
      )}
      {!!project.length && <Section heading='Projects' array={project} />}
      {!!education.length && <Section heading='Education' array={education} />}
    </div>
  )
}
