import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components';
import ButtonDefault from '../components/ButtonDefault';

const PageView = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  background-color: rgba(247, 217, 99, 0.2);
`

const Inner = styled.div`
  padding: 4em 4em 2em 4em;
  width: 75em;
  max-width: 100%
`

const Split = styled.div`
  display: flex;
  & > :nth-child(2n-1) {
    border-right: solid 1px rgba(255, 255, 255, 0.15);
  }
`

const ContactForm = styled.form`
  flex-basis: 66%;
  padding-right: 2em;

`

const ContactFormInputGroup = styled.div`
  margin-bottom: 1em;
`

const ContactFormInline = ContactFormInputGroup.extend`
  display: flex;
  & * {
    margin-right: 1em;
  }
  & :last-child {
    margin-right: 0;
  }
`

const ContactFormGroupInlineHalf = styled.div`
  flex-basis: 50%
`

const ContactFormInputText = styled.input`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.25em;
  border: solid 1px rgba(255, 255, 255, 0.15);
  outline: none;
  color: inherit;
  display: block;
  height: 2.75em;
  width: 100%;
  padding: 0 1em;
  text-decoration: none;
  &:focus {
    border: solid 2px rgba(255, 255, 255, 0.5);
  }
`

const ContactFormTextArea = ContactFormInputText.withComponent('textarea').extend`
  height: 16em;
  padding: 0.75em 1em;
`

const ContactInfo = styled.div`
  flex-basis: 33%;
  padding-left: 2em;
`

const ContactInfoList = styled.ul`
  list-style-type: none;
  padding: 0;
`

const ContactPage = ({ transition }) => (
  <div style={transition && transition.style}>
    <PageView>
      <Inner>
        <h2>Get in touch</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores in officiis, sequi dolores, hic dolor veritatis molestiae aut animi beatae iusto minus asperiores totam? Iste ut voluptatibus, eum provident reprehenderit!</p>
        <Split>
          <ContactForm>

            <ContactFormInline>
              <ContactFormGroupInlineHalf>
                <label htmlFor="name">Name</label>
                <ContactFormInputText type="text" name="name" id="name"/>
              </ContactFormGroupInlineHalf>
              <ContactFormGroupInlineHalf>
                <label htmlFor="email">Email</label>
                <ContactFormInputText type="email" name="email" id="email"/>
              </ContactFormGroupInlineHalf>
            </ContactFormInline>

            <ContactFormInputGroup>
              <label htmlFor="message">Message</label>
              <ContactFormTextArea name="message" id="message" rows="5"></ContactFormTextArea>
            </ContactFormInputGroup>

            <ButtonDefault>Send message</ButtonDefault>
          </ContactForm>

          <ContactInfo>
            <ContactInfoList>
              <li>
                <h3>Address</h3>
              </li>
              <li>
                <h3>Email</h3>
              </li>
              <li>
                <h3>Phone</h3>
              </li>
              <li>
                <h3>Social</h3>
              </li>
            </ContactInfoList>
          </ContactInfo>
        </Split>
      </Inner>
    </PageView>
  </div>
)

export default ContactPage;
