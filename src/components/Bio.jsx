import { useState } from 'react'

export default function Bio({ update }) {
  const [bio, setBio] = useState({
    name: '',
    job: '',
    email: '',
    phone: '',
    address: '',
  })

  const handleInput = (prop) => {
    setBio({ ...bio, ...prop })
  }

  return (
    <div className='Bio user'>
      <h2>Personal Details</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <label htmlFor='name'>Full Name</label>
          <input
            type='text'
            id='name'
            placeholder='Enter title, first and last name'
            value={bio.name}
            onChange={(e) => handleInput({ name: e.target.value })}
            required
          />
        </div>

        <div>
          <label htmlFor='job'>Job Title</label>
          <input
            type='text'
            id='job'
            placeholder='Enter Job title'
            value={bio.job}
            onChange={(e) => handleInput({ job: e.target.value })}
            required
          />
        </div>

        <div className='row'>
          <div>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              id='email'
              placeholder='Enter email'
              value={bio.email}
              onChange={(e) => handleInput({ email: e.target.value })}
              required
            />
          </div>

          <div>
            <label htmlFor='phone'>Phone</label>
            <input
              type='tel'
              id='phone'
              placeholder='Enter phone #'
              value={bio.phone}
              onChange={(e) => handleInput({ phone: e.target.value })}
              required
            />
          </div>
        </div>
        <div>
          <label htmlFor='address'>Address</label>
          <input
            type='text'
            id='address'
            placeholder='City, State, Country'
            value={bio.address}
            onChange={(e) => handleInput({ address: e.target.value })}
            required
          />
        </div>

        <button className='save' onClick={() => update({ bio: bio })}>
          Save
        </button>
      </form>
    </div>
  )
}
