export default function DateInput({ start, end, date, handleChange }) {
  return (
    <div className='row'>
      <div>
        <label htmlFor='start date'>
          Start Date<span>optional</span>
        </label>
        <input
          type='month'
          max={date}
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
          max={date}
          id='end'
          placeholder='End Date'
          value={end}
          onChange={(e) => handleChange({ end: e.target.value })}
        />
      </div>
    </div>
  )
}
