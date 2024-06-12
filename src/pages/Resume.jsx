import React from "react";
import leesresume from '../assets/resume.pdf';

const styles = {
  downloadlink: {
    padding: "10px 10px 10px 20px",
  },
  listHeader: {
    color: "white",
  },
  listText: {
    color: "white",
    fontSize: "20px",
  },
  contentBox: {
    padding: "10px 10px 10px 64px",
  },
 
};

export default function Resume() {
  return (
    <div>
      <div style={styles.downloadlink}>
        <h2 style={styles.listText}>
          Click here to download:{" "}
          <a className="active" href={leesresume} download >
            Resume{" "}
          </a>
        </h2>
      </div>
      <div style={styles.contentBox}>
        <h2 style={styles.listHeader}>Front-End Proficiencies</h2>
        <ul style={styles.listText}>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>JQuery</li>
          <li>Responsive Design</li>
          <li>React</li>
          <li>Bootstrap</li>
        </ul>
      </div>
      <div style={styles.contentBox}>
        <h2 style={styles.listHeader}>Back-End Proficiencies</h2>
        <ul style={styles.listText}>
          <li>OOP</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL, Sequelize</li>
          <li>MongoDB, Mongoose</li>
          <li>REST</li>
          <li>GraphQL</li>
        </ul>
      </div>
    </div>
  );
}
