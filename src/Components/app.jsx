import React from 'react';
import EntryPage from './EntryPage.jsx';

class App extends React.Component {
    constructor (props) {
        super(props);
    }

    render() {
        return (
            <div>
                < EntryPage />
            </div>
        )
    }
}

export default App;