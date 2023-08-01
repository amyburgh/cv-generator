export default function Education({
  field,
  school,
  city,
  country,
  start,
  end,
  description,
  update,
}) {
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
            value={field}
            // onChange={(e) => update('education', { degree: e.target.value })}
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
            value={school}
            // onChange={(e) => update('education', { school: e.target.value })}
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
              value={city}
              // onChange={(e) => update('education', { city: e.target.value })}
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
              value={country}
              // onChange={(e) => update('education', { country: e.target.value })}
            />
          </div>
        </div>

        <div className='row'>
          <div>
            <label htmlFor='start'>
              Start Date<span>optional</span>
            </label>
            <input
              type='date'
              id='start'
              placeholder='Month'
              value={start}
              // onChange={(e) => update('education', { city: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor='end'>
              End Date<span>optional</span>
            </label>
            <input
              type='date'
              id='country'
              value={country}
              placeholder='Month'
              // onChange={(e) => update('education', { country: e.target.value })}
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
            value={description}
            placeholder='Add a description of your education... '
            // onChange={(e) => update('bio', { address: e.target.value })}
          />
        </div>

        <button className='next'>Next</button>
      </form>
    </div>
  )
}
