import { useState } from 'react'

export default function Skill({ id, update }) {
  const [skill, setSkill] = useState({
    id: id,
    name: '',
    desc: '',
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
            required
          />
        </div>

        <div>
          <label htmlFor='desc'>
            Information<span>recommended</span>
          </label>
          <input
            type='text'
            id='desc'
            placeholder='Enter information or sub-skills'
            value={skill.desc}
            onChange={(e) => setSkill({ ...skill, desc: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor='level'>
            Select skill level<span>optional</span>
          </label>
          <select
            id='level'
            onChange={(e) => setSkill({ ...skill, level: e.target.value })}
          >
            <option value='' disabled hidden>
              Skill level
            </option>
            <option value='0'>Novice</option>
            <option value='1'>Beginner</option>
            <option value='2'>Competent</option>
            <option value='3'>Proficient</option>
            <option value='4'>Expert</option>
          </select>
        </div>

        <button className='save' onClick={() => update({ skill: skill })}>
          Save
        </button>
      </form>
    </div>
  )
}
