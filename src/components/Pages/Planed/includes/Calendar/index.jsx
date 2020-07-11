import React, { Component } from 'react';

import s from './styles.module.css';

import Control from "./Control";

export default class Calendar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isMonthDisplay: false,
            isWeekendsDisplay: true,
            actualDate: new Date(),
            currentYear: new Date().getFullYear(),
            currentMonth: new Date().getMonth(),
            currentDate: new Date().getDate(),
        }

        this.SwitchWeekendDisplayedStatus = this.SwitchWeekendDisplayedStatus.bind(this);
        this.SwitchMonthDisplayedStatus = this.SwitchMonthDisplayedStatus.bind(this);
        this.SetPrevDate = this.SetPrevDate.bind(this);
        this.SetNextDate = this.SetNextDate.bind(this);
        this.SetActualDate = this.SetActualDate.bind(this);
    }

    // Switch toggle status
    SwitchWeekendDisplayedStatus() {
        this.setState((state) => ({
            isWeekendsDisplay: !state.isWeekendsDisplay
        }));
    }
    // Switch mont displayed status
    SwitchMonthDisplayedStatus() {
        this.setState((state) => ({
            isMonthDisplay: !state.isMonthDisplay
        }));
    }
    // Set prev month is current
    SetPrevDate() {
        if (this.state.isMonthDisplay === true) {
            if (this.state.currentMonth - 1 <= -1) {
                this.setState((state) => ({
                    currentMonth: 11,
                    currentYear: state.currentYear - 1
                }));
            }
            else {
                this.setState((state) => ({
                    currentMonth: state.currentMonth - 1
                }));
            }
        }
        else {
            this.setState((state) => ({
                currentDate: state.currentDate - 7
            }));
        }
    }
    // Set next month is current
    SetNextDate() {
        if (this.state.isMonthDisplay === true) {
            if (this.state.currentMonth + 1 >= 12) {
                this.setState((state) => ({
                    currentMonth: 0,
                    currentYear: state.currentYear + 1
                }));
            }
            else {
                this.setState((state) => ({
                    currentMonth: state.currentMonth + 1
                }));
            }
        }
        else {
            this.setState((state) => ({
                currentDate: state.currentDate + 7
            }));
        }
    }
    // Set actual date is current
    SetActualDate() {
        this.setState((state) => ({
            currentMonth: state.actualDate.getMonth(),
            currentYear: state.actualDate.getFullYear()
        }));
    }

    render() {
        // Month name array
        const STRING_MONTH = [
            'January', 'February',
            'March', 'April', 'May',
            'June', 'July', 'August',
            'September', 'October', 'November',
            'December'
        ];
        // Method for get days count in month
        let getDaysInMonth = function(month, year) {
            let m = (month <= -1) ? 11 : month;
            let yyyy = (month >= 12) ? year + 1 : year;
            return new Date(yyyy, m + 1, 0).getDate();
        }
        // Method for get date
        let getDateInMonth = function(day, month, year) {
            return new Date(year, month, day).getDay();
        }
        // Method for generated all prev, current and next month days
        let MonthDaysGenerate = () => {
            // 0 - 6
            let calendarFirstDayNum = new Date(`${this.state.currentYear}, ${STRING_MONTH[this.state.currentMonth]}, 1`).getDay();
            // Max days count in current month
            let maxDaysInMonth = getDaysInMonth(this.state.currentMonth, this.state.currentYear);
            // Max days count in previews month
            let maxDaysInPreviewsMonth = getDaysInMonth(this.state.currentMonth - 1, this.state.currentYear);
            // Max days count in previews month
            let maxDaysInNextMonth = getDaysInMonth(this.state.currentMonth + 1, this.state.currentYear);
            // 0 - 6
            let calendarLastDayNum = 6 - Number(new Date(`${this.state.currentYear}, ${STRING_MONTH[this.state.currentMonth]}, ${maxDaysInMonth}`).getDay());
            // Total days count for cycle
            let totalDaysForCycle = (this.state.isMonthDisplay === true) ? (maxDaysInMonth + calendarFirstDayNum + calendarLastDayNum) : (7);
            let nextDate = 1;
            // Object array for days
            let daysObjArray = [];

            for (let i = 0; i < totalDaysForCycle; i++) {
                // Date for calendar
                let currentDate = (i + 1 - calendarFirstDayNum);
                let previewsDate = (maxDaysInPreviewsMonth - ((calendarFirstDayNum - 1) - i));
                // Cheeking is weekday
                let dateIsWeek = getDateInMonth(currentDate, this.state.currentMonth, this.state.currentYear);
                let prevDateIsWeek = getDateInMonth(previewsDate, this.state.currentMonth - 1, this.state.currentYear);
                let nextDateIsWeek = getDateInMonth(nextDate, this.state.currentMonth + 1, this.state.currentYear);

                if (i < calendarFirstDayNum) {
                    daysObjArray.push({
                        "date": previewsDate,
                        "isWeek": (prevDateIsWeek === 0 || prevDateIsWeek === 6) ? true : false,
                        "isCurrentMonth": false,
                        "isCurrentDate": false,
                    });
                }
                else if ((i > calendarFirstDayNum) && (i >= totalDaysForCycle - calendarLastDayNum)) {
                    daysObjArray.push({
                        "date": nextDate,
                        "isWeek": (nextDateIsWeek === 0 || nextDateIsWeek === 6) ? true : false,
                        "isCurrentMonth": false,
                        "isCurrentDate": false,
                    });

                    nextDate++;
                }
                else {
                    daysObjArray.push({
                        "date": currentDate,
                        "isWeek": (dateIsWeek === 0 || dateIsWeek === 6) ? true : false,
                        "isCurrentMonth": true,
                        "isCurrentDate": ((this.state.actualDate.getFullYear() === this.state.currentYear) && (this.state.actualDate.getMonth() === this.state.currentMonth) && (currentDate === this.state.actualDate.getDate())) ? true : false,
                    });
                }
            }

            return daysObjArray;
        }
        // Method for generated all prev, current and next month days on current week
        let WeekDaysGenerate = () => {
            // Actual date
            let actualDate = this.state.currentDate;
            // Check for the day of the week
            // +1 - 'cause getDay returned num 0 - 6
            let checkDeyWeek = 1 + Number(new Date(`${this.state.currentYear}, ${STRING_MONTH[this.state.currentMonth]}, ${actualDate}`).getDay());
            // Next days and previews days
            let nextDays = (7 - checkDeyWeek); // Next days count
            let prevDays = (checkDeyWeek - nextDays - 1); // Previews days count
            // Total days count for cycle
            let totalDaysForCycle = prevDays + 1 + nextDays;
            // Object array for days
            let daysObjArray = [];

            for (let i = 0; i < totalDaysForCycle; i++) {
                // Date for calendar
                let currentDate = actualDate;
                let previewsDate = currentDate - prevDays + i;
                let nextDate = currentDate + nextDays - i;
                // Cheeking is weekday
                let dateIsWeek = getDateInMonth(currentDate, this.state.currentMonth, this.state.currentYear);
                let prevDateIsWeek = getDateInMonth(previewsDate, this.state.currentMonth - 1, this.state.currentYear);
                let nextDateIsWeek = getDateInMonth(nextDate, this.state.currentMonth + 1, this.state.currentYear);

                if (i <= prevDays) {
                    daysObjArray.push({
                        "date": previewsDate,
                        "isWeek": (prevDateIsWeek === 0 || prevDateIsWeek === 6) ? true : false,
                        "isCurrentMonth": true,
                        "isCurrentDate": ((this.state.actualDate.getFullYear() === this.state.currentYear) && (this.state.actualDate.getMonth() === this.state.currentMonth) && (i === this.state.actualDate.getDate())) ? true : false,
                    });
                }
                else if (i >= nextDays) {
                    daysObjArray.push({
                        "date": nextDate,
                        "isWeek": (nextDateIsWeek === 0 || nextDateIsWeek === 6) ? true : false,
                        "isCurrentMonth": true,
                        "isCurrentDate": ((this.state.actualDate.getFullYear() === this.state.currentYear) && (this.state.actualDate.getMonth() === this.state.currentMonth) && (i === this.state.actualDate.getDate())) ? true : false,
                    });
                }
                else {
                    daysObjArray.push({
                        "date": currentDate,
                        "isWeek": (dateIsWeek === 0 || dateIsWeek === 6) ? true : false,
                        "isCurrentMonth": true,
                        "isCurrentDate": ((this.state.actualDate.getFullYear() === this.state.currentYear) && (this.state.actualDate.getMonth() === this.state.currentMonth) && (i === this.state.actualDate.getDate())) ? true : false,
                    });
                }
            }

            return daysObjArray;
        };
        // Method for return actual days collection
        let DaysCollection = () => {
            if (this.state.isMonthDisplay === true) {
                return MonthDaysGenerate().map((elem, index) => {
                    let isWeekClass = (elem.isWeek === true) ? `${s.week}` : ``;
                    let isCurrentMonthClass = (elem.isCurrentMonth === true) ? `` : `${s.another_month}`;
                    let isCurrentDate = (elem.isCurrentDate === true) ? `${s.current_date}` : ``;

                    return (
                        <div className={`${s.block} ${isWeekClass} ${isCurrentDate} ${isCurrentMonthClass}`} key={index.toString()}>
                            <div className={s.num}>{elem.date}</div>
                        </div>
                    )
                });
            }
            else {
                return WeekDaysGenerate().map((elem, index) => {
                    let isWeekClass = (elem.isWeek === true) ? `${s.week}` : ``;
                    let isCurrentMonthClass = (elem.isCurrentMonth === true) ? `` : `${s.another_month}`;
                    let isCurrentDate = (elem.isCurrentDate === true) ? `${s.current_date}` : ``;

                    return (
                        <div className={`${s.block} ${s.week_day} ${isWeekClass} ${isCurrentDate} ${isCurrentMonthClass}`} key={index.toString()}>
                            <div className={s.num}>{elem.date}</div>
                        </div>
                    );
                });
            }
        }

        return (
            <div className={s.wrapper}>
                <Control StringMonth={STRING_MONTH}
                         isWeekendsDisplay={this.state.isWeekendsDisplay}
                         isMonthDisplay={this.state.isMonthDisplay}
                         actualDate={this.state.actualDate}
                         currentYear={this.state.currentYear}
                         currentMonth={this.state.currentMonth}
                         SwitchWeekendDisplayedStatus={this.SwitchWeekendDisplayedStatus}
                         SwitchMonthDisplayedStatus={this.SwitchMonthDisplayedStatus}
                         SetPrevDate={this.SetPrevDate}
                         SetNextDate={this.SetNextDate}
                         SetActualDate={this.SetActualDate}
                />

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
                        { DaysCollection() }
                    </div>
                </div>
            </div>
        )
    }
}
