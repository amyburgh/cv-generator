import { useState } from 'react'
import ButtonInput from './ButtonInput'
import LevelInput from './LevelInput'
import CustomInput from './CustomInput'

export default function Education({ init, id, update, del }) {
  const def = {
    id: id,
    name: '',
    sub: '',
    level: '',
  }
  const [skill, setSkill] = useState(init ? init : def)
  const handleChange = (prop) => setSkill({ ...skill, ...prop })

  return (
    <>
      <CustomInput
        set='name'
        value={skill.name}
        text='Skill'
        req={true}
        handleChange={handleChange}
      />
      <CustomInput
        set='sub'
        value={skill.sub}
        text='Information/ Sub-skills'
        handleChange={handleChange}
      />
      <LevelInput level={skill.level} handleChange={handleChange} />
      <ButtonInput save={() => update(skill)} del={() => del(skill)} />
    </>
  )
}
