import React from 'react'
import leesresume from '../assets/resume.pdf'

const styles = {
  downloadlink: {
    fontSize: '24px',
    padding: '10px 10px 10px 20px',
  },
  listHeader: {
    color: 'white'
  },
  listText: {
    color: 'white',
    fontSize: '20px'
  },
  contentBox: {
    padding: '10px 10px 10px 64px'
  }
}

export default function Resume() {
  return (
    <div>
      <div style={styles.downloadlink}>
      <a href ={leesresume} download> Resume </a>  
      </div>
      <div style={styles.contentBox}>
        <h2 style={styles.listHeader}>Front-End Proficiencies</h2>
          <ul>
            <li style={styles.listText}>HTML</li>
            <li style={styles.listText}>CSS</li >
            <li style={styles.listText}>JavaScript</li >
            <li style={styles.listText}>JQuery</li >
            <li style={styles.listText}>Responsive Design</li >
            <li style={styles.listText}>React</li >
            <li style={styles.listText}>Bootstrap</li >
          </ul>
      </div>
      <div style={styles.contentBox}>
        <h2 style={styles.listHeader}>Back-End Proficiencies</h2>
        <ul>
          <li style={styles.listText}>OOP</li >
          <li style={styles.listText}>Node</li >
          <li style={styles.listText}>Express</li >
          <li style={styles.listText}>MySQL, Sequelize</li >
          <li style={styles.listText}>MongoDB, Mongoose</li >
          <li style={styles.listText}>REST</li>
          <li style={styles.listText}>GraphQL</li>
        </ul>
      </div>
    </div>
  )
}
