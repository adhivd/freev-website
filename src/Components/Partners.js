import React from 'react';
import ContactForm from './ContactForm';
import './../styles/App.css';
import GenericTop from './GenericTop';
import GenericPage from './GenericPage';
const sgMail = require('@sendgrid/mail');
var request = require("request");


function Partners() {


    function handleClick(e) {
        e.preventDefault();

        // fetch('https://api.sendgrid.com/v3/mail_settings', {
        //       method: 'POST',
        //       headers: {
        //         authorization: 'Bearer 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',
        //       },
        //       // body: JSON.stringify(options),
        //       body: '{}',
        //   })
        //   .then((response) => {
        //       console.log("here", response);
        //         return response.json();
        //     })
        //   .then((responseJson) => {
        //       console.log("hmm", responseJson);
        //   });
        console.log('The link was clicked.');
  }


    return (
        <section>
            <GenericTop
                header={'hello'}
                description={'hello'}
            />
            <GenericPage>
                <p>h1</p>
                <a href="#" onClick={handleClick}>
                    Click me
                </a>
                <ContactForm />
            </GenericPage>
        </section>
    );
}

export default Partners;
