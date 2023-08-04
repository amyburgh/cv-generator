import { useState } from 'react'

export default function Form({ type, Input, update }) {
  const [id, setId] = useState(0)
  const [userIn, setUserIn] = useState([])
  const [field, setField] = useState({
    count: 0,
    rend: '',
  })

  const handleDel = (prop) => {
    const temp = userIn.slice(0, -1)
    setField((prev) => ({
      count: prev.count - 1,
      rend: temp.at(-1),
    }))
    setUserIn(temp)
    update({ [type]: temp })
  }

  const handleUpdate = (prop) => {
    const temp = userIn.filter((e) => e.id !== prop.id)
    const updatedArray = [...temp, prop]
    setUserIn(updatedArray)
    update({ [type]: updatedArray })
  }

  const handleCreate = () => {
    setField({
      count: field.count + 1,
      rend: null,
    })
    setId(id + 1)
  }

  return (
    <div className='user'>
      <div className='input-heading'>
        <h2>{!field.count ? 'Add ' + type : type}</h2>
        <div className='add'>
          <span className='page'>{field.count + ' of ' + field.count}</span>
          <button className='save' onClick={handleCreate}>
            +
          </button>
        </div>
      </div>
      <form onSubmit={(e) => e.preventDefault()}>
        {field.count > 0 && (
          <Input
            key={id}
            id={id}
            init={field.rend}
            update={handleUpdate}
            del={handleDel}
          />
        )}
      </form>
    </div>
  )
}
