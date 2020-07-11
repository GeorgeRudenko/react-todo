import React from "react";

import s from './styles.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLightbulb, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

class HiddenWindow extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            isOpen: this.props.isOpen,
            messagesArray: this.props.messagesArray,
        };
    }
    
    static getDerivedStateFromProps(nextProps){
        return {
            isOpen: nextProps.isOpen
        };
    }
    
    CreateAlertMessages() {
        return this.props.messagesArray.map((message) => {
            // Message icon
            let type_icon = faEnvelope;
            // Message type
            let type_class = `${s.alert_block}`;
            // Message text
            let text = message.text;
            // Message date
            let date = new Date(message.date);
                // Date stroke
            let day = date.getDate();
            let month = date.getMonth();
            let year = date.getFullYear();
                // New date
            let messageDate = `${day}.${month}.${year}`;
                // Month names
            let monthNames = [
                "January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"
            ];
            
            // Conditions for choose icon and alert type
            if (message.type == 0) {
                type_icon = faEnvelope;
                type_class = `${s.type_alert}`;
            }
            else if (message.type == 1) {
                type_icon = faLightbulb;
                type_class = `${s.type_success}`;
            }
            else if (message.type == 2) {
                type_icon = faExclamationTriangle;
                type_class = `${s.type_danger}`;
            }
            // Condition for text length
            if (text.length > 100) {
                text = text.slice(0, 100);
                text = text + "...";
            }
            // Condition for date
            for (let i = 1; i <= monthNames.length; i++) {
                if (date.getMonth() == i) {
                    month = monthNames[i];
                    // Update message date
                    messageDate = `${day} ${month}, ${year}`;

                    break;
                }
            };
            
            return (
                <div key={message.id} className={message.readStatus ? `${s.alert_block} ${type_class}` : `${s.alert_block} ${type_class} ${s.unread}`}>
                    <div className={s.preview}>
                        <FontAwesomeIcon icon={type_icon} className={s.icon} />
                    </div>
                    <div className={s.info}>
                        <small className={s.date}>{ messageDate }</small>
                        <p className={s.text}>{text}</p>
                    </div>
                </div>
            );
        });
    }
    
    render() {
        return (
            <div className={this.state.isOpen ? `${s.window} ${s.view}` : `${s.window}`}>
                <h3 className={s.title}>Alerts center</h3>
            
                {/* View the last three alert */}
                <div className={s.alerts_wrapper}>
                    { this.CreateAlertMessages() }
                </div>
            
                <div className={s.link}>Show all alerts</div>
            </div>
        );
    }
}

export default HiddenWindow;