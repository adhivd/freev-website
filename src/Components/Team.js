import React from 'react';
import Person from './Person.js';
import './../styles/App.css';
import './../styles/Team.css';
import GenericTop from './GenericTop';
import GenericPage from './GenericPage';
import Pranav from './../assets/team/pranav.png';



function Team() {

    var header = "Meet the Team";
    var description = "We're a small group of undergraduates who care about the Berkeley startup ecosystem. Interested in joining our team? Click here to learn about when we open up applications.";
    var peopleContent = [{
        name: "Pranav Gulati",
        position: "Managing Director",
        linkedinUrl: "https://linkedin.com/in/adhivd/",
        mailTo: "mailto:pranav@freeventures.org",
        image: Pranav
    },
    {
        name: "Pranav Gulati",
        position: "Managing Director",
        linkedinUrl: "https://linkedin.com/in/adhivd/",
        mailTo: "mailto:pranav@freeventures.org",
        image: Pranav
    },
    {
        name: "Pranav Gulati",
        position: "Managing Director",
        linkedinUrl: "https://linkedin.com/in/adhivd/",
        mailTo: "mailto:pranav@freeventures.org",
        image: Pranav
    },
    {
        name: "Pranav Gulati",
        position: "Managing Director",
        linkedinUrl: "https://linkedin.com/in/adhivd/",
        mailTo: "mailto:pranav@freeventures.org",
        image: Pranav
    },
    {
        name: "Pranav Gulati",
        position: "Managing Director",
        linkedinUrl: "https://linkedin.com/in/adhivd/",
        mailTo: "mailto:pranav@freeventures.org",
        image: Pranav
    },
    {
        name: "Pranav Gulati",
        position: "Managing Director",
        linkedinUrl: "https://linkedin.com/in/adhivd/",
        mailTo: "mailto:pranav@freeventures.org",
        image: Pranav
    },

]

    let peopleComponents = peopleContent.map((person) => {
        return (<Person
                    name={person.name}
                    position={person.position}
                    linkedinUrl={person.linkedinUrl}
                    mailTo={person.mailTo}
                    image={person.image}
                />
        );
    });

    return (
        <section>
            <GenericTop
                header={header}
                description={description}
            />
            <GenericPage>
                <div className="peopleGrid">
                    {peopleComponents}
                </div>
            </GenericPage>
        </section>
    );
}

export default Team;
