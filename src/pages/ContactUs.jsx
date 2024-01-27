import React from 'react';
import '../css/contactus.css';

function ContactUs() {
  return (
    
    <div className="contact">    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"/>
    <div className="con_conbox">
  <div className="con_container">
    <div className="con_content">
      <div className="con_left-side">
        <div className="con_address details">
          <i className="fas fa-map-marker-alt"></i>
          <div className="con_topic">Address</div>
          <div className="con_text-one">Surkhet, NP12</div>
          <div className="con_text-two">Birendranagar 06</div>
        </div>
        <div className="con_phone details">
          <i className="fas fa-phone-alt"></i>
          <div className="con_topic">Phone</div>
          <div className="con_text-one">+0098 9893 5647</div>
          <div className="con_text-two">+0096 3434 5678</div>
        </div>
        <div className="con_email details">
          <i className="fas fa-envelope"></i>
          <div className="con_topic">Email</div>
          <div className="con_text-one">codinglab@gmail.com</div>
          <div className="con_text-two">info.codinglab@gmail.com</div>
        </div>
      </div>
      <div className="con_right-side">
        <div className="con_topic-text">Send us a message</div>
        <p>If you have any work from me or any types of quries related to my tutorial, you can send me message from here. It's my pleasure to help you.</p>
      <form action="#">
        <div className="con_input-box">
          <input type="text" placeholder="Enter your name" /> 
        </div>
        <div className="con_input-box">
          <input type="text" placeholder="Enter your email"/>
        </div>
        <div className="con_input-box message-box">
        <textarea placeholder="Enter your message"></textarea>
        </div>
        <div className="con_button">
          <input type="button" value="Send Now" />
        </div>
      </form>
    </div>
    </div>
    </div>
    </div>
    </div>
    
  );
}

export default ContactUs;
