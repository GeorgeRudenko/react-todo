import React from 'react';
import styles from './Link.module.css';

import { NavLink } from "react-router-dom";

const Link = (props) => {
    return (
        <NavLink to={props.link} className={styles.list_link}>{props.name}</NavLink>
    );
}

export default Link;