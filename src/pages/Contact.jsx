import React from "react";

// THEN I see a contact form with fields for a name, an email address, and a message
// WHEN I move my cursor out of one of the form fields without entering text
// THEN I receive a notification that this field is required
// WHEN I enter text into the email address field
// THEN I receive a notification if I have entered an invalid email address

export default function Contact() {
  return (
    <div>
      Contact
      <form>
      <div>
          <label >Name:</label>
          <input placeholder="Please Enter Name" />
        </div>
        <div>
          <label >Email:</label>
          <input placeholder="Please Enter Email" />
        </div>
        <div>
          <label >Request:</label>
          <input placeholder="Please Enter Request" />
        </div>
        <button>
          Submit
        </button>
      </form>

      <div>
        <h5>if you need to conatact me please email me at: </h5>
      </div>
    </div>
  );
}
