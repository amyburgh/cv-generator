import { useState } from 'react'

export default function Skill({ id, update }) {
  const [skill, setSkill] = useState({
    id: id,
    name: '',
    info: '',
    level: '',
  })

  return (
    <div className='Skill user'>
      <h2>Skill</h2>
      <hr />
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <label htmlFor='name'>
            Skill<span className='required'>*</span>
          </label>
          <input
            type='text'
            id='name'
            placeholder='Enter Skill'
            value={skill.name}
            onChange={(e) => setSkill({ ...skill, name: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor='info'>
            Information<span>recommended</span>
          </label>
          <input
            type='text'
            id='info'
            placeholder='Enter information or sub-skills'
            value={skill.info}
            onChange={(e) => setSkill({ ...skill, info: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor='level'>
            Select skill level<span>optional</span>
          </label>
          <select
            // type='text'
            id='info'
            placeholder='Enter information or sub-skills'
            value={skill.info}
            onChange={(e) => setSkill({ ...skill, level: e.target.value })}
          >
            <option value='' disabled selected hidden>
              Skill level
            </option>
            <option value='novice'>Novice</option>
            <option value='beginner'>Beginner</option>
            <option value='competent'>Competent</option>
            <option value='proficient'>Proficient</option>
            <option value='expert'>Expert</option>
          </select>
        </div>

        <button className='save' onClick={() => update({ skill: skill })}>
          Save
        </button>
      </form>
    </div>
  )
}
