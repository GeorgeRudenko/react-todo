import React, { Component } from 'react';

import s from './styles.module.css';

export default class Calendar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isMonthDisplay: true,
            isWeekendsDisplay: true,
            actualDate: new Date(),
            currentYear: 1,
            currentMonth: 1,
        }
    }

    render() {
        const STRING_MONTH = [
            'January', 'February',
            'March', 'April', 'May',
            'June', 'July', 'August',
            'September', 'October', 'November',
            'December'
        ];

        let getDaysInMonth = function(month, year) {
            return new Date(year, month + 1, 0).getDate();
        }
        let getDateInMonth = function(day, month, year) {
            return new Date(year, month, day).getDay();
        }

        let DaysGenerate = () => {
            // 0 - 6
            let calendarDayNum = new Date(`${this.state.actualDate.getFullYear()}, ${STRING_MONTH[this.state.actualDate.getMonth()]}, 1`).getDay();
            // Max days count in current month
            let maxDaysInMonth = getDaysInMonth(this.state.actualDate.getMonth(), this.state.actualDate.getFullYear());
            // Max days count in previews month
            let maxDaysInPreviewsMonth = getDaysInMonth(this.state.actualDate.getMonth() - 1, this.state.actualDate.getFullYear());
            // Total days count for cycle
            let totalDaysForCycle = (maxDaysInMonth + calendarDayNum);
            // Object array for days
            let daysObjArray = [];

            console.log(maxDaysInPreviewsMonth, calendarDayNum);

            for (let i = 0; i <= totalDaysForCycle; i++) {
                // Date for calendar
                let currentDate = (i + 1 - calendarDayNum);
                let anotherDate = (maxDaysInPreviewsMonth - ((calendarDayNum - 1) - i));
                // Cheking is weekday
                let dateIsWeek = getDateInMonth(currentDate, this.state.actualDate.getMonth(), this.state.actualDate.getFullYear());
                let prevDateIsWeek = getDateInMonth(anotherDate, this.state.actualDate.getMonth() - 1, this.state.actualDate.getFullYear());

                if ((i < calendarDayNum) || ((i > calendarDayNum) && (i >= totalDaysForCycle))) {
                    daysObjArray.push({
                        "date": anotherDate,
                        "isWeek": (prevDateIsWeek === 0 || prevDateIsWeek === 6) ? true : false,
                        "isCurrentMonth": false,
                    });
                }
                else {
                    daysObjArray.push({
                        "date": currentDate,
                        "isWeek": (dateIsWeek === 0 || dateIsWeek === 6) ? true : false,
                        "isCurrentMonth": true,
                    });
                }
            }

            return daysObjArray.map((elem, index) => {
                let isWeekClass = (elem.isWeek === true) ? `${s.week}` : ``;
                let isCurrentMonthClass = (elem.isCurrentMonth === true) ? `` : `${s.another_month}`;

                return (
                    <div className={`${s.block} ${isWeekClass} ${isCurrentMonthClass}`} key={index.toString()}>
                        <div className={s.num}>{elem.date}</div>
                    </div>
                )
            });
        }

        return (
            <div className={s.wrapper}>
                <div className={s.control_panel}>
                    <div className={s.month_display}>
                        <button className={(this.state.isMonthDisplay === false) ? `${s.btn} ${s.week} ${s.active}` : `${s.btn} ${s.week}`}>Week</button>
                        <button className={(this.state.isMonthDisplay === true) ? `${s.btn} ${s.month} ${s.active}` : `${s.btn} ${s.month}`}>Month</button>
                    </div>

                    <div className={s.current_date}>
                        <div className={s.month}>
                            <button className={s.btn}>&lt;</button>
                            <h4 className={s.name}>{STRING_MONTH[this.state.actualDate.getMonth()]}</h4>
                            <button className={s.btn}>&gt;</button>
                        </div>
                        <div className={s.year}>{this.state.actualDate.getFullYear()}</div>
                    </div>

                    <div className={s.additional_control}>
                        <button className={(this.state.isWeekendsDisplay) ? `${s.btn} ${s.weekends_btn} ${s.active}` : `${s.btn} ${s.weekends_btn}`}>Weekends</button>
                        <button className={s.btn}>Add task</button>
                    </div>
                </div>

                <div className={(this.state.isWeekendsDisplay === true) ? `${s.calendar}` : `${s.calendar} ${s.not_weekends}`}>
                    <div className={s.name_of_days}>
                        <h4 className={s.name}>Sunday</h4>
                        <h4 className={s.name}>Monday</h4>
                        <h4 className={s.name}>Tuesday</h4>
                        <h4 className={s.name}>Wednesday</h4>
                        <h4 className={s.name}>Thursday</h4>
                        <h4 className={s.name}>Friday</h4>
                        <h4 className={s.name}>Saturday</h4>
                    </div>
                    <div className={s.number_of_days}>
                        {DaysGenerate()}
                    </div>
                </div>
            </div>
        )
    }
}
