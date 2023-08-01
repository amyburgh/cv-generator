import { useState } from 'react'
import './styles/App.css'

import { template } from './template'
import Title from './components/Title'
import Bio from './components/Bio'
import Education from './components/Education'
import Experience from './components/Experience'
import Skill from './components/Skill'
import Project from './components/Project'

export default function App() {
  const [profile, setProfile] = useState(template)
  const date = /\d{4}-\d{2}/.exec(new Date().toISOString())

  const handleUpdate = (prop) => {
    setProfile({ ...profile, ...prop })
  }

  const handleUpdateArray = (prop) => {
    const [key, value] = Object.entries(prop)[0]

    // Id check
    for (const [index, item] of profile[key].entries()) {
      console.log('item:', item)
      if (item.id === value.id) {
        // console.log('[FOUND ID:', item.id, ']')
        const temp = profile[key]
        temp[index] = value
        setProfile({ ...profile, [key]: [...temp] })
        return
      }
    }
    setProfile({ ...profile, [key]: [...profile[key], value] })
  }

  console.log(profile)
  return (
    <div className='App'>
      <section className='input'>
        <Title title={profile.title} update={handleUpdate} />
        <Bio update={handleUpdate} />
        <Education id={1} date={date} update={handleUpdateArray} />
        <Experience id={1} date={date} update={handleUpdateArray} />
        <Skill id={1} update={handleUpdateArray} />
        <Project id={1} update={handleUpdateArray} />
      </section>

      <section className='output'></section>
    </div>
  )
}
