import { useState } from 'react'

export default function Project({ id, date, update }) {
  const [project, setProject] = useState({
    id: id,
    name: '',
    sub: '',
    start: '',
    end: '',
    description: '',
  })

  return (
    <div className='Project user'>
      <h2>Project</h2>
      <hr />
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <label htmlFor='name'>
            Project title<span className='required'>*</span>
          </label>
          <input
            type='text'
            id='name'
            placeholder='Enter Project title'
            value={project.name}
            required
            onChange={(e) => setProject({ ...project, name: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor='sub'>
            Sub title<span>optional</span>
          </label>
          <input
            type='text'
            id='sub'
            placeholder='Enter sub title'
            value={project.sub}
            onChange={(e) => setProject({ ...project, sub: e.target.value })}
          />
        </div>

        <div className='row'>
          <div>
            <label htmlFor='start'>
              Start Date<span>optional</span>
            </label>
            <input
              type='month'
              id='start'
              max={date}
              placeholder='Month'
              value={project.start}
              onChange={(e) =>
                setProject({ ...project, start: e.target.value })
              }
            />
          </div>

          <div>
            <label htmlFor='end'>
              End Date<span>optional</span>
            </label>
            <input
              type='month'
              id='country'
              max={date}
              value={project.end}
              placeholder='Month'
              onChange={(e) => setProject({ ...project, end: e.target.value })}
            />
          </div>
        </div>

        <div>
          <label htmlFor='desc'>
            Description<span>optional</span>
          </label>
          <textarea
            id='desc'
            value={project.description}
            placeholder='Add a description of your project... '
            onChange={(e) => setProject({ ...project, desc: e.target.value })}
          />
        </div>

        <button className='save' onClick={() => update({ project: project })}>
          Save
        </button>
      </form>
    </div>
  )
}
