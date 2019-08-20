import React from 'react';
import './../styles/App.css';
import './../styles/Portfolio.css';

import GenericTop from './GenericTop';
import GenericPage from './GenericPage';

function Portfolio() {

    return (
        <section>
            <GenericTop
                header={'Portfolio'}
                description={'Insert description here'}
            />
            <GenericPage>
                <div className="container portfolio">
                    <div>
                        batches
                    </div>
                    <div>
                        portfolio
                    </div>
                </div>
            </GenericPage>
        </section>
    );
}

export default Portfolio;
