import { useState } from 'react'
import { FiPlusCircle } from 'react-icons/fi'

export default function Form(prop) {
  const [id, setId] = useState('1')

  const createId = () => {
    setId((prev) => prev + 1)
    return id
  }

  const array = []

  return (
    <div className='user'>
      <div className='input-heading'>
        <h2>{prop.type}</h2>
        <div className='add'>
          <span className='page'>{'1 of 1'}</span>
          <button className='save'>+</button>
        </div>
      </div>
      <form onSubmit={(e) => e.preventDefault()}></form>
    </div>
  )
}
