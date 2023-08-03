export default function PrimaryInput({ name, text, handleChange }) {
  return (
    <div>
      <label htmlFor='name'>
        {text}
        <span>*</span>
      </label>
      <input
        type='text'
        id='name'
        placeholder={'Enter ' + text}
        value={name}
        onChange={(e) => handleChange({ name: e.target.value })}
        // required
      />
    </div>
  )
}
