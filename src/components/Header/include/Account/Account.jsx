import React from "react";
import styles from './Account.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCogs, faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons'

const HiddenMenu = (props) => {
    return (
        <div className={props.classes}>
            <div className={styles.link}><FontAwesomeIcon icon={faUser} className={styles.icon} /> Profile</div>
            <div className={styles.link}><FontAwesomeIcon icon={faCogs} className={styles.icon} /> Settings</div>
            <i className={styles.separator}></i>
            <div className={styles.link}><FontAwesomeIcon icon={faSignOutAlt} className={styles.icon} /> Logout</div>
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
            <div className={styles.account}>
                <div className={styles.control} onClick={this.showMenu}>
                    <strong className={styles.name}>User name</strong>
                    <i className={styles.avatar}></i>
                </div>
                <HiddenMenu classes={this.state.viewMenu ? `${styles.menu} ${styles.view}` : `${styles.menu}`} />
            </div>
        );
    }
}

export default Account;