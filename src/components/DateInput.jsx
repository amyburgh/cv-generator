export default function DateInput({ start, end, handleChange }) {
  const dateToday = /\d{4}-\d{2}/.exec(new Date().toISOString())
  return (
    <div className='row'>
      <div>
        <label htmlFor='start date'>
          Start Date<span>optional</span>
        </label>
        <input
          type='month'
          max={dateToday}
          id='start date'
          placeholder='Start Date'
          value={start}
          onChange={(e) => handleChange({ start: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor='end date'>
          End date<span>optional</span>
        </label>
        <input
          type='month'
          max={dateToday}
          id='end'
          placeholder='End Date'
          value={end}
          onChange={(e) => handleChange({ end: e.target.value })}
        />
      </div>
    </div>
  )
}
