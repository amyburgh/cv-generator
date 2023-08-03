export default function ButtonInput({ save, del }) {
  return (
    <div className='row end'>
      <button className='delete' onClick={del}>
        Delete
      </button>
      <button className='save' onClick={save}>
        Save
      </button>
    </div>
  )
}
