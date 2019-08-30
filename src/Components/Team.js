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

import house from './../assets/partners/house.png';
import haas from './../assets/partners/haas.jpg';
import berkeleyengineering from './../assets/partners/berkeleyengineering.png';
import scet from './../assets/partners/scet.png';
import skydeck from './../assets/partners/skydeck.png';


function Team() {

    var header = "Meet the Team";
    var description = "We're a small group of undergraduates who care about the Berkeley startup ecosystem. Interested in joining our team? Click below to learn about when we open up applications.";
    var peopleContent = [
    {
        name: "Pratik Bhat",
        position: "Managing Director",
        linkedinUrl: "https://www.linkedin.com/in/pratikbhat/",
        mailTo: "mailto:pratik@freeventures.org",
        image: pratik
    },
    {
        name: "Pranav Gulati",
        position: "Senior Advisor | Former MD",
        linkedinUrl: "https://www.linkedin.com/in/pgulati18/",
        mailTo: "mailto:pranav@freeventures.org",
        image: pranav
    },
    {
        name: "Kathy Kong",
        position: "Director",
        linkedinUrl: "https://www.linkedin.com/in/kathyqkong/",
        mailTo: "mailto:kathy@freeventures.org",
        image: kathy
    },
    {
        name: "Aashi Jhawar",
        position: "Director",
        linkedinUrl: "https://www.linkedin.com/in/aashikajhawar/",
        mailTo: "mailto:aashi@freeventures.org",
        image: aashi
    },
    {
        name: "Nikita Ashok",
        position: "Director",
        linkedinUrl: "https://www.linkedin.com/in/nikita-ashok/",
        mailTo: "mailto:nikita@freeventures.org",
        image: nikita
    },
    {
        name: "Adhiv Dhar",
        position: "Director",
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
            >
            <a href="https://forms.gle/RnNgaxfZDUivcnS88" className="genericButton" target="_blank">Internal Team Interest Form</a>
            </GenericTop>
        <GenericPage>
                <div className="peopleGrid">
                    {peopleComponents}
                </div>
                <h2 style={{ textAlign: 'center', padding: '50px 0'}}>Our Advisors come from</h2>
                <div className="five-grid">
                    <span><img src={house} /></span>
                    <span><img src={skydeck} /></span>
                    <span><img src={scet} /></span>
                    <span><img src={haas} /></span>
                    <span><img src={berkeleyengineering} /></span>




                </div>
            </GenericPage>
        </section>
    );
}

export default Team;
