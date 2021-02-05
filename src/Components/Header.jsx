import React from 'react';

function Header(props) {
    return (
        <div id="header">
            <a href="#" className="headerItem">
                1. About
            </a>
            <div className="headerSpacer">
                |
            </div>
            <a href="#" className="headerItem">
                2. Experience
            </a>
            <div className="headerSpacer">
                |
            </div>
            <a href="#" className="headerItem">
                3. Education
            </a>
            <div className="headerSpacer">
                |
            </div>
            <a href="#" className="headerItem">
                4. Contact
            </a>
            <div id="resumeButtonContainer">
                <button id="resumeButton">
                    <b>Resume</b>
                </button>
            </div>
        </div>
    )
}

export default Header;