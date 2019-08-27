import paladin from './../assets/portfolio/paladin.png';
import layersix from './../assets/portfolio/layersix.png';
import foresight from './../assets/portfolio/foresight.png';
import memory from './../assets/portfolio/memory.png';
import peereditr from './../assets/portfolio/peereditr.png';
import acuity from './../assets/portfolio/acuity.png';
import iota from './../assets/portfolio/iota.webp';
import pantheon from './../assets/portfolio/pantheon.webp';
import petra from './../assets/portfolio/petra.png';
import iris from './../assets/portfolio/iris.png';
import homeslice from './../assets/portfolio/homeslice.png';
import channeltime from './../assets/portfolio/channeltime.png';
import robhat from './../assets/portfolio/robhat.png';
import gainful from './../assets/portfolio/gainful.png';
import coverstar from './../assets/portfolio/coverstar.jpg';
import onederful from './../assets/portfolio/onederful.png';
import dataagora from './../assets/portfolio/dataagora.png';
import rooster from './../assets/portfolio/rooster.png';
import wildfire from './../assets/portfolio/wildfire.jpg';
import blitz from './../assets/portfolio/blitz.png';
import glints from './../assets/portfolio/glints.png';







// press
import tc from './../assets/press/tc.png'
import huffpost from './../assets/press/huffpost.png'
import forbes from './../assets/press/forbes.png'
import mic from './../assets/press/mic.png'
import medium from './../assets/press/medium.png'
import recode from './../assets/press/recode.png'
import wired from './../assets/press/wired.png'
import bb from './../assets/press/bb.jpg';
import dailycal from './../assets/press/dailycal.jpg';
import e27 from './../assets/press/e27.png';
import alchemy from './../assets/press/alchemy.jpeg';

// https://medium.com/@blitzesports/the-blitz-team-joins-discord-e3b17578966b
// blitz

// COBA
// http://www.koreatimes.com/article/20181126/1216680?fbclid=IwAR0TLvFzCFKCLbc-gPEZTyTKQQ1GtFWugwK9hree-cP1ZenlFMIE_JDKkks
//



let portfolioContent = {
    batchList: [
        {
            batchName: "Spring 2018",
            batchNumber: 12,
            companies: [
                {
                    name: "GAINFUL",
                    logo: gainful,
                    links: [{
                        address: "https://thestartu.com/everyone-is-unique-why-shouldnt-your-protein-powder-be-too/",
                        title: "StartU Article"
                    }],
                    tags: [
                        {
                            content: "YC W2018",
                            backgroundColor: "#EC8641"
                        }
                    ],
                    description: "Personalized protein powder, delivered monthly. Recently completed YC Winter ‘18 Batch and hit $40k monthly sales in February on 2.7k total customers, and in the process of raising a target $2M seed round. Learn more at gogainful.com",
                },
                {
                    name: "ROBHAT LABS",
                    description: "Using machine learning techniques and cryptography to stop the spread of misinformation. Signed contract with the DNC and frequently feature on MSNBC, Wired, and other outlets. Currently focused on making their product production-ready and doing demos to secure paying clients for the November 2018 elections. Sample article on their work here",
                    links: [{
                        address: "https://www.robhat.com/",
                        title: "Website"
                    }],
                    logo: robhat

                },
                {
                    name: "MADTECH LABS",
                    links: [
                        {
                            address: "https://angel.co/company/madtech-labs/jobs",
                            title: "Angel.co",
                        }
                    ],
                    description: "Developing tertiary hybrid power trains as B2B products to disrupt the transportation market. Two-person founding team with deep industry expertise comprised of a PhD in mechanical engineering and an undergraduate specializing in customer development. To date have validated the technology in the lab, and are seeking to scale with customers during this semester and raise a small seed round",
                },
                {
                    name: "COVERSTAR",
                    logo: coverstar,
                    links: [
                        {
                            address: "https://coverstar.app/",
                            title: "App website",
                        },
                        {
                            address: "https://angel.co/company/coverstar",
                            title: "Angel.co"
                        }
                    ],
                    description: "A social app where users create fun Kpop music videos. >100k users (70k MAU) to date with strong engagement metrics, and currently raising a seed round",
                },
                {
                    name: "YEARBOOK",
                    description: "Realtime YearBook for preschools. Very talented team of undergraduates with domain knowledge and decent traction among schools despite forming recently. Focused on product and customer development over the course of the Free Ventures batch",
                },
            ]
        },
        {
            batchName: "Fall 2017",
            batchNumber: 12,
            companies: [
                {
                    name: "onederful",
                    description: "Onederful provides real-time eligibility and benefits checks connected to over 240+ insurance payers for dental offices. The most common way for front offices to determine reimbursement rates and patient coverage is to phone the insurance company. About 7% of revenue loss is due to denied claims caused by eligibility errors. We have also created an eligibility API allowing other dental software companies to easily integrate eligibility verification into their services, and are currently in contract discussions with several large players. Currently participating in Y Combinator’s Winter ‘18 Batch.",
                    links: [{
                        address: "https://www.onederful.co",
                        title: "Website"
                    },
                    {
                        address: "https://www.crunchbase.com/organization/onederful",
                        title: "Crunchbase"
                    }],
                    tags: [
                        {
                            content: "YC W2018",
                            backgroundColor: "#EC8641"
                        }
                    ],
                    logo: onederful,
                },
                {
                    name: "DataAgora",

                    description: "DataAgora is a marketplace where consumers can sell their data to data-driven companies. Machine learning is the future and every startup, student and software developer in Silicon Valley wants to create the next big data-driven project. But all of these projects get stuck in a negative feedback loop; in order to get data, they need users, in order to get users, they need a product, but in order to make a product they need data. DataShark breaks that loop and gives data-driven companies direct access to data from consumers. Currently closing pre-seed, institutional investment.",
                    links: [{
                        address: "https://dataagora.com/",
                        title: "Website"
                    }],
                    logo: dataagora,
                },
                {
                    name: "FIAT LUX LABS",
                    description: "Timely and accurate diagnosis of cancers is crucial for prevention and mitigation of cancer progress. D-Luciferin is a non-toxic, light emitting chemical that generates a sensitive and selective luminescence signal in the presence of key biomarkers of ovarian, cervical, and liver cancer. The current method of D-Luciferin production uses costly reagents in an energy intensive process that results in extremely low yields of under 3%. Fiat Lux Labs is generating a novel biochemical process using sugar, grains, and yeast to cut the high cost of D-Luciferin by nearly 70% ($175 to $52). Closed pre-seed angel investment.",
                },
                {
                    name: "BUNGALO",
                    description: "Bungalo is a web platform with the aim of providing students with a simple and secure way to search for housing and subletters, as well as establish trust in Berkeley’s college housing market. Our MVP addresses many pain points that characterize the current search-for-housing experience. First, users will be able to quickly search and filter listings based on user criteria including amenities, gender preference, and property type. Second, people can search for housing with friends and add listings to a shared “wishlist.” Third, users will get notified when new listings that fit their criteria are posted.",
                },
                {
                    name: "GENESISX",
                    description: "The prosthetics industry is full of top-of-the-line prosthetics that cost a small fortune to low-income amputees. Our team is setting out to build general-purpose low-cost myoelectric prosthetics that these amputees can afford. We have won our first contract for a non-profit called ROMP (Range of Motion Project) and are currently working to deliver a low-cost prosthetic elbow to an amputee in Ecuador.",
                },
                {
                    name: "REHAPAL",
                    description: "RehaPal provides a humanoid robot that performs automated passive and active medical rehabilitation, and make physical therapists more productive. Hospitals pay a subscription fee for the robot in order to provide automated medical rehabilitation services for post-stroke patients as well as others who require physical/occupational therapy. Founded by a team of serial entrepreneurs and PhD researchers studying under Ruzena Bajcsy in the Berkeley Artificial Intelligence Research (BAIR) Lab.",
                },
                {
                    name: "VENTUREFOLDER",
                    description: "VentureFolder is a lightweight software service to see what companies angel investors and early stage funds are actively looking at, share potential investments with each investors, and take notes throughout due diligence process. VentureFolder helps investors keep on top of what is happening in their business: track startups, other VC firms, acquisitions, investment themes, and people.",
                },
            ]
        },
        {
            batchName: "Spring 2017",
            batchNumber: 13,
            companies: [
                {
                    name: "Paladin Drones",
                    description: "Paladin Drones is creating autonomous drone solutions for public safety, at a price even volunteer departments can afford. Their product decreases response time by at least two minutes by providing crucial situational awareness to first responders before they arrive on scene. Their solutions have landed them a spot as a finalist for Berkeley Big Ideas, and helped them win the Penn Innovation Grant.",
                    link: "https://paladindrones.io",
                    logo: paladin,
                },
                {
                    name: "LAYER SIX",
                    description: "Information overload drains the cognitive bandwidth of high-performing individuals and organizations, reducing their peak performance potential. We are the only research-backed cognitive enhancement solution serving this market, bringing data-driven diagnostics, enterprise software, and customized VR therapeutics to the world.",
                    logo: layersix,
                },
                {
                    name: "FORESIGHT MENTAL HEALTH",
                    description: "Foresight Mental Health is transforming mental healthcare by leveraging cutting-edge science and technology while remaining affordable and accessible. Care at Foresight begins with building a patient profile based on the patient's genetic profile, comprehensive symptom profile, brain-chemical balance estimates, mental health history, family history, lifestyle, and many other factors. With the patient profile, the Foresight Platform analyzes hundreds of thousands of pages of clinical research to assist our doctors in accurately and quickly identifying the optimal treatment for the patient. Weekly surveys via our patient portal keep the patient's symptom profile constantly up to date. Practice-issued wearable devices continuously monitor sleep, exercise, stress, anxiety, mood, and other key factors of mental health. Based on the patient's status, treatment plans are updated. At Foresight, we are committed to leveraging technology to improve mental healthcare.",
                    logo: foresight,
                },
                {
                    name: "MEMORY",
                    description: "Memory is an Alexa-based voice assistant for individuals with Alzheimer’s. It responds to patients’ questions using information provided by family members and caretakers, and collects data used for medical research and improvement. Memory’s goal is to reduce the burden on caretakers and allow physicians and healthcare providers to provide customized treatment methods directly to patients in their own homes.",
                    logo: memory,
                },
                {
                    name: "PEEREDITR",
                    description: "PeerEditr is the quickest way to get feedback. It's a feedback and collaboration tool designed for visual documents like resumes, slide decks, and marketing material. It takes one click to create a feedback room with annotation tools and version control, which you can share with anyone. Our goal is to provide the quickest and most seamless feedback experience.",
                    logo: peereditr,
                },
                {
                    name: "ACUITY FOR MOMS",
                    description: "Acuity for Moms in an online platform that empowers moms to re-enter the workforce by providing online skills training and community. Our platform aggregates existing online courses — think Coursera and EdX — to create customized learning paths based on skills, interests, personality, and time availability. These courses are coupled with a community of like-minded moms and value-add resources in order to help moms ultimately return to the workforce.",
                    logo: acuity,
                },
            ]
        },
        {
            batchName: "Spring 2016",
            batchNumber: 13,
            companies: [
                {
                    name: "PANTHEON VR",
                    description: "Pantheon is a VR application that makes 3D modeling and animation immersive and effortless. We seek to create a tool that drives people to create beautiful 3D content, the same way Instagram made photographers, Medium made writers, and Youtube made filmmakers. We’ve created a simple set of tools that you use while immersed in VR, that let you to easily build, animate, and share your digital world. We took a process that takes weeks to learn and brought it down to minutes. Pantheon allows anyone to quickly and easily create 3D content, and share it with others. ",
                    logo: pantheon,
                    tags: [
                        {
                            content: "FreeV SP16",
                            backgroundColor: "#67379A"
                        },
                        {
                            content: "YC S2017",
                            backgroundColor: "#EC8641"
                        }
                    ],
                    links: [{
                        address: "https://www.crunchbase.com/organization/pantheon-3",
                        title: "Crunchbase"
                    }]

                },
                {
                    name: "IOTA LABS",
                    description: "Introducing Dot, the physical push notification that tells your phone where you are so that it understands your behaviors and patterns in the places that make up your life (bedroom, living room, garage, backyard, work, car, etc). Dot serves a dual purpose: it provides ultra-precise location data to your smartphone, and allows users to create extensible, interactive interfaces anywhere. This combination creates an invaluable asset when dealing with data — context.",
                    tags: [
                        {
                            content: "Kickstarter",
                            backgroundColor: "#04ce78"
                        },
                    ],
                    links: [{
                        address: "https://www.kickstarter.com/projects/1867163750/dot-the-physical-push-notification",
                        title: "Kickstarter"

                    },
                    {
                        address: "https://www.crunchbase.com/organization/iota-labs",
                        title: "Crunchbase"
                    }],
                    logo: iota,

                },
                {
                    name: "CHANNELTIME.TV",
                    description: "ChannelTime.tv’s goal is to create a service that improves upon other video-sharing sites for all types of users: viewers, content creators, and even advertisers. Using microtransactions, viewers can directly support the content creators they love. Content creators gets a constant amount per view, and more with “just ask” payments. Viewers can support the content creators they love directly. Advertisers benefit because watching ads on ChannelTime.tv is entirely optional and advertisers directly reward the viewers so there is a positive emotional response to their promotions",
                    links: [{
                        address: "https://laughingsquid.com/channeltime-tv-a-social-streaming-service-that-compiles-videos-from-reddit-into-a-single-feed/",
                        title: "Article"
                    }],
                    logo: channeltime,
                },
                {
                    name: "HOMESLICE",
                    description: "HomeSlice is a platform focused on making home ownership more accessible by facilitating fractional purchases between like-minded individuals. Real estate prices have reached a level where much of the population is priced out of the market and forced to rent. ",
                    logo: homeslice,
                },
                {
                    name: "Petra",
                    description: "Petra is a service that empowers millennials who have not received quality financial advice to take control of their financial future.Our app provides users with budgeting tools, personal financial education, and a personalized plan. The plan helps users understand their financial health, watch and control their spending, pay off debts, and put money into investments (for young people, this is the most important and impactful time to be investing).",
                    logo: petra,
                },
                {
                    name: "IRIS BCI",
                    description: "At Iris BCI we are building a AAC device that allows an individual to talk using just their brain waves. The user will be using consciously controllable thought processes that can be picked up as EEG signals (brainwaves) and a simple senary language (base 6) that is used to output speech in normal everyday languages by the device.",
                    logo: iris,
                },
            ]
        },
        {
            batchName: "Fall 2015",
            batchNumber: 12,
            companies: [
                {
                    name: "Lifted",
                    description: "An iPad app that makes life easier for special education teachers, therapists, and behavior analysts to help accelerate the learning outcomes for the ~7M students (preK-12) with learning disabilities in the US.",
                },
                {
                    name: "Thera",
                    description: "1 in 4 college women and 1 in 33 college men will be sexually assaulted by the time they graduate. And 40% of survivors never tell anyone, not even their closest friends or family members, due to the stigma associated with rape culture and the lack of accessible, safe resources. As a result, these survivors never receive the help they deserve and need. Thera is an online chat platform that connects survivors of sexual assault to certified experts for anonymous and confidential support. With Thera, users receive quality care and advice while protecting their identities. ",
                },
                {
                    name: "Wildfire",
                    description: "A local safety app that crowd sources crime reporting to users. When breaking news happens in your local area, how do you find out about it and how quickly do you hear?",
                    logo: wildfire,
                    links: [{
                        address: "https://www.huffpost.com/entry/wildfire-app-alerts-users_b_9287408",
                        title: "Huffington Post Article"
                    },{
                        address: "https://www.getwildfire.com/",
                        title: "App Website"
                    }],
                    tags: [
                        {
                            content: "YC S2017",
                            backgroundColor: "#EC8641"
                        }
                    ],

                },
                {
                    name: "Nom Nom",
                    description: "Their mission is to empower local culinary talent to share their food to their community by providing an online marketplace for home-styled artisan food.",
                },
                {
                    name: "Sigma Sports",
                    description: "A wearable device with a software component to help coaching staff monitor athletes' training and conditioning. ",
                },
                {
                    name: "Smart Notes",
                    description: "An interactive notebook designed to help students, particularly students in STEM, learn more effectively.",
                },
            ]
        },
        {
            batchName: "Spring 2015",
            batchNumber: 12,
            companies: [
                {
                    name: "C. Light Technologies",
                    description: "Right now there are 24 million people suffering from Alzheimer’s disease. This number is projected to increase to 100 million by 2050. And the sad truth is, in terms of diagnostics, the field of neurology is decades behind other areas of medicine. There are no quick, non-invasive diagnostics for Alzheimer’s and many other neurological disorders including Parkinson’s, MS, ALS, and Schizophrenia. All of these diseases, exhibit abnormal eye movements. However, the only eye-movements clinicians are able to observe now are quite large, due to a lack of fine resolution available in current clinical tools. This makes any small changes completely invisible to clinicians. We at C. Light Technologies are working to fill in the diagnostic tool gap through the use of our precision eye tracker.",
                },
                {
                    name: "Improving Outcomes",
                    description: "Healthcare providers currently have very little information on what happens to their patients after they leave the hospital unless they get readmitted or have a complication. Any follow-up data that does exist is rarely collected in a systematic or meaningful way. We want to change that by closing the feedback loop, bringing this critical information back to the point-of-care so everyone can align around what ultimately matters - patient outcomes. Our platform enables healthcare providers to seamlessly collect information on the functional, symptomatic and quality-of-life outcomes of care using clinically validated patient-reported surveys. We use this data to help the care-team better manage patients, predict the outcomes of treatments and facilitate reporting of outcomes to payers and the public",
                },
                {
                    name: "Blitz E-Sports",
                    description: "Blitz Esports is a tech and media startup focused on bridging the gap between esports fandom and personal gameplay. We're one of the premier media publications in esports, specializing in educational video content for League of Legends, CS:GO and Overwatch. We've also developed the first fully automatic League of Legends coaching app, which uses computer vision and data-driven insights to proactively help gamers make better decisions at each step of their gameplay experience. A month into open beta, the Blitz app is now used in over a million games each week.",
                    logo: blitz,
                    links: [{
                        address: "https://www.crunchbase.com/organization/instant-esports#section-funding-rounds",
                        title: "Crunchbase"
                    },{
                        address: "https://medium.com/@blitzesports/the-blitz-team-joins-discord-e3b17578966b",
                        title: "Acquisition"
                    }],
                    tags: [
                        {
                            content: "Acquired",
                            backgroundColor: "#424242"
                        }
                    ],
                },
                {
                    name: "Rooster",
                    description: "There was a time where neighbors loved to help one another - they shared and gifted. This behavior almost completely disappeared with our rapid online lifestyle, and yet we all wish we could have it back. We are Rooster: a local sharing community where we help, borrow and share with each other, as neighbors. On Rooster anyone can ask for whatever they need and help whenever they can, the only rule: it has to be for free.  Thousands of Rooster members have given away sofas, TVs, Art supplies and clothes, borrowed baby cribs and baseball bats, got together to jog, play, consult and much more.  Rooster is available in select Bay Area locations.",
                    logo: rooster,
                    links: [{
                        address: "https://therooster.co/",
                        title: "Website"
                    },{
                        address: "https://www.crunchbase.com/organization/roosters-inc",
                        title: "Crunchbase"
                    }]

                },
                {
                    name: "Wist",
                    description: "Wist is a smart waitlist that lets users remotely join restaurant waitlists while providing machine learning driven wait time predictions. ",
                },
                {
                    name: "Zypper",
                    description: "Businesses worldwide are becoming increasingly reliant on finding the right products and services to grow with. They want to purchase fast, but on average, companies take 12 months to make a single purchasing decision. Why? The current procurement process is slow, bureaucratic, and highly expensive. Zypper aims to eliminate wasted time in the enterprise procurement process, producing cost savings of 25%. Simply put, Zypper makes your enterprise purchases smart, simple, and fast.",
                },
            ]
        },
        {
            batchName: "Fall 2014",
            companies: [
                {
                    name: "Nimble",
                    description: "Nimble is a cloud-based radiation oncology planning system that uses novel optimization tools, big data, and cross-institution insights to dramatically lower the cost and improve treatment outcomes throughout the healthcare industry.",
                },
                {
                    name: "Obsidian",
                    description: "Obsidian is a peer-backed payment manager that allows users to pay for anything in flexible installments. Users can use any payment method, including Bitcoin, to make purchases for users, and allow them to determine their repayment duration and installment intervals",
                },
                {
                    name: "Unboard",
                    description: "Bringing the magic of tabletop games to the digital world. First, Unboard generates traction and popularity by virtualizing board games with established audiences. Then, we utilize it by launching the first ever all-medium Trading Card Game."
                },
                {
                    name: "Crowd Control",
                    description: "Crowd Control is accurately measuring how crowded public spaces are in real-time and predicting how crowded they will be in the future. This allows customers to decide when to go to their favorite gyms, supermarkets, restaurants, etc and businesses can better manage their establishments.",
                },
                {
                    name: "Glints",
                    description: "Glints partners with companies to develop real-world challenges for youths. Rather than academic knowledge, candidates gain real work experience and career skills. They gain employability by self-directing their own career development as they acquire badges for the career skills they seek.",
                    links: [
                        {
                            address: "https://glints.com/",
                            title: "Website",
                        },
                        {
                            address: "https://www.crunchbase.com/organization/glints",
                            title: "Crunchbase"
                        },
                        {
                            address: "https://vulcanpost.com/668927/glints-funding-series-b-singapore/",
                            title: "Series B Article"
                        }
                    ],
                    logo: glints,

                },
                {
                    name: "Tablink",
                    description: "Tablink manages browser tabs. We cluster tabs and create a 'tab' filesystem, allowing users to sync and find information instantly. We tackle the problem of having excessive tabs open, which limits productivity and affects over 60% of internet users.",
                },
            ]
        },
        {
            batchName: "Spring 2014",
            companies: [
                {
                    name: "Demilune",
                    description: "The Demilune walker is an adjustable full-size walker that is able to provide support in both its large configuration and its much smaller form. The adjustable design makes the walker effective in all areas of the home, helping to prevent in-home falls and promote independence among the elderly.",
                },
                {
                    name: "SmartBod",
                    description: "SmartBod builds vibrators that learn from and adapt to a woman's physiological responses, heightening her level of pleasure and enlightening her (and her sexual partner) about her sexual preferences.",
                },
                {
                    name: "Etch",
                    description: "Simplicity and intricacy never seem to coexist on a business card, but Etch opens the door to a lean business card that shows every single aspect of yourself by allowing you to store all your professional and social information on the cloud--accessed by scanning the Etch Code."
                },
                {
                    name: "Bru",
                    description: "A fully robotic personalized bartender controlled with just a tap on your phone. The machine mixes a nearly endless combination of familiar and exotic drinks by precisely combining up to 16 ingredients. Potential markets range from homes to hotels.",
                },
                {
                    name: "Einstein",
                    description: "Einstein helps users looking to purchase a product make the best informed decision. By intelligently consolidating customer and professional product reviews and understanding all the customers' needs using basic questions, Einstein can recommend the best product."
                },
                {
                    name: "Iris",
                    description: "Iris is a community for people's interests where users write articles about their passions and share them with like-minded people. They aim to solve the issue with reach, engagement, and discovery that bloggers have through a keyword extraction algorithm.",
                },
            ]
        },
    ],
    pressList: [
        {
            image: forbes,
            title: "Huge congratulations to FreeV co-founder Jeremy Fiance for being featured on the 2017 Forbes 30 Under 30 list!",
            address: "https://www.forbes.com/pictures/lmh45edlmk/30-under-30-education/#1abbfbef1c3d",
            date: "Jan 3, 2017"
        },
        {
            image: wired,
            title: "The College Kids Doing What Twitter Won't",
            address: "https://www.wired.com/story/the-college-kids-doing-what-twitter-wont/",
        },
        {
            image: e27,
            title: "Singaporean startup Glints has raised US$2M Series A to help you find a job",
            address: "https://e27.co/singaporean-startup-glints-has-raised-us2million-series-a-to-help-you-find-a-job-20160905/",
            date: "Sep 5, 2016"
        },
        {
            image: tc,
            title: "Meet VC Jeremy Fiance, UC Berkeley's 24-year-old superconnector",
            address: "http://techcrunch.com/2016/04/18/meet-vc-jeremy-fiance-uc-berkeleys-24-year-old-superconnector/",
        },
        {
            image: forbes,
            title: "Huge congratulations to FreeV co-founder Jeremy Fiance for being featured on the 2017 Forbes 30 Under 30 list!",
            address: "https://www.forbes.com/pictures/lmh45edlmk/30-under-30-education/#1abbfbef1c3d",
        },
        {
            image: huffpost,
            title: "Wildfire App Alerts Users of Emergency Situations",
            address: "http://www.huffingtonpost.com/rawan-abushaban/wildfire-app-alerts-users_b_9287408.html",
        },
        {
            image: tc,
            title: "YC-Backed Instant eSports Is ESPN for Competitive Gaming",
            address: "http://techcrunch.com/2015/06/29/yc-backed-instant-esports-is-espn-for-competitive-gaming/",
        },
        {
            image: recode,
            title: "Searching for the Next Stanford: Silicon Valley Turns Its Eyes to Berkeley",
            address: "http://recode.net/2015/05/07/searching-for-the-next-stanford-silicon-valley-turns-its-eyes-to-berkeley/",
        },
        {
            image: tc,
            title: "Lily, A Camera Drone That Automatically Follows You, Pulls In A Mountainous $34 Million In Pre-Orders",
            address: "http://techcrunch.com/2016/01/08/lily-a-camera-drone-that-automatically-follows-you-pulls-in-a-mountainous-34-million-in-pre-orders/",
        },
        {
            image: bb,
            title: "Meet Free Ventures Managing Director Cameron Baradar",
            address: "https://vimeo.com/106034256",
        },
        {
            image: mic,
            title: "The Vibrator of the Future Is Here - And Women Should Be Excited",
            address: "http://mic.com/articles/112886/a-pair-of-entrepreneurs-want-to-make-sure-every-woman-gets-the-pleasure-she-deserves#.oWYar7k3v",
        },
        {
            image: recode,
            title: "Free Ventures Is Seeking the Next Mark Zuckerberg to Drop In and Maybe Drop Out",
            address: "http://recode.net/2014/06/08/free-ventures-is-seeking-the-next-mark-zuckerberg/",
        },
        {
            image: alchemy,
            title: "Free Ventures - Students Turning Cool Ideas into Startups",
            address: "http://blog.alchemyapi.com/free-ventures-students-startups",
        },
        {
            image: bb,
            title: "Free Ventures: First accelerator for and by students",
            address: "http://www.berkeleybyte.com/2014/03/07/free-ventures-first-accelerator-for-and-by-students/",
        },
        {
            image: dailycal,
            title: "Student-run incubator program hosts competition for startups at SkyDeck Berkeley",
            address: "http://www.dailycal.org/2013/12/10/student-run-incubator-program-hosts-competition-startups-skydeck-berkeley/",
        },
        {
            image: dailycal,
            title: "UC Berkeley student-run organization aims to help undergrads launch startups",
            address: "http://www.dailycal.org/2013/09/16/uc-berkeley-student-run-organization-aims-to-help-undergrads-launch-startups/",
        },


    ]
}

export default portfolioContent;
