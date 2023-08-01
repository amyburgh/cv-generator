import { useState } from 'react'

export default function Project({ id, date, update }) {
  const [project, setProject] = useState({
    id: id,
    title: '',
    sub: '',
    start: '',
    end: '',
    description: '',
  })

  return (
    <div className='Project user'>
      <h2>Create Project</h2>
      <hr />
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <label htmlFor='title'>
            Project title<span className='required'>*</span>
          </label>
          <input
            type='text'
            id='title'
            placeholder='Enter Project title'
            value={project.title}
            required
            onChange={(e) => setProject({ ...project, title: e.target.value })}
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
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor='description'>
            Description<span>optional</span>
          </label>
          <textarea
            id='description'
            value={project.description}
            placeholder='Add a description of your project... '
            onChange={(e) =>
              setProject({ ...project, description: e.target.value })
            }
          />
        </div>

        <button className='save' onClick={() => update({ project: project })}>
          Save
        </button>
      </form>
    </div>
  )
}
