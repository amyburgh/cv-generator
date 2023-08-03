export default function DescriptionInput({ desc, handleChange }) {
  return (
    <div>
      <label htmlFor='description'>
        Description<span>optional</span>
      </label>
      <textarea
        type='text'
        id='description'
        placeholder='Describe your role & achievements...'
        value={desc}
        onChange={(e) => handleChange({ desc: e.target.value })}
      />
    </div>
  )
}
