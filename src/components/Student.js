import React, { useState } from "react";
import "./StudentDetails.css";

const Student = () => {
  const [showPopup, setShowPopup] = useState(true);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <div className="close-icon" onClick={handleClosePopup}>
              X
            </div>
            <h3>Connect to us</h3>
            <form>
              <div className="container">
                <div className="contact-form">
                  <form
                    action="https://formspree.io/f/mbjegoel"
                    method="POST"
                    className="contact-inputs">
                    <input
                      type="text"
                      placeholder="username"
                      name="username"
                      required
                      autoComplete="off"
                    />
                    <input
                      type="text"
                      placeholder="mobile number"
                      name="Number"
                      required
                      autoComplete="off"
                    />
                    <input
                      type="text"
                      placeholder="Age"
                      name="Age"
                      required
                      autoComplete="off"
                    />
                    <input
                      type="text"
                      placeholder="Qualification"
                      name="Qualification"
                      required
                      autoComplete="off"
                    />
                    <textarea
                      name="Message"
                      cols="30"
                      rows="10"
                      required
                      autoComplete="off"
                      placeholder="Enter your message"></textarea>
                    <input type="submit" value="Submit" />
                  </form>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Student;




