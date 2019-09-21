import React, { Component } from 'react';
import './style.scss';
import ChatBot from 'react-simple-chatbot';
import PropTypes from 'prop-types';
var validator = require('validator');
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';

const themeset = {
  background: '#f5f8fb',
  fontFamily: "Roboto", 
  headerBgColor: '#BA0802',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#BA0802',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

const optionstyle = {
  border: '2px solid #BA0802',
  borderRadius: '10px',
  backgroundColor: 'white',
  color: '#BA0802',
  padding: '6px 10px',
  fontSize: '12px',
  cursor: 'pointer',
}



//Styling page using styled-components

const Div = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
`;
const Container = styled.div`
width: 450px;
@media only screen and (max-width: 450px) {
      width: 100%;
}
`;
//Change headerComponent={headerElement} for header styling
//const headerElement = (<headerstyle>TachBot - the Formbot</headerstyle>)

class FormInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trigger: false,
    }
    this.triggetNext = this.triggetNext.bind(this);
  }
  
  triggetNext() {
      this.props.triggerNextStep();
      event.preventDefault();
      this.btn.setAttribute("disabled", "disabled");
  }  
  
  render() {
    return (
      <div className="container">
        <title-1>Please fill up this short form and we'll revert to you</title-1>
          <hr/>
        <form ref={btn => { this.btn = btn; }} onSubmit={() => this.triggetNext()}>
              <label htmlFor="emailid">Email ID</label>
              <input type="text" id="emailid" name="emailid" placeholder="Your email.." />
              <label htmlFor="phone">Phone</label>
              <input type="text" id="phone" name="phone" placeholder="Your phone.." />
              <label htmlFor="country">Country</label>
              <select id="country" name="country">
                <option value="australia">Australia</option>
                <option value="canada">Canada</option>
                <option value="india">India</option>
                <option value="singapore">Singapore</option>
                <option value="usa">USA</option>
              </select>
              <label htmlFor="subject">Message</label>
              <textarea id="message" name="message" placeholder="Write to us about anything else.." style={{height: '200px'}} defaultValue={""} />
              <input type="submit" defaultValue="Submit"/>
          </form>
      </div>
    );
  }
}
  

/*
FormInput.propTypes = {
  triggerNextStep: PropTypes.func,
};

FormInput.defaultProps = {
  triggerNextStep: undefined,
};*/


export default class App extends Component {
  render() {
      return (<Div>
        <Container>  
          <ThemeProvider theme={themeset}>
            <ChatBot headerTitle={"Tachbot"} placeholder={"Type your message"} inputStyle={null} bubbleOptionStyle={optionstyle} botAvatar = {"https://cdn.glitch.com/b537a3b2-ab11-4a99-9547-3055cf9e7ee8%2FHumanAndBot.svg?v=1568892949956"} width={"450px"} steps={[
                {
                  id: '1',
                  message: 'Hi. I am TachBot. What is your name?',
                  trigger: 'name',
                },
                {
                  id: 'name',
                  user: true,
                  trigger: '3',     
                },
                {
                  id: '3',
                  message: '{previousValue}, Thanks! Which of these would you like to do?',
                  trigger: 'options',
                },
                {
                  id: 'options',
                  options: [
                    {value: 'seller-signup', label: 'Signup as a healthcare practitioner', trigger: '5' },
                    {value: 'buyer-signup', label: 'Signup as a pharma company/researcher', trigger: '5' },
                  ],
                },
                {
                  id: '5',
                  component: <FormInput/>,
                  waitAction: true,
                  trigger: 'end-message',
                },
                {
                  id: 'end-message',
                  message: 'Thank you! We will reach out to you very soon',
                  end: true,
                },
              ]}
            />
        </ThemeProvider>
      </Container>  
    </Div>)
  }
}