export default function SecondaryInput({ sub, text, handleChange }) {
  return (
    <div>
      <label htmlFor='secondary'>
        {text}
        <span>optional</span>
      </label>
      <input
        type='text'
        id='secondary'
        placeholder={'Enter ' + text}
        value={sub}
        onChange={(e) => handleChange({ sub: e.target.value })}
      />
    </div>
  )
}
