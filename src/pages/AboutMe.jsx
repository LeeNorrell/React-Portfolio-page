import React from "react";
import profile from "../Images/profile.png";

const styles = {
  creator: {
    marginTop: '5vw',
    marginLeft: '38vw',
    marginBottom: '5vw',
    width: '20vw'
  },
  text: {
    fontSize: '20px',
    display: 'flex',
    flexWrap: 'wrap',
    padding: '20px',
    marginLeft: '24px'
  },
  textbox: {
    padding: '20px'
  }
}

export default function AboutMe() {
  return (
    <div>
      <img style={styles.creator} src={profile} alt="profile pic" />
      <div style={styles.textbox}>
      <p style={styles.text}>
        {" "}
        Hello, My name is Lee Norrell.I live in Austin,Texas. I was working as a
        welder back in Alabama before I decided I wanted to try something
        different.
      </p>
      </div>
    </div>
  );
}
