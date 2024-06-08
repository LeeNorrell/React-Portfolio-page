import React from "react";
import profile from "../Images/profile.png";

const styles = {
  creator: {
    width: '20vw'
  },
  text: {
    fontSize: '20px',
    padding: '20px',
    color: 'white'   
  },
  textbox: {
    padding: '20px',
    display:'flex', 
    flexWrap: 'wrap', 
    flexDirection: 'column'
  }, 
  container: {
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center', 
    padding: "2% 1% 1% 1%",
  }
}

export default function AboutMe() {
  return (
    <div style={styles.container}>
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
