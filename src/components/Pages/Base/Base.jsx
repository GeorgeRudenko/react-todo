import React from "react";
import s from "./Base.module.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faCheckCircle, faCalendarDay, faCalendarCheck } from '@fortawesome/free-solid-svg-icons'

// Include components
import Small_info_card from "./../../OftenUsed/Small_info_card/index";

const Base = () => {
    return (
        <div className={`base_wrapper`}>
            <h1 className={`base_title`}>Main page</h1>
            
            <div className={s.main_statistics}>
                <Small_info_card maxWidth={25}
                                 isPercent={false}
                                 name="Open tasks"
                                 value={67}
                                 color="#4e73df"
                                 icon={faList}
                />
                <Small_info_card maxWidth={25}
                                 isPercent={true}
                                 name="Completed tasks"
                                 value={[67, 48]}
                                 color="#1cc88a"
                                 icon={faCheckCircle}
                />
                <Small_info_card maxWidth={25}
                                 isPercent={false}
                                 name="Tasks for today"
                                 value={9}
                                 color="#36b9cc"
                                 icon={faCalendarDay}
                />
                <Small_info_card maxWidth={25}
                                 isPercent={false}
                                 name="Completed today's tasks"
                                 value={3}
                                 color="#f6c23e"
                                 icon={faCalendarCheck}
                />
            </div>
        </div>
    );
}

export default Base;