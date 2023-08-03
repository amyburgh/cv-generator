import { useState } from 'react'
import DateInput from './DateInput'
import LocationInput from './LocationInput'
import PrimaryInput from './PrimaryInput'
import SecondaryInput from './SecondaryInput'
import DescriptionInput from './DescriptionInput'
import ButtonInput from './ButtonInput'

export default function Experience({ date, id, update, del }) {
  const init = {
    id: id,
    name: '',
    sub: '',
    city: '',
    country: '',
    start: '',
    end: '',
  }

  const [exp, setExp] = useState(init)

  const handleChange = (prop) => setExp((prev) => ({ ...prev, ...prop }))

  const handleDel = () => {
    setExp(init)
    del({ experience: exp })
  }

  return (
    <div className='Experience user'>
      <div className='input-heading'>
        <h2>Experience</h2>
        <span className='page'>{'1 of 1'}</span>
      </div>
      <form onSubmit={(e) => e.preventDefault()}>
        <PrimaryInput
          name={exp.name}
          text='Job Title'
          handleChange={handleChange}
        />
        <SecondaryInput
          name={exp.sub}
          text='Employer'
          handleChange={handleChange}
        />

        <LocationInput
          city={exp.city}
          country={exp.country}
          handleChange={handleChange}
        />
        <DateInput
          start={exp.start}
          end={exp.end}
          date={date}
          handleChange={handleChange}
        />
        <DescriptionInput desc={exp.desc} handleChange={handleChange} />
        <ButtonInput save={() => update({ experience: exp })} del={handleDel} />
      </form>
    </div>
  )
}
