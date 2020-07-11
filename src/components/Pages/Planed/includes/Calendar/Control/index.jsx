import React, {Component} from 'react';

import s from "./styles.module.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronLeft, faChevronRight, faHome} from '@fortawesome/free-solid-svg-icons'

class Control extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isWeekendsDisplay: this.props.isWeekendsDisplay,
            isMonthDisplay: this.props.isMonthDisplay,
            actualDate: this.props.actualDate,
            currentYear: this.props.currentYear,
            currentMonth: this.props.currentMonth,
        };
    }

    static getDerivedStateFromProps(nextProps) {
        return {
            isWeekendsDisplay: nextProps.isWeekendsDisplay,
            isMonthDisplay: nextProps.isMonthDisplay,
            actualDate: nextProps.actualDate,
            currentYear: nextProps.currentYear,
            currentMonth: nextProps.currentMonth,
        };
    }

    render() {
        return (
            <div className={s.control_panel}>
                <div className={s.month_display}>
                    <button className={(this.state.isMonthDisplay === true) ? `${s.btn} ${s.month}` : `${s.btn} ${s.week}`}
                            onClick={this.props.SwitchMonthDisplayedStatus}
                    >
                        <span className={`${s.span} ${s.week}`}>Week</span>
                        <span className={`${s.span} ${s.month}`}>Month</span>
                    </button>
                </div>

                <div className={s.current_date}>
                    <div className={s.year}>{this.state.currentYear}</div>

                    <div className={s.date}>
                        <button className={s.btn}
                                onClick={this.props.SetPrevDate}
                        >
                            <FontAwesomeIcon icon={faChevronLeft} className={s.icon} />
                        </button>

                        <button className={s.go_actual}
                                onClick={this.props.SetActualDate}
                        >
                            Today
                        </button>

                        <button className={s.btn}
                                onClick={this.props.SetNextDate}
                        >
                            <FontAwesomeIcon icon={faChevronRight} className={s.icon} />
                        </button>
                    </div>

                    <h4 className={s.month_name}>{this.props.StringMonth[this.state.currentMonth]}</h4>
                </div>

                <div className={s.additional_control}>
                    <button className={(this.state.isWeekendsDisplay) ? `${s.btn} ${s.weekends_btn} ${s.active}` : `${s.btn} ${s.weekends_btn}`}
                            onClick={this.props.SwitchWeekendDisplayedStatus}>Weekends</button>
                    <button className={s.btn}>Add task</button>
                </div>
            </div>
        );
    }
}

export default Control;