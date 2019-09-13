// Page showing
import React from "react"

import Section from "../section/section"
import { CenteredContent, FormButton, FormContainer } from "./contactSection.css"

function showFlash() {
  let flashMsg = document.querySelector('.flash-success');
  flashMsg.style.display = 'block';
}

const ContactSection = (props) => {
  return (
    <Section
      name={props.name}
      id={props.id}
      className={props.className}
      data-background-color={props["data-background-color"]}
      style={{justifyContent: 'center'}}
    >
      <CenteredContent>
        <h1>Let's work together!</h1>
        <FormContainer>
          <form action="" method="POST">
            <div>
              <label htmlFor='name'>Name</label>
              <input type='text' id='name' name='contact_name' placeholder="Dr. Cool" required />
            </div>
            <div>
              <label htmlFor='email'>Email</label>
              <input type='email' id='email' name='contact_email' placeholder="john.smith@gmail.com" required />
            </div>
            <div>
              <label htmlFor='subject'>Subject</label>
              <input type='text' id='subject' name='contact_subject' defaultValue="I'd like a fantastic website!" />
            </div>
            <div>
              <label htmlFor='message'>Message</label>
              <textarea id='message' name='contact_message' ></textarea>
            </div>
            <div className='button__wrapper'>
              <FormButton type="submit" method="POST" data-netlify="true" onClick={showFlash}>SEND</FormButton>
            </div>
          </form>
        </FormContainer>
        <div className="flash-success">
          <h3>Thanks! I'll get back to you asap!</h3>
        </div>
      </CenteredContent>
    </Section>
  )
}

export default ContactSection;
