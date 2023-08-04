import { useState } from 'react'
import DateInput from './DateInput'
import DescriptionInput from './DescriptionInput'
import ButtonInput from './ButtonInput'
import CustomInput from './CustomInput'

export default function Project({ init, id, update, del }) {
  const def = {
    id: id,
    name: '',
    sub: '',
    start: '',
    end: '',
    description: '',
  }
  const [project, setProject] = useState(init ? init : def)
  const handleChange = (prop) => setProject({ ...project, ...prop })

  return (
    <>
      <CustomInput
        set='name'
        value={project.name}
        text='Project Title'
        req={true}
        handleChange={handleChange}
      />
      <CustomInput
        set='sub'
        value={project.sub}
        text='Sub Title'
        handleChange={handleChange}
      />

      <DateInput
        start={project.start}
        end={project.end}
        handleChange={handleChange}
      />
      <DescriptionInput desc={project.desc} handleChange={handleChange} />
      <ButtonInput save={() => update(project)} del={() => del(project)} />
    </>
  )
}
