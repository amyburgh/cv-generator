export default function CustomInput({
  type = 'text',
  set,
  value,
  text,
  req = false,
  handleChange,
}) {
  return (
    <div>
      <label htmlFor={set}>
        {text}
        <span>{req ? '*' : 'optional'}</span>
      </label>
      <input
        type={type}
        id={set}
        placeholder={'Enter ' + text}
        value={value}
        required={req}
        onChange={(e) => handleChange({ [set]: e.target.value })}
      />
    </div>
  )
}
