import React from 'react';
import './../styles/App.css';
import GenericTop from './GenericTop';
import GenericPage from './GenericPage';

function Apply() {

    return (
        <section>
            <GenericTop
                header={'Apply'}
                description={'Insert description here'}
            />
            <GenericPage>
            </GenericPage>
        </section>
    );
}

export default Apply;
