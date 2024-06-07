import React from "react";

const styles = {
  page: {
    paddingLeft: '10vw'
  },
  header: {
    fontSize: '36px',
    marginTop: '2vw',
    color: 'red',
  },
  labelname: {
    fontSize: '24px',
    color: 'red',
  },
  labelbox: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    width: '40vw',
    marginTop: '20px'
    
  },
  box: {
    fontSize: '13px',
    fontWeight: 'bolder',
    background: 'lavender',
    marginTop: '6px'
  },
  submit: {
    marginTop: '10px',
    color: 'red',
    background: 'black',
  },

}

export default function Contact() {
  
  return (
    <div style={styles.page}>
      <h1 style={styles.header}>
      Contact
      </h1>
      <form className="mt-5">
        <div style={styles.labelbox}>
          <label style={styles.labelname}>Name:</label>
          <input style={styles.box} placeholder="Please Enter Name" />
        </div>
        <div style={styles.labelbox}>
          <label style={styles.labelname}>Email:</label>
          <input style={styles.box} placeholder="Please Enter Email" />
        </div>
        <div style={styles.labelbox}>
          <label style={styles.labelname}>Request:</label>
          {/* <input style={styles.bigbox} placeholder="Please Enter Request" /> */}
          <textarea style={styles.box} placeholder="Please Enter Request" ></textarea>
        </div>
        <button style={styles.submit}>Submit</button>
      </form>
      <div  className="mt-5 pt-2 ps-3 border w-50">
        <h5>if you need to conatact me please email me at: </h5>
        <p>Leenorrell22@gmail.com</p>
      </div>
    </div>
  );
}
