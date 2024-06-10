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
        Greetings! I'm Lee Norrell, a dedicated and knowledgable coder with a passion for crafting elegant solutions to complex problems. With a solid foundation in various programming languages and a knack for understanding user needs, I specialize in developing efficient and scalable software applications. My journey in coding has been marked by a commitment to studying and improving my knowledge, ensuring that I deliver cutting-edge solutions that meet and exceed client expectations. I thrive in collaborative environments where I can leverage my skills to contribute to impactful projects. Let's collaborate and turn ideas into reality through code!
      </p>
      </div>
    </div>
  );
}
