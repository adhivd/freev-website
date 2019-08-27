import React, { useEffect } from 'react';
import './../styles/App.css';
import './../styles/Apply.css';

import GenericTop from './GenericTop';
import GenericPage from './GenericPage';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from './TabPanel';
import FAQHolder from './FAQHolder.js';

import rocket from './../assets/rocket-white.png';
import application from './../assets/application.png';
import interview from './../assets/interview.png';
import arrow from './../assets/arrow.png';


import Typography from '@material-ui/core/Typography';

function Apply(props) {

    const AntTabs = withStyles({
  root: {
    borderBottom: '1px solid #e8e8e8',
  },
  indicator: {
    backgroundColor: '#1890ff',
  },
})(Tabs);

const AntTab = withStyles(theme => ({
  root: {
    textTransform: 'none',
    minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(4),
    fontFamily: [
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    '&:hover': {
      color: '#40a9ff',
      opacity: 1,
    },
    '&$selected': {
      color: '#1890ff',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&:focus': {
      color: '#40a9ff',
    },
  },
  selected: {},
}))(props => <Tab disableRipple {...props} />);

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  padding: {
    padding: theme.spacing(3),
  },
  tabStyle: {
    backgroundColor: theme.palette.background.paper,
  }
}));

const classes = useStyles();
const [value, setValue] = React.useState(0);

function handleChange(event, newValue) {
    setValue(newValue);
}

useEffect(() => {
    console.log(value);
}, [value])


let batchFAQContent = [
    {
            question: "What’s the time commitment during the batch?",
            answer: "5 hours per week for program sessions. We require founders to be present at all sessions 7-9pm every Monday and Wednesday.",
    },
    {
            question: "How long is the batch?",
            answer: "10-12 weeks",
    },
    {
            question: "What resources do we get access to during the batch?",
            answer: "Check out our program section of the website",
    },
    {
            question: "What resources do alumni companies receive?",
            answer: "We provide help with fundraising, hiring, introductions to people in our network, advise, etc. to our alumni companies. Alumni companies still get access to the benefits provided by our sponsors and partners.",
    },
    ]

    let internalFAQContent = [
        {
                question: "This is a question about internal",
                answer: "This is an answer",
        },
        {
                question: "This is a question2 about internal",
                answer: "This is an answer2",
        },
        {
                question: "This is a question about internal",
                answer: "This is an answer",
        },
        {
                question: "This is a question about internal",
                answer: "This is an answer",
        },
        {
                question: "This is a question about internal",
                answer: "This is an answer",
        },

        ]

    return (
        <section>
            <GenericTop
                header={'Join the FreeV Family'}
                description={''}
            >
                <a href="http://google.com" className="genericButtonWhite" target="_blank">Fall 2019 Batch Application</a>
            </GenericTop>
            <GenericPage>
                <div className={classes.root}>
                  <div className={classes.tabStyle}>
                    <AntTabs value={value} onChange={handleChange} aria-label="ant example">
                      <AntTab label="Batch Recruitment" />
                      <AntTab label="Internal Recruitment" />
                    </AntTabs>

                    <TabPanel value={value} index={0}>
                        <h2>Applications are open for Fall 2019!</h2>
                        <p>Here are some details about our recruiting timeline and frequently asked questions</p>
                        <h2>Timeline</h2>
                        <div className="timeline">
                            <article>
                                <div>
                                    <img src={application} alt="" />
                                </div>
                                <h2>September 13th</h2>
                                <p>Applications close</p>
                            </article>
                            <span>
                                <img src={arrow} />
                            </span>
                            <article>
                                <div>
                                    <img src={interview} alt="" />
                                </div>
                                <h2>September 16th-20th</h2>
                                <p>Interviews</p>
                            </article>
                            <span>
                                <img src={arrow} />
                            </span>
                            <article>
                                <div>
                                    <img src={rocket} alt="" />
                                </div>
                                <h2>September 23rd</h2>
                                <p>Batch XIII Starts</p>
                            </article>
                        </div>
                        <h2>What we look for</h2>
                        <ul>
                            <li><p>
                                We require at least one founder to be a student at UC Berkeley.
                            </p></li>
                            <li><p>
                                We look for founders that have experience building things and coming up with creative solutions for real problems.
                            </p></li>
                            <li><p>
                                We want to see a tangible commitment to your idea, whether that’s an MVP, a prototype, or some initial traction with customers.
                            </p></li>
                            <li><p>
                                We look for a founding team that’s deeply passionate about the company they’re growing and the space they’re working in.

                            </p></li>
                            <li><p>
                                We are industry and stage agnostic.
                            </p></li>
                        </ul>
                    <h2>Frequently asked questions</h2>
                    <FAQHolder
                        faq={batchFAQContent}
                    />
                <p>More questions? Fill out this <a href="/contact">contact form</a> and we'll get back to you!</p>
                    <br />
                    <a href="#" className="genericButton" target="_blank">Go to Application</a>
                    </TabPanel>


                    <TabPanel value={value} index={1}>
                       <p>We haven't started internal recruitment yet! Put your contact info down if you'd like to receive an email about when internal team recruitment opens.</p>
                       <a href="#" className="genericButton" target="_blank">Interest form</a>
                        <br />
                    </TabPanel>
                  </div>
                </div>
            </GenericPage>
        </section>
    );
}

export default Apply;
