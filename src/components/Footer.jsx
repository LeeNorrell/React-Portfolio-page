import React from 'react'
import { FaGithubSquare } from "react-icons/fa";
import { ImStackoverflow } from "react-icons/im";

const styles = {
  foot: {
    display: 'flex',
    justifyContent: 'center',
    fontSize: '6vw',
  },
  icon: {
    margin: '4px',
    color: 'crimson'
  },
  icon2: {
    margin: '4px',
    color: 'deepskyblue'
  }
}

export default function Footer() {
  return (
    <footer style={styles.foot}>
        
            <a style={styles.icon} href="https://github.com/LeeNorrell"><FaGithubSquare /></a>
      
            <a style={styles.icon2} href="https://stackoverflow.com/users/24171456/lee-norrell"><ImStackoverflow /></a>
      
    </footer>
  )
}
