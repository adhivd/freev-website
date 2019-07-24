import React from 'react';

import './../styles/App.css';


function GenericTop(props) {


  return (
    <section className="genericTop">
        <div class="container">
            <h1>{props.header}</h1>
            <h2>{props.description}</h2>
        </div>
    </section>
  );
}

export default GenericTop;
