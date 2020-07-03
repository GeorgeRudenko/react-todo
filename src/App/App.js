import React from 'react';
import './App.css';
// FontAwesome
// Import main components
import Main from './../components/Main/Main';
import Navigation from "../components/Navigation/Navigation";

class App extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            menuIsToggle: false
        };
        
        this.SwitchToggleStatus = this.SwitchToggleStatus.bind(this);
    }
    
    // Switch toggle status
    SwitchToggleStatus() {
        this.setState((state) => ({
            menuIsToggle: !state.menuIsToggle
        }));
    }
    
    render() {
        return (
            <div className="App">
                <Navigation taskGroups={this.props.store.getState().taskGroups}
                            groupLists={this.props.store.getState().groupLists}
                            toggleStatus={this.state.menuIsToggle}
                            updateToggle={this.SwitchToggleStatus} />
                <Main toggleStatus={this.state.menuIsToggle} />
            </div>
        );
    }
}

export default App;
