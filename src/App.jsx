import { useState } from 'react'
import './styles/App.css'

import Title from './components/Title'
import Bio from './components/Bio'
import Education from './components/Education'
import Experience from './components/Experience'
import Skill from './components/Skill'
import Project from './components/Project'
import CV from './components/CV'
import Form from './components/Form'

export default function App() {
  const [profile, setProfile] = useState({
    title: 'CV Template',
    bio: [],
    education: [],
    experience: [],
    links: [],
    project: [],
    skill: [],
  })

  const handleUpdate = (prop) => {
    setProfile({ ...profile, ...prop })
  }

  const handleUpdateArray = (prop) => {
    const [key, value] = Object.entries(prop)[0]
    setProfile({ ...profile, [key]: value })
  }

  const forms = {
    bio: Bio,
    skill: Skill,
    experience: Experience,
    project: Project,
    education: Education,
  }

  return (
    <div className='App'>
      <section className='input'>
        <Title title={profile.title} update={handleUpdate} />
        {Object.keys(forms).map((e) => (
          <Form key={e} type={e} Input={forms[e]} update={handleUpdateArray} />
        ))}
      </section>
      <section className='output'>
        <CV {...profile} />
      </section>
    </div>
  )
}
