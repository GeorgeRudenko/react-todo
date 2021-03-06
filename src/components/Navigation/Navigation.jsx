import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './Navigation.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faSmileWink, faSun, faStar, faCalendar, faTasks } from '@fortawesome/free-solid-svg-icons'

// Import includes components
import ToggleButton from "./includes/ToggleButton/ToggleButton";
import HiddenList from "./includes/HiddenList/HiddenList";

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            isToggle: this.props.toggleStatus
        };
    }
    
    static getDerivedStateFromProps(nextProps){
        return {
            isToggle: nextProps.toggleStatus
        };
    }
    
    render() {
        const MenuTaskGroups = [
            {
                name: "My first task group",
                list: [
                    {
                        link: "/1/1",
                        name: "Marketing"
                    },
                    {
                        link: "/1/2",
                        name: "Design"
                    },
                    {
                        link: "/1/3",
                        name: "Front-end"
                    },
                    {
                        link: "/1/4",
                        name: "Back-end"
                    }
                ],
            },
            {
                name: "Home work",
                list: [
                    {
                        link: "/2/1",
                        name: "Cleaning"
                    },
                    {
                        link: "/2/2",
                        name: "Add tasks"
                    }
                ],
            },
        ];

        const HiddenListCollection = (target) => {
            return target.map((elem, index) =>
                <HiddenList key={index.toString()} name={elem.name} linkList={elem.list} smallStatus={this.state.isToggle} />
            )
        }

        return (
            <div className={this.state.isToggle ? `${s.admin_sidebar} ${s.toggle}` : `${s.admin_sidebar}`}>
                <nav className={s.nav}>
                    <div className={s.nav_header}>
                        {/* Home */}
                        <NavLink to="/" className={s.header_link}>
                            <FontAwesomeIcon icon={faSmileWink} className={s.icon} />
                            <h3 className={s.big_title}>To Do</h3>
                        </NavLink>
                    </div>

                    <hr className={s.separator} />

                    <ul className={s.nav_list}>
                        <h5 className={s.list_title}>Navigations</h5>
                        
                        {/* Home */}
                        <li className={s.list_link}>
                            <NavLink to="/" exact activeClassName={s.active} className={s.link}>
                                <FontAwesomeIcon icon={faHome} className={s.icon} />
                                <span>Home</span>
                            </NavLink>
                        </li>
                        
                        {/* My day */}
                        <li className={s.list_link}>
                            <NavLink to="/my-day" activeClassName={s.active} className={s.link}>
                                <FontAwesomeIcon icon={faSun} className={s.icon} />
                                <span>My Day</span>
                            </NavLink>
                        </li>
                        
                        {/* Important task */}
                        <li className={s.list_link}>
                            <NavLink to="/important" activeClassName={s.active} className={s.link}>
                                <FontAwesomeIcon icon={faStar} className={s.icon} />
                                <span>Important</span>
                            </NavLink>
                        </li>
                        
                        {/* Planed */}
                        <li className={s.list_link}>
                            <NavLink to="/planed" activeClassName={s.active} className={s.link}>
                                <FontAwesomeIcon icon={faCalendar} className={s.icon} />
                                <span>Planed</span>
                            </NavLink>
                        </li>
                        
                        {/* Tasks */}
                        <li className={s.list_link}>
                            <NavLink to="/tasks" activeClassName={s.active} className={s.link}>
                                <FontAwesomeIcon icon={faTasks} className={s.icon} />
                                <span>Tasks</span>
                            </NavLink>
                        </li>
                    </ul>

                    <hr className={s.separator} />

                    <ul className={s.nav_list}>
                        <h5 className={s.list_title}>Task lists</h5>
                        { HiddenListCollection(MenuTaskGroups) }
                    </ul>

                    <hr className={s.separator} />

                    <ToggleButton isActive={this.state.isToggle} onClickEvent={this.props.updateToggle} />
                </nav>
            </div>
        );
    }
}

export default Navigation;