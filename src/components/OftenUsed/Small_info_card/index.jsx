import React from "react";
import s from "./styles.module.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'

const Small_info_card = (props) => {
    let valueWrapper = () => {
        if (props.isPercent == true) {
            let calcPercent = Number(props.value[1] / (props.value[0] / 100));
            
            return (
                <div className={`${s.value_wrapper} ${s.percent}`}>
                    <small className={s.value}>{ parseInt(calcPercent) }%</small>
                    <span className={s.percent_line}>
                        <span className={s.line} style={{background: `${props.color}`, width: `${parseInt(calcPercent)}%`}}></span>
                    </span>
                </div>
            )
        }
        else {
            return (
                <div className={s.value_wrapper}>
                    <small className={s.value}>{props.value}</small>
                </div>
            )
        }
    }
    
    if (props.value) {
        return (
            <div className={`${s.info_card}`} style={{maxWidth: `${props.maxWidth}%`, borderLeftColor: `${props.color}`}}>
                <div className={s.data}>
                    <small className={s.title} style={{color: `${props.color}`}}>{props.name}</small>
                    { valueWrapper() }
                </div>
                <FontAwesomeIcon icon={props.icon ? props.icon : faCircle} className={s.icon} />
            </div>
        );
    }
    else {
        return null;
    }
}

export default Small_info_card;