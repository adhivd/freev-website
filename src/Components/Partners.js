import React from 'react';
import ContactForm from './ContactForm';
import './../styles/App.css';
import GenericTop from './GenericTop';
import GenericPage from './GenericPage';

function Partners() {

    return (
        <section>
            <GenericTop
                header={'Our Partners'}
                description={'We’re proud to work with a select group of partners who share our passion for supporting Berkeley’s startup ecosystem.'}
            />
            <GenericPage>
            </GenericPage>
        </section>
    );
}

export default Partners;
