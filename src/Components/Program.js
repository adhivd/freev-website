import React from 'react';
import './../styles/App.css';
import GenericTop from './GenericTop';
import GenericPage from './GenericPage';

function Program() {

    return (
        <section>
            <GenericTop
                header={'Program'}
                description={'Each semester the brightest UC Berkeley student founders apply to Free Ventures to bring their dissertation research, side projects, or innovative products to market.'}
            />
            <GenericPage>
            </GenericPage>
        </section>
    );
}

export default Program;
