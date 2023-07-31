import { useState } from 'react'
import './styles/App.css'

import { template } from './template'
import Title from './components/Title'
import Bio from './components/Bio'
// import Education from './components/Education'
// import Experience from './components/Experience'

export default function App() {
  const [profile, setProfile] = useState(template)
  const handleUpdate = (prop) => {
    setProfile({ ...profile, ...prop })
  }
  return (
    <div className='App'>
      <section className='input'>
        <Title title={profile.title} update={handleUpdate} />
        <Bio />
        {/* <Education /> */}
        {/* <Experience /> */}
      </section>

      <section className='output'></section>
    </div>
  )
}
