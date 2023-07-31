import { useState } from 'react'
import { FiEdit, FiDownload } from 'react-icons/fi'

export default function Title() {
  const [title, setTitle] = useState('CV Template')
  return (
    <div className='Title'>
      <label>
        <FiEdit className='edit' color='var(--cl-mild)' size='1rem' />
        <input
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <button className='download'>
        <FiDownload />
        <span>Download</span>
      </button>
    </div>
  )
}