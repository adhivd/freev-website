// https://www.netlify.com/blog/2017/07/20/how-to-integrate-netlifys-form-handling-in-a-react-app/

import React from 'react';


import './../styles/App.css';
import './../styles/Contact.css';

const encode = (data) => {
return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

class ContactForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = { name: "", email: "", message: "", company:"", subject: "" };
    }



    handleSubmit = e => {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...this.state })
      })
        .then(() => {
            alert("Success!");
            console.log("state: ", this.state);
        })
        .catch(error => alert(error));

      e.preventDefault();
    };

    handleChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
      const { name, email, subject, company, message } = this.state;

      let companyConditional;

      if(this.props.company) {
          companyConditional = (<p>
            <label>Company</label>
           <input name="company" value={company} onChange={this.handleChange} />
          </p>)
      }

      return (
         <span>
             <form name="contact" netlify netlify-honeypot="bot-field" hidden>
               <input type="text" name="name" />
               <input type="email" name="email" />
               <input type="text" name="subject" />
               <input type="text" name="company" />
               <textarea name="message"></textarea>
             </form>

             <form data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={this.handleSubmit} netlify="true" name="contact" className="contact">
                 <input type="hidden" name="form-name" value="contact" />
                 <div className="two-grid" >
                     <p>
                         <label>Your Name</label>
                         <input type="text" name="name" value={name} onChange={this.handleChange} />
                     </p>
                     <p>
                         <label>Your Email</label>
                         <input type="email" name="email" value={email} onChange={this.handleChange} />
                     </p>
                 </div>
               {companyConditional}
               <p>
                 <label>Subject</label>
                 <input name="subject" value={subject} onChange={this.handleChange} />
               </p>
               <p>
                 <label>Message</label>
                 <textarea name="message" value={message} onChange={this.handleChange} />
               </p>
               <p style={{textAlign: 'center'}}>
                 <button className="genericButton" type="submit">Submit!</button>
               </p>
             </form>
         </span>

      );
    }
  }

  export default ContactForm;
