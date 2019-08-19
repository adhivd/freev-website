import React from 'react';
import './../styles/App.css';
import GenericTop from './GenericTop';
import GenericPage from './GenericPage';

function Program() {

    return (
        <section>
            <GenericTop
                header={'Program'}
                description={'Insert description here'}
            />
            <GenericPage>
            </GenericPage>
        </section>
    );
}

export default Program;
