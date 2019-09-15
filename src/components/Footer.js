import React from 'react';

const Footer = () => {

    return (
        <footer className="footer">
            <div className='footer-notes'>
                <p>*zip code omitted from map when data is not recorded</p>
            </div>

            <div className="footer-citation">
                <p className="footer-author">Graphic by Quinn Dizon | Sep. 15, 2019</p>
                <p className="footer-source">Source: <a href="https://www.zillow.com/research/data/" target="_blank">Zillow economic data</a></p>
            </div>
        </footer>
    )

}

export default Footer;