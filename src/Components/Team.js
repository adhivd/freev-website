import React from 'react';
import './../styles/App.css';
import './../styles/Team.css';
import GenericTop from './GenericTop';
import GenericPage from './GenericPage';



function Team() {

    var header = "Meet the Team";
    var description = "Insert description here";

    return (
        <section>
            <GenericTop
                header={header}
                description={description}
            />
            <GenericPage>
                <p>pics here</p>
            </GenericPage>
        </section>
    );
}

export default Team;
