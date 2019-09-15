import React from 'react';

const Footer = () => {

    return (
        <footer className="footer">
            <div className='footer-notes'>
                <p>*zipcode omitted when data not collected for that year</p>
            </div>

            <div className="footer-citation">
                <p className="footer-author">Graphic by Quinn Dizon</p>
                <p className="footer-source">Source: <a href="https://www.zillow.com/research/data/" target="_blank">Zillow economic data</a></p>
            </div>
        </footer>
    )

}

export default Footer;