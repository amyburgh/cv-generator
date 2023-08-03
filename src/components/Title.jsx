import { FiEdit, FiDownload } from 'react-icons/fi'
import { jsPDF } from 'jspdf'

export default function Title({ title, update }) {
  const downloadPDF = () => {
    const doc = new jsPDF('p', 'pt', 'a4', true)
    doc.html(document.querySelector('.cv')).then(() => {
      doc.save(title + '.pdf')
    })
  }

  const download = () => {
    let pdf = new jsPDF('p', 'pt', 'a4')
    const cv = document.querySelector('.cv')
    let pWidth = pdf.internal.pageSize.width // 595.28 is the width of a4
    let pHeight = pdf.internal.pageSize.height
    let srcWidth = cv.offsetWidth
    let srcHeight = cv.offsetHeight
    console.log({
      pWidth,
      pHeight,
      srcWidth,
      srcHeight,
      pRatio: pHeight / pWidth,
      sRatio: srcHeight / srcWidth,
    })
    let scale = Math.min(pWidth / srcWidth, pHeight / srcHeight)
    pdf.html(cv, {
      x: 0,
      y: 0,
      html2canvas: {
        scale: scale,
      },
      callback: function () {
        window.open(pdf.output('bloburl'))
      },
    })
  }

  return (
    <div className='Title'>
      <label>
        <FiEdit className='edit' color='var(--cl-mild)' size='1rem' />
        <input
          type='text'
          value={title}
          onChange={(e) =>
            update({
              title: e.target.value,
            })
          }
        />
      </label>
      <button className='download' onClick={download}>
        <FiDownload />
        <span>Download</span>
      </button>
    </div>
  )
}
