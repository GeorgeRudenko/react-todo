import React from "react";
import s from "./styles.module.css";

import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";

class Index extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            modalIsOpen: false,
        };
        
        this.ToggleModalStatus = this.ToggleModalStatus.bind(this);
    }
    
    ToggleModalStatus() {
        this.setState((state) => ({
            modalIsOpen: !state.modalIsOpen
        }));
    }
    
    render() {
        return (
            <div className={s.group_block}>
                <NavLink to={`/`} className={s.name}>{ this.props.name }</NavLink>
        
                <div className={`base_small_modal ${s.control}`}>
                    <button className={`control_button`} onClick={ this.ToggleModalStatus }>
                        <FontAwesomeIcon icon={faEllipsisV} className={`icon`} />
                    </button>
                    <div className={(this.state.modalIsOpen) ? `modal_content view` : `modal_content`}>
                        <h4 className={`title`}>Control menu</h4>
                        <button className={`btn ${s.edit}`}>Edit</button>
                        <button className={`btn ${s.remove}`}>Remove</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Index;