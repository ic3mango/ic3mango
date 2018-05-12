import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components';
import { SocialIcon } from 'react-social-icons';
import { ButtonDefault } from '../components/Buttons';
import { PageViewTransparent, Inner } from '../components/Views';

import media from '../utils/media';


const PageView = PageViewTransparent.extend`
  background-color: rgba(120, 206, 220, 0.2);
  ${media.xs`
    padding-top: 3.5em;
  `}
`

const Split = styled.div`
  display: flex;
  & > :nth-child(2n-1) {
    border-right: solid 1px rgba(255, 255, 255, 0.15);
  }
  ${media.xs`
    display: block;
    & > :nth-child(2n-1) {
      border-right: 0;
    }
  `}
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
  ${media.xs`
    display: block;
  `}

  & * {
    margin-right: 1em;
    ${media.xs`
      margin-right: 0;
    `}
  }
  & :last-child {
    margin-right: 0;
  }
`

const ContactFormGroupInlineHalf = styled.div`
  flex-basis: 50%;

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
  resize: none;
`

const ButtonSubmit = ButtonDefault.withComponent('input').extend``;

const ContactInfo = styled.div`
  flex-basis: 33%;
  padding-left: 2em;
`

const ContactInfoList = styled.ul`
  list-style-type: none;
  padding: 0;
`

const SocialIconsList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  & li {
    cursor: pointer;
    position: relative;
    margin-right: 10px;
    height: 50px;
    &:last-child {
      margin-right: 0;
    }

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      transform: scale(0);
      opacity: 0.3;
      background-color: #fff;
      border-radius: 50%;
      transition: all 0.2s ease;
      z-index: -2;
    }

    &:hover::after {
      opacity: 0.15;
      transform: scale(1);
    }
  }
`

var socialUrls = ["https://twitter.com/ic3mango", "https://github.com/ic3mango", "https://plus.google.com/u/0/117823491645128372085"];

const ContactPage = ({ transition }) => (
  <div style={transition && transition.style}>
    <PageView>
      <Inner>
        <h2>Get in touch</h2>
        <Split>
          <ContactForm action="mailto:stefantrysil@gmail.com" method="GET">

            <ContactFormInline>
              <ContactFormGroupInlineHalf>
                <label htmlFor="subject">Name</label>
                <ContactFormInputText type="text" name="subject" id="subject"/>
              </ContactFormGroupInlineHalf>
              <ContactFormGroupInlineHalf>
                <label htmlFor="email">Email</label>
                <ContactFormInputText type="email" name="email" id="email"/>
              </ContactFormGroupInlineHalf>
            </ContactFormInline>

            <ContactFormInputGroup>
              <label htmlFor="body">Message</label>
              <ContactFormTextArea name="body" id="body"></ContactFormTextArea>
            </ContactFormInputGroup>

            <ButtonSubmit type="submit" value="send" />
          </ContactForm>

          <ContactInfo>
            <ContactInfoList>
              <li>
                <h3>Name</h3>
                <p>Stefan Jiang</p>
              </li>
              <li>
                <h3>Email</h3>
                <p>stefantrysil@gmail.com</p>
              </li>
              <li>
                <h3>Phone</h3>
                <p>+1 250 509 1367</p>
              </li>
              <li>
                <h3>Social</h3>
                <SocialIconsList>
                  {socialUrls.map((url, i) =>
                    <li key={i}>
                      <SocialIcon url={url} color="rgba(255, 255, 255, 0.5)"></SocialIcon>
                    </li>
                  )}
                </SocialIconsList>
              </li>
            </ContactInfoList>
          </ContactInfo>
        </Split>
      </Inner>
    </PageView>
  </div>
)

export default ContactPage;
