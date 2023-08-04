export default function LevelInput({ level, handleChange }) {
  return (
    <div>
      <label htmlFor='level'>
        Select skill level<span>optional</span>
      </label>
      <select
        id='level'
        onChange={(e) => handleChange({ level: e.target.value })}
      >
        <option value='' disabled hidden>
          Skill level
        </option>
        <option value='0'>Novice</option>
        <option value='1'>Beginner</option>
        <option value='2'>Competent</option>
        <option value='3'>Proficient</option>
        <option value='4'>Expert</option>
      </select>
    </div>
  )
}
