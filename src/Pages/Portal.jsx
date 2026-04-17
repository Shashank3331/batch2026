import React from 'react'
import { createPortal } from 'react-dom'

function Portal () {
  return createPortal(
    <>
      <h1>This is Portal</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
        pariatur!
      </p>
    </>,
    document.getElementsByClassName('another-root')[0]
  )
}

export default Portal
