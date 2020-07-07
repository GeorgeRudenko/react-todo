import React, { Component } from "react";

import s from "./styles.module.css";

// Import components
import Calendar from './includes/Calendar/index';

class Planed extends Component {
    render() {
        return (
            <div className={`base_wrapper`}>
                <h1 className={`base_title`}>My planed</h1>

                <Calendar />
            </div>
        );
    }
}

export default Planed;