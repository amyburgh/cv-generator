import { useState } from 'react'
import CustomInput from './CustomInput'
import DateInput from './DateInput'
import DescriptionInput from './DescriptionInput'
import ButtonInput from './ButtonInput'

export default function Experience({ init, id, update, del }) {
  const def = {
    id: id,
    name: '',
    sub: '',
    city: '',
    country: '',
    start: '',
    end: '',
  }
  const [exp, setExp] = useState(init ? init : def)
  const handleChange = (prop) => setExp({ ...exp, ...prop })

  return (
    <>
      <CustomInput
        set='name'
        value={exp.name}
        text={'Job Title'}
        req={true}
        handleChange={handleChange}
      />
      <CustomInput
        set='sub'
        value={exp.sub}
        text={'Employer'}
        handleChange={handleChange}
      />
      <div className='row'>
        <CustomInput
          set='city'
          value={exp.city}
          text={'City'}
          handleChange={handleChange}
        />
        <CustomInput
          set='country'
          value={exp.country}
          text={'Country'}
          handleChange={handleChange}
        />
      </div>
      <DateInput start={exp.start} end={exp.end} handleChange={handleChange} />
      <DescriptionInput desc={exp.desc} handleChange={handleChange} />
      <ButtonInput save={() => update(exp)} del={() => del(exp)} />
    </>
  )
}
