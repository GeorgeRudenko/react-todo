import React from "react";
import { NavLink } from 'react-router-dom'

import s from './Account.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons';

const HiddenMenu = (props) => {
    return (
        <div className={props.classes}>
            <NavLink to="/profile" activeClassName={s.active} className={s.link}><FontAwesomeIcon icon={faUser} className={s.icon} /> Profile</NavLink>
            <NavLink to="/settings" activeClassName={s.active} className={s.link}><FontAwesomeIcon icon={faCogs} className={s.icon} /> Settings</NavLink>
            <i className={s.separator}></i>
            <div className={s.link}><FontAwesomeIcon icon={faSignOutAlt} className={s.icon} /> Logout</div>
        </div>
    );
}

class Account extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            viewMenu: false
        }
        
        // Link for callback
        this.showMenu = this.showMenu.bind(this);
    }
    
    // Hide or displaying a hidden account navigation menu
    showMenu() {
        this.setState((state) => ({
            viewMenu: !state.viewMenu
        }));
    }
    
    render() {
        return (
            <div className={s.account}>
                <div className={s.control} onClick={this.showMenu}>
                    <strong className={s.name}>User name</strong>
                    <i className={s.avatar}></i>
                </div>
                <HiddenMenu classes={this.state.viewMenu ? `${s.menu} ${s.view}` : `${s.menu}`} />
            </div>
        );
    }
}

export default Account;