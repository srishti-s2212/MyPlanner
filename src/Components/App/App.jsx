import React from 'react';
import Header from '../Header/Header';
import Task from '../TaskAddDelete/Task.jsx';
import DialogBox from '../DialogAddTask/DialogBox';
import CalendarReact from '../Calendar/CalendarReact';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Task />
                <br />
                <br />
                <br />

                <DialogBox />
                <br />
                <br />
                <br />

                <CalendarReact />
            </div>
        )
    }

}

export default App;