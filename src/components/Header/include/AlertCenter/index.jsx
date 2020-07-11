import React from "react";

import s from './styles.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';

import HiddenWindow from './HiddenWindow/index';

class AlertCenter extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            isOpen: false,
        };
    
        // Link for callback
        this.showWindow = this.showWindow.bind(this);
    }
    
    // Hide or displaying a hidden account navigation menu
    showWindow() {
        this.setState((state) => ({
            isOpen: !state.isOpen
        }));
    }
    
    render() {
        /**
         * ID: (int)
         * Type: (int) Message Type ID (Retrieved from DB)
         * Date: (string) Message date
         * Text: (string) Message text
         * Read Status: (boolean) Has been read
         */
        const UserAlertMessages = [
            {
                id: 246,
                type: 0,
                date: "2020-07-03",
                text: "A new monthly report is ready to download. You can download this report on the home page.",
                readStatus: false
            },
            {
                id: 241,
                type: 1,
                date: "2020-07-02",
                text: "Great work, you completed all the tasks for the current day!",
                readStatus: true
            },
            {
                id: 235,
                type: 2,
                date: "2020-06-27",
                text: "An authorization from an unknown IP was performed on your account.",
                readStatus: true
            }
        ];
        
        return (
            <div className={this.state.isOpen ? `${s.alert_control} ${s.active}` : `${s.alert_control}`}>
                <button className={s.button} onClick={this.showWindow} >
                    <FontAwesomeIcon icon={faBell} className={s.icon} />

                    {/* Alert counter
                        Max counter num: 9
                    */}
                    <span className={s.counter}>0</span>
                </button>
                
                <HiddenWindow isOpen={this.state.isOpen} messagesArray={UserAlertMessages} />
            </div>
        );
    }
}

export default AlertCenter;