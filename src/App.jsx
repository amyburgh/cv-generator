import { useState } from 'react'
import './styles/App.css'

// import { template } from './template'
import Title from './components/Title'
// import General from './components/General'
// import Education from './components/Education'
// import Experience from './components/Experience'

export default function App() {
  const [profile, setProfile] = useState({})
  return (
    <div className='App'>
      <section className='input'>
        <Title />
        {/* <General /> */}
        {/* <Education /> */}
        {/* <Experience /> */}
      </section>

      <section className='output'></section>
    </div>
  )
}
