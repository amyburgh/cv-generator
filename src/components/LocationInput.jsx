export default function LocationInput({ city, country, handleChange }) {
  return (
    <div className='row'>
      <div>
        <label htmlFor='city'>
          City<span>optional</span>
        </label>
        <input
          type='text'
          id='city'
          placeholder='Enter City'
          value={city}
          onChange={(e) => handleChange({ city: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor='country'>
          Country<span>optional</span>
        </label>
        <input
          type='text'
          id='country'
          placeholder='Enter Country'
          value={country}
          onChange={(e) => handleChange({ country: e.target.value })}
        />
      </div>
    </div>
  )
}
