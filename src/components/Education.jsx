import { useState } from 'react'

export default function Education({ id, date, update }) {
  const [edu, setEdu] = useState({
    id: id,
    field: '',
    school: '',
    city: '',
    country: '',
    start: '',
    end: '',
    description: '',
  })

  // console.log(edu)

  return (
    <div className='Education user'>
      <h2>Education</h2>
      <hr />
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <label htmlFor='field'>
            Field<span>optional</span>
          </label>
          <input
            type='text'
            id='field'
            placeholder='Enter Degree/ Field of Study'
            value={edu.field}
            onChange={(e) => setEdu({ ...edu, field: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor='school'>
            School<span>optional</span>
          </label>
          <input
            type='text'
            id='school'
            placeholder='Enter School/ University'
            value={edu.school}
            onChange={(e) => setEdu({ ...edu, school: e.target.value })}
          />
        </div>

        <div className='row'>
          <div>
            <label htmlFor='city'>
              City<span>optional</span>
            </label>
            <input
              type='text'
              id='city'
              placeholder='Enter City'
              value={edu.city}
              onChange={(e) => setEdu({ ...edu, city: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor='country'>
              Country<span>optional</span>
            </label>
            <input
              type='text'
              id='country'
              placeholder='Enter Country'
              value={edu.country}
              onChange={(e) => setEdu({ ...edu, country: e.target.value })}
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
              id='start'
              max={date}
              placeholder='Month'
              value={edu.start}
              onChange={(e) => setEdu({ ...edu, start: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor='end'>
              End Date<span>optional</span>
            </label>
            <input
              type='month'
              id='country'
              max={date}
              value={edu.country}
              placeholder='Month'
              onChange={(e) => setEdu({ ...edu, end: e.target.value })}
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor='description'>
            Description<span>optional</span>
          </label>
          <textarea
            id='description'
            value={edu.description}
            placeholder='Add a description of your education... '
            onChange={(e) => setEdu({ ...edu, description: e.target.value })}
          />
        </div>

        <button className='save' onClick={() => update({ education: edu })}>
          Save
        </button>
      </form>
    </div>
  )
}
