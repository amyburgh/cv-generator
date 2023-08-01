import { useState } from 'react'

export default function Experience({ date, id, update }) {
  const [experience, setExperience] = useState({
    id: id,
    role: '',
    employer: '',
    city: '',
    country: '',
    start: '',
    end: '',
  })

  const handleInput = (prop) => {
    setExperience({ ...experience, ...prop })
  }

  return (
    <div className='Experience user'>
      <h2>Professional Experience</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        {/* role */}
        <div>
          <label htmlFor='role'>
            Job Title<span>optional</span>
          </label>
          <input
            type='text'
            id='role'
            placeholder='Enter job title'
            value={experience.role}
            onChange={(e) => handleInput({ role: e.target.value })}
          />
        </div>

        {/* employer */}
        <div>
          <label htmlFor='employer'>
            Employer<span>optional</span>
          </label>
          <input
            type='text'
            id='employer'
            placeholder='Enter employer'
            value={experience.employer}
            onChange={(e) => handleInput({ employer: e.target.value })}
          />
        </div>
        {/* City */}
        <div className='row'>
          <div>
            <label htmlFor='city'>
              City<span>optional</span>
            </label>
            <input
              type='text'
              id='city'
              placeholder='Enter City'
              value={experience.city}
              onChange={(e) => handleInput({ city: e.target.value })}
            />
          </div>
          {/* Country */}
          <div>
            <label htmlFor='country'>
              Country<span>optional</span>
            </label>
            <input
              type='text'
              id='country'
              placeholder='Enter Country'
              value={experience.country}
              onChange={(e) => handleInput({ country: e.target.value })}
            />
          </div>
        </div>
        <div className='row'>
          <div>
            <label htmlFor='start'>
              Start Date<span>optional</span>
            </label>
            <input
              type='month'
              max={date}
              id='start'
              placeholder='Start Date'
              value={experience.start}
              onChange={(e) => handleInput({ start: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor='end'>
              End date<span>optional</span>
            </label>
            <input
              type='month'
              max={date}
              id='end'
              placeholder='End Date'
              value={experience.end}
              onChange={(e) => handleInput({ end: e.target.value })}
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor='description'>
            Description<span>optional</span>
          </label>
          <textarea
            type='text'
            id='description'
            placeholder='Describe your role & achievements...'
            value={experience.description}
            onChange={(e) => handleInput({ description: e.target.value })}
            required
          />
        </div>

        <button className='save' onClick={() => update(experience)}>
          Save
        </button>
      </form>
    </div>
  )
}
