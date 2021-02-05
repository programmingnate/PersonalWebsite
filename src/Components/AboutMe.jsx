import React from 'react';

function AboutMe(props) {
    return (
        <div id="aboutMeContainer">
            <h1 id="aboutMeHeader">1. About me</h1>
            <div id="aboutMe">
                My passion for programming lies in creating an intuitive and visually perfect experience for the end-user 
                that is supported by a powerful and efficient back-end. I have a strong affinity for 
                learning new skills so that I may draw upon more tools to help me accomplish my goals.
                <br/> <br/>
                My goal as a programmer has led me from game development to web development to expand both my 
                skill set and audience, and to contribute to a purpose so that my work may have a greater impact 
                on the world around us.
                <br/><br/>
                Some technologies I use a lot:
                <div id="selfieContainer">
                    <img id="selfieActual" src="https://nathansheetswebsite.s3.amazonaws.com/IMG_2777.jpg"></img>
                </div>
                <div id="favTechContainer">
                    <ul id="favTech">
                        <li id="javascript">JavaScript (ES6+)</li>
                        <li id="react">React.js</li>
                        <li id="node">Node.js</li>
                        <li id="mongo">MongoDB</li>
                        <li id="html">HTML &amp; CSS</li>
                        <li id="wordpress">Unity</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;