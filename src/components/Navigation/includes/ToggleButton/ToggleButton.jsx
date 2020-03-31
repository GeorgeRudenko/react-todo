import React from 'react';
import styles from './ToggleButton.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

const Button = (props) => {
    return (
        <div className={props.classes}>
            <button className={styles.circle_button} id="sidebarToggle" onClick={props.onClickEvent} >
                <FontAwesomeIcon icon={faChevronLeft} className={styles.icon} />
            </button>
        </div>
    );
}

class ToggleButton extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            isToggle: props.isActive
        };
    }
    
    static getDerivedStateFromProps(nextProps){
        return {
            isToggle: nextProps.isActive
        };
    }
    
    render() {
        return (
            <Button classes={this.state.isToggle ? `${styles.toggles} ${styles.toggles_active}` : `${styles.toggles}`}
                    onClickEvent={this.props.onClickEvent} />
        );
    }
}

export default ToggleButton;