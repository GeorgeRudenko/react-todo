import React from "react";
import s from './Header.module.css';

// Include component
import Search from "./include/Search/Search";
import AlertCenter from "./include/AlertCenter/index";
import Account from "./include/Account/Account";

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
            <div className={this.state.isToggle ? `${s.header} ${s.toggle}` : `${s.header}`}>
                {/* Search block */}
                <Search />
    
                {/* User alerts center */}
                <AlertCenter />
                
                {/* User account block */}
                <Account />
            </div>
        );
    }
}

export default Header;