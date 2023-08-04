import { useState } from 'react'
import CustomInput from './CustomInput'
import DateInput from './DateInput'
import DescriptionInput from './DescriptionInput'
import ButtonInput from './ButtonInput'

export default function Education({ init, id, update, del }) {
  const def = {
    id: id,
    name: '',
    sub: '',
    city: '',
    country: '',
    start: '',
    end: '',
    desc: '',
  }
  const [edu, setEdu] = useState(init ? init : def)
  const handleChange = (prop) => setEdu({ ...edu, ...prop })

  return (
    <>
      <CustomInput
        set='name'
        value={edu.name}
        text='Degree/ Field of Study'
        handleChange={handleChange}
      />
      <CustomInput
        set='sub'
        value={edu.sub}
        text='School/ University'
        handleChange={handleChange}
      />
      <div className='row'>
        <CustomInput
          set='city'
          value={edu.city}
          text={'City'}
          handleChange={handleChange}
        />
        <CustomInput
          set='country'
          value={edu.country}
          text={'Country'}
          handleChange={handleChange}
        />
      </div>
      <DateInput start={edu.start} end={edu.end} handleChange={handleChange} />
      <DescriptionInput desc={edu.desc} handleChange={handleChange} />
      <ButtonInput save={() => update(edu)} del={() => del(edu)} />
    </>
  )
}
