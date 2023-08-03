import { useState } from 'react'
import './styles/App.css'

import { template } from './template'
import Title from './components/Title'
import Bio from './components/Bio'
import Education from './components/Education'
import Experience from './components/Experience'
import Skill from './components/Skill'
import Project from './components/Project'
import CV from './components/CV'
import Form from './components/Form'

import { jsPDF } from 'jspdf'

export default function App() {
  const [profile, setProfile] = useState(template)
  const date = /\d{4}-\d{2}/.exec(new Date().toISOString())

  const handleUpdate = (prop) => {
    setProfile({ ...profile, ...prop })
  }

  const handleUpdateArray = (prop) => {
    const [key, value] = Object.entries(prop)[0]

    for (const [index, item] of profile[key].entries()) {
      if (item.id === value.id) {
        const temp = profile[key]
        temp[index] = value
        setProfile({ ...profile, [key]: [...temp] })
        return
      }
    }
    setProfile({ ...profile, [key]: [...profile[key], value] })
  }

  const handleDeleteArrayItem = (prop) => {
    const [key, value] = Object.entries(prop)[0]
    const temp = profile[key].filter((item) => item.id !== value.id)
    setProfile({ ...profile, [key]: temp })
  }

  console.log(profile)
  return (
    <div className='App'>
      <section className='input'>
        <Title title={profile.title} update={handleUpdate} />
        <Form type='Experience' />
        {/* <Bio update={handleUpdate} /> */}
        {/* <Skill id={1} update={handleUpdateArray} /> */}
        {/* <Experience
          id={1}
          date={date}
          update={handleUpdateArray}
          del={handleDeleteArrayItem}
        /> */}
        {/* <Project id={1} date={date} update={handleUpdateArray} /> */}
        {/* <Education id={1} date={date} update={handleUpdateArray} /> */}
      </section>

      <section className='output'>
        <CV {...profile} />
      </section>
    </div>
  )
}
