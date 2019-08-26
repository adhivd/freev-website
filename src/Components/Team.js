import React from 'react';
import Person from './Person.js';
import './../styles/App.css';
import './../styles/Team.css';
import GenericTop from './GenericTop';
import GenericPage from './GenericPage';
import pranav from './../assets/team/pranav.png';
import aashi from './../assets/team/aashi.png';
import pratik from './../assets/team/pratik.png';
import kathy from './../assets/team/kqkong.png';
import adhiv from './../assets/team/adhiv.png';
import nikita from './../assets/team/nikita.png';



function Team() {

    var header = "Meet the Team";
    var description = "We're a small group of undergraduates who care about the Berkeley startup ecosystem. Interested in joining our team? Click here to learn about when we open up applications.";
    var peopleContent = [{
        name: "Pranav Gulati",
        position: "Managing Director",
        linkedinUrl: "https://www.linkedin.com/in/pgulati18/",
        mailTo: "mailto:pranav@freeventures.org",
        image: pranav
    },
    {
        name: "Pratik Bhat",
        position: "Director",
        linkedinUrl: "https://www.linkedin.com/in/pratikbhat/",
        mailTo: "mailto:pratik@freeventures.org",
        image: pratik
    },
    {
        name: "Kathy Kong",
        position: "Associate",
        linkedinUrl: "https://www.linkedin.com/in/kathyqkong/",
        mailTo: "mailto:kathy@freeventures.org",
        image: kathy
    },
    {
        name: "Aashi Jhawar",
        position: "Associate",
        linkedinUrl: "https://www.linkedin.com/in/aashikajhawar/",
        mailTo: "mailto:aashi@freeventures.org",
        image: aashi
    },
    {
        name: "Nikita Ashok",
        position: "Associate",
        linkedinUrl: "https://www.linkedin.com/in/nikita-ashok/",
        mailTo: "mailto:nikita@freeventures.org",
        image: nikita
    },
    {
        name: "Adhiv Dhar",
        position: "Associate",
        linkedinUrl: "https://linkedin.com/in/adhivd/",
        mailTo: "mailto:adhiv@freeventures.org",
        image: adhiv
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
