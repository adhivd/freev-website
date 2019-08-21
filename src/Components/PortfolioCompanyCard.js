import React from 'react';
import arrow from './../assets/arrow.png';
import arrowsvg from './../assets/arrow-svg.svg';

import './../styles/Portfolio.css';

function PortfolioCompanyCard(props) {
        let tags;
        if(props.tags) {
            tags = props.tags.map((tag) => {
                const tagStyle = {
                    backgroundColor: tag.backgroundColor
                };

                return (<span className="companyTag" style={tagStyle}>
                            {tag.content}
                        </span>);
            });
        }


        return (
            <div className="companyPortfolio">
                    <img src={props.logo} alt="logo" />
                    <h1>{props.companyName}</h1>
                    <p>{props.description}</p>
                    {tags}
            </div>
        );

}

export default PortfolioCompanyCard;
