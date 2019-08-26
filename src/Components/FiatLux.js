import React from 'react';
import './../styles/App.css';
import GenericTop from './GenericTop';
import GenericPage from './GenericPage';
import ContactForm from './ContactForm';

function FiatLux() {

    return (
        <section>
            <GenericTop
                header={'Fiat Lux'}
                description={'Insert description here'}
            />
            <GenericPage>
                <img src="" alt="Fiat Lux Image 1" />
                <img src="" alt="Fiat Lux Image 2" />
                <h2>Overview</h2>
                <p>Overciew text</p>
                <p>Overview additional text</p>
                <h2>Get Involved</h2>
                <p>Attending</p>
                <p>If you are a student interested in attending Fiat Lux, send an email to <a href="mailto:aashi@freeventures.org">aashi@freeventures.org</a>.</p>
                <p>Speaking</p>
                <p>If you are an industry professional looking to get involved as a speaker or company sponsor pelase fill out the form below</p>
                <ContactForm />
            </GenericPage>
        </section>
    );
}

export default FiatLux;
