import paladin from './../assets/portfolio/paladin.png';
import layersix from './../assets/portfolio/layersix.png';
import foresight from './../assets/portfolio/foresight.png';
import memory from './../assets/portfolio/memory.png';
import peereditr from './../assets/portfolio/peereditr.png';
import acuity from './../assets/portfolio/acuity.png';


let portfolioContent = {
    batchList: [
        {
            batchName: "Spring 2018",
            batchNumber: 12,
            companies: [
                {
                    name: "GAINFUL",
                    description: "Personalized protein powder, delivered monthly. Recently completed YC Winter ‘18 Batch and hit $40k monthly sales in February on 2.7k total customers, and in the process of raising a target $2M seed round. Learn more at gogainful.com",
                },
                {
                    name: "ROBHAT LABS",
                    description: "Using machine learning techniques and cryptography to stop the spread of misinformation. Signed contract with the DNC and frequently feature on MSNBC, Wired, and other outlets. Currently focused on making their product production-ready and doing demos to secure paying clients for the November 2018 elections. Sample article on their work here",
                },
                {
                    name: "MADTECH LABS",
                    description: "Developing tertiary hybrid power trains as B2B products to disrupt the transportation market. Two-person founding team with deep industry expertise comprised of a PhD in mechanical engineering and an undergraduate specializing in customer development. To date have validated the technology in the lab, and are seeking to scale with customers during this semester and raise a small seed round",
                },
                {
                    name: "COVERSTAR",
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
                    name: "ONEDERFUL",
                    description: "Onederful provides real-time eligibility and benefits checks connected to over 240+ insurance payers for dental offices. The most common way for front offices to determine reimbursement rates and patient coverage is to phone the insurance company. About 7% of revenue loss is due to denied claims caused by eligibility errors. We have also created an eligibility API allowing other dental software companies to easily integrate eligibility verification into their services, and are currently in contract discussions with several large players. Currently participating in Y Combinator’s Winter ‘18 Batch.",
                    links: [{
                        address: "https://www.onederful.co",
                        title: "Website"
                    }]
                },
                {
                    name: "DATASHARK",
                    description: "DataShark is a marketplace where consumers can sell their data to data-driven companies. Machine learning is the future and every startup, student and software developer in Silicon Valley wants to create the next big data-driven project. But all of these projects get stuck in a negative feedback loop; in order to get data, they need users, in order to get users, they need a product, but in order to make a product they need data. DataShark breaks that loop and gives data-driven companies direct access to data from consumers. Currently closing pre-seed, institutional investment.",
                },
                {
                    name: "FIAT LUX LABS",
                    description: "Timely and accurate diagnosis of cancers is crucial for prevention and mitigation of cancer progress. D-Luciferin is a non-toxic, light emitting chemical that generates a sensitive and selective luminescence signal in the presence of key biomarkers of ovarian, cervical, and liver cancer. The current method of D-Luciferin production uses costly reagents in an energy intensive process that results in extremely low yields of under 3%. Fiat Lux Labs is generating a novel biochemical process using sugar, grains, and yeast to cut the high cost of D-Luciferin by nearly 70% ($175 to $52). Closed pre-seed angel investment.",
                    logo: memory,
                },
                {
                    name: "BUNGALO",
                    description: "Bungalo is a web platform with the aim of providing students with a simple and secure way to search for housing and subletters, as well as establish trust in Berkeley’s college housing market. Our MVP addresses many pain points that characterize the current search-for-housing experience. First, users will be able to quickly search and filter listings based on user criteria including amenities, gender preference, and property type. Second, people can search for housing with friends and add listings to a shared “wishlist.” Third, users will get notified when new listings that fit their criteria are posted.",
                    logo: memory,
                },
                {
                    name: "GENESISX",
                    description: "The prosthetics industry is full of top-of-the-line prosthetics that cost a small fortune to low-income amputees. Our team is setting out to build general-purpose low-cost myoelectric prosthetics that these amputees can afford. We have won our first contract for a non-profit called ROMP (Range of Motion Project) and are currently working to deliver a low-cost prosthetic elbow to an amputee in Ecuador.",
                    logo: memory,
                },
                {
                    name: "REHAPAL",
                    description: "RehaPal provides a humanoid robot that performs automated passive and active medical rehabilitation, and make physical therapists more productive. Hospitals pay a subscription fee for the robot in order to provide automated medical rehabilitation services for post-stroke patients as well as others who require physical/occupational therapy. Founded by a team of serial entrepreneurs and PhD researchers studying under Ruzena Bajcsy in the Berkeley Artificial Intelligence Research (BAIR) Lab.",
                    logo: memory,
                },
                {
                    name: "VENTUREFOLDER",
                    description: "VentureFolder is a lightweight software service to see what companies angel investors and early stage funds are actively looking at, share potential investments with each investors, and take notes throughout due diligence process. VentureFolder helps investors keep on top of what is happening in their business: track startups, other VC firms, acquisitions, investment themes, and people.",
                    logo: memory,
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
    ]
}

export default portfolioContent;
