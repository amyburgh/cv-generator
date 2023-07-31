export default function General({ name, job, email, phone, address }) {
  return (
    <div className='Bio user'>
      <h2>Personal Details</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <label htmlFor='name'>Full Name</label>
          <input type='text' id='name' value={name} required />
        </div>

        <div>
          <label htmlFor='job'>Job Title</label>
          <input type='text' id='job' value={job} required />
        </div>

        <div className='row'>
          <div>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' value={email} required />
          </div>

          <div>
            <label htmlFor='phone'>Phone</label>
            <input type='tel' id='phone' value={phone} required />
          </div>
        </div>
        <div>
          <label htmlFor='address'>Address</label>
          <input type='text' id='address' value={address} required />
        </div>

        <button className='next'>Next</button>
      </form>
    </div>
  )
}
