import React from "react";
// import './Contact.css';
import emailjs from "emailjs-com";
import Navbar from "../../Shared/Navbar";
import Footer from "../../Home/Footer/Footer";
import "../ContactPage/ContactPage.css";

const ContactPage = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "123456789",
        "template_asflrig",
        e.target,
        "user_v4vlz1DE2XxUfPzTebpk7"
      )
      .then(
        (result) => {
          if (result) {
            alert("your message successfully sent!");
          }
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <div style={{ backgroundColor: "#211530" }}>
      <div style={{ paddingBottom: "100px" }}>
        <Navbar></Navbar>
      </div>
      <section id="ContactPage" className="contact-responsive">
        <div className=" container-fluid">
          <h2 className="text-white text-center pb-5">
            <span
              style={{
                borderBottom: "2px solid #00ffd5",
                paddingBottom: "6px",
                fontSize: "1.2rem",
                letterSpacing: "2px",
                fontWeight: "bold",
                textTransform: "uppercase",
              }}
            >
              Get In Touch
            </span>
          </h2>
          <div
            className="row pl-4"
            style={{ maxWidth: "1300px", margin: "auto" }}
          >
            <div className="col-md-8 col-sm-12 ">
              <form className="contact-form" action="" onSubmit={sendEmail}>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    style={{ border: "1px solid gray" }}
                    placeholder="Your name "
                    id=""
                    required
                  />

                  <input
                    type="email"
                    name="email"
                    style={{ border: "1px solid gray" }}
                    placeholder="Your email address "
                    id=""
                    required
                  />

                  <input
                    type="text"
                    name="subject"
                    style={{ border: "1px solid gray" }}
                    placeholder="Subject"
                    id=""
                    required
                  />

                  <textarea
                    type="text-area"
                    name="message"
                    placeholder=" Your message "
                    id=""
                    required
                    rows="4"
                    cols="38"
                    className="order-text-area  contact-text-area"
                    style={{
                      height: " 160px",
                      paddingTop: "15px",
                      border: "1px solid gray",
                    }}
                  />
                </div>

                <div className="" style={{ width: " 170px" }}>
                  <input
                    className="submit-button "
                    type="submit"
                    value="Submit"
                    style={{
                      background: "gray",
                      padding: " 0 50px 0 45px",
                      width: "170px",
                      height: "42px",
                      marginTop: "-10px",
                      border: "none",
                      color: "white",
                      fontWeight: "bold",
                      textTransform: "uppercase",
                      letterSpacing: "2px",
                    }}
                  />
                </div>
              </form>
            </div>

            <div className="col-md-3 contact-details">
              <h2 style={{ color: "white" }}>Contact Details</h2>
              <p className="address" style={{ color: "gray" }}>
                <span> Md. Jahidul Islam </span>
                <br />
                <span>Dhaka, Bangladesh</span>
                <br />
                <span>+880 1938901990</span>
                <br />
                <span> za0162hid@gmail.com </span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default ContactPage;
