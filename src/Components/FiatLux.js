import React from 'react';
import './../styles/App.css';
import GenericTop from './GenericTop';
import GenericPage from './GenericPage';

function FiatLux() {

    return (
        <section>
            <GenericTop
                header={'Fiat Lux'}
                description={'Insert description here'}
            />
            <GenericPage>
            </GenericPage>
        </section>
    );
}

export default FiatLux;
