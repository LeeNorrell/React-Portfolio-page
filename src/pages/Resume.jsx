import React from 'react'
import leesresume from '../assets/resume.pdf'

export default function Resume() {
  return (
    <div>
      Resume
      <a href ={leesresume} download> Link Text </a>  

      <div>
        <h2></h2>
      </div>
    </div>
  )
}
