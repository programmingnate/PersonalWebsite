import React from 'react';
import Title from './Title.jsx';
import AboutMe from './AboutMe.jsx';
import Header from './Header.jsx';

class EntryPage extends React.Component {
    constructor (props) {
        super(props);
    }

    render() {
        return(
            <div id="entryPage">
                <Header />
                <Title />
                <AboutMe />
            </div>
        )
    }
}

export default EntryPage;