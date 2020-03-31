import React from "react";
import styles from './Header.module.css';

// Include component
import Account from "./include/Account/Account"
import Search from "./include/Search/Search";

class Header extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            isToggle: this.props.isToggle
        };
    }
    
    static getDerivedStateFromProps(nextProps){
        return {
            isToggle: nextProps.isToggle
        };
    }
    
    render() {
        return (
            <div className={this.state.isToggle ? `${styles.header} ${styles.toggle}` : `${styles.header}`}>
                {/* Search block */}
                <Search />
                
                {/* User account block */}
                <Account />
            </div>
        );
    }
}

export default  Header;