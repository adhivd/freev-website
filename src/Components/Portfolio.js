import React from 'react';
import './../styles/App.css';
import './../styles/Portfolio.css';
import portfolioContent from './../content/portfolio.js';

import GenericTop from './GenericTop';
import GenericPage from './GenericPage';
import PortfolioCompanyCard from './PortfolioCompanyCard';

class Portfolio extends React.Component {

    state = {
        sideBarTabName: "",
        companiesToRender: [],
    }

    clipDescription = (desc) => {
        return desc.slice(0, desc.slice(100).indexOf(" ") + 100) + "...";
    }

    handleSideBarClick = (sideBarTabName) => {
        let companiesToRender = [];

        if(sideBarTabName === "All startups") {
            portfolioContent.batchList.map((batch) => {
                companiesToRender = companiesToRender.concat(batch.companies);
            });
        }
        else if(sideBarTabName === "Press") {
        }
        else {
            portfolioContent.batchList.map((batch) => {
                if(sideBarTabName === batch.batchName) {
                    companiesToRender = batch.companies;
                }
            });
        }

        this.setState({
          companiesToRender,
          sideBarTabName
        });
    }

    render() {

        let sideBarTabs = portfolioContent.batchList.map((batch) => {
            let activeLinkStyle = {}

            if (this.state.sideBarTabName === batch.batchName) {
                activeLinkStyle = {
                    backgroundColor: '#F1F1F1',
                    color: '#67379A'
                };
            }
            return (<li onClick={() => {
                            this.handleSideBarClick(batch.batchName)
                        }}
                        style={activeLinkStyle}
                    >
            {batch.batchName}
            </li>);
        })

        // there's definitely a better way to do this

        let allStartupsStyle, pressStyle;

        if(this.state.sideBarTabName === "All startups") {
            allStartupsStyle = {
                backgroundColor: '#F1F1F1',
                color: '#67379A'
            };
        }

        if(this.state.sideBarTabName === "Press") {
            pressStyle = {
                backgroundColor: '#F1F1F1',
                color: '#67379A'
            };
        }


        let renderCompanies = (this.state.companiesToRender || []).map((company) => {
            let descSnippet = this.clipDescription(company.description);
            return (<PortfolioCompanyCard
                        logo={company.logo}
                        companyName={company.name}
                        description={descSnippet}
                        link={company.link}
                        tags={company.tags}

                    />)
        });

        return (
            <section>
                <GenericTop
                    header={'Portfolio'}
                    description={'Insert description here'}
                />
                <GenericPage>
                    <div className="container portfolio">
                        <div>
                            <ul className="generalSideBar">
                                <li onClick={() => {this.handleSideBarClick("All startups") }} style={allStartupsStyle}>All startups</li>
                                <li onClick={() => {this.handleSideBarClick("Press") }} style={pressStyle}>Press</li>
                            </ul>
                            <ul className="batchSideBar">
                                {sideBarTabs}
                            </ul>
                        </div>
                        <div className="content">
                            {renderCompanies}
                        </div>
                    </div>
                </GenericPage>
            </section>
        );

    }


}

export default Portfolio;
