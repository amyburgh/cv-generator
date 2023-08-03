import { useState } from 'react'

export default function Education({ id, date, update }) {
  const [edu, setEdu] = useState({
    id: id,
    name: '',
    sub: '',
    city: '',
    country: '',
    start: '',
    end: '',
    desc: '',
  })

  // console.log(edu)

  return (
    <div className='Education user'>
      <h2>Education</h2>
      <hr />
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <label htmlFor='name'>
            Field<span>optional</span>
          </label>
          <input
            type='text'
            id='name'
            placeholder='Enter Degree/ Field of Study'
            value={edu.name}
            onChange={(e) => setEdu({ ...edu, name: e.target.value })}
            required
          />
        </div>

        <div>
          <label htmlFor='sub'>
            School<span>optional</span>
          </label>
          <input
            type='text'
            id='sub'
            placeholder='Enter School/ University'
            value={edu.sub}
            onChange={(e) => setEdu({ ...edu, sub: e.target.value })}
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
              id='end'
              max={date}
              value={edu.end}
              placeholder='Month'
              onChange={(e) => setEdu({ ...edu, end: e.target.value })}
            />
          </div>
        </div>

        <div>
          <label htmlFor='desc'>
            Description<span>optional</span>
          </label>
          <textarea
            id='desc'
            value={edu.desc}
            placeholder='Add a description of your education... '
            onChange={(e) => setEdu({ ...edu, desc: e.target.value })}
          />
        </div>

        <button className='save' onClick={() => update({ education: edu })}>
          Save
        </button>
      </form>
    </div>
  )
}
