import { useState } from "react";
import { validateEmail } from "../utils/helper";

const styles = {
  page: {
    paddingLeft: '10vw'
  },
  header: {
    fontSize: '36px',
    marginTop: '2vw',
    color: 'white',
  },
  labelname: {
    fontSize: '24px',
    color: 'white',
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
    background: 'linear-gradient(to bottom right,#2c4053, rgb(38, 83, 121)',
    marginTop: '6px',
    color: 'white'
  },
  submit: {
    marginTop: '10px',
    color: 'white',
    background: 'linear-gradient(to bottom right,#2c4053, rgb(38, 83, 121)',
  },
  contactMe: {
    color:'white',
    background: 'linear-gradient(to bottom right,#2c4053, rgb(38, 83, 121)',
  }

}

export default function Contact() {

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
   
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    } 
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email) || !name) {
      setErrorMessage('Email or name is invalid');
      
      return;
      
    }

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div style={styles.page}>
      <h1 style={styles.header}>
      Contact
      </h1>
      <form className="mt-5" onSubmit={handleFormSubmit}>
        <div style={styles.labelbox}>
          <label style={styles.labelname}>Name:</label>
          <input style={styles.box} 
          value={name} 
          name="name" 
          onChange={handleInputChange}
          type="text"
           placeholder="Please Enter Name" />
        </div>
        <div style={styles.labelbox}>
          <label style={styles.labelname}>Email:</label>
          <input style={styles.box}
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Please Enter Email" />
        </div>
        <div style={styles.labelbox}>
          <label style={styles.labelname}>Request:</label>
          <textarea style={styles.box}
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
           placeholder="Please Enter Request" ></textarea>
        </div>
        <button style={styles.submit}>Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
      <div style={styles.contactMe} className="mt-5 pt-2 ps-3 border w-50">
        <h5>If you need to contact me please email: </h5>
        <p>Leenorrell22@gmail.com</p>
      </div>
    </div>
  );
}
