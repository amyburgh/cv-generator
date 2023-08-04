import { useState } from 'react'
import ButtonInput from './ButtonInput'
import CustomInput from './CustomInput'

export default function Bio({ id, update, del }) {
  const def = {
    id: id,
    name: '',
    job: '',
    link: '',
    email: '',
    phone: '',
    address: '',
  }
  const [bio, setBio] = useState(def)
  const handleChange = (prop) => {
    setBio({ ...bio, ...prop })
  }

  return (
    <>
      <CustomInput
        type='text'
        set='name'
        value={bio.name}
        text='Full Name'
        req={true}
        handleChange={handleChange}
      />
      <CustomInput
        type='text'
        set='job'
        value={bio.job}
        text='Job Title'
        handleChange={handleChange}
      />
      <CustomInput
        type='url'
        set='link'
        value={bio.link}
        text='Website link'
        handleChange={handleChange}
      />
      <div className='row'>
        <CustomInput
          type='email'
          set='email'
          value={bio.email}
          text='email'
          handleChange={handleChange}
        />
        <CustomInput
          type='tel'
          set='phone'
          value={bio.phone}
          text='phone'
          handleChange={handleChange}
        />
      </div>
      <CustomInput
        set='address'
        value={bio.address}
        text='City, State, Country'
        handleChange={handleChange}
      />
      <ButtonInput save={() => update(bio)} del={() => del(bio)} />
    </>
  )
}
