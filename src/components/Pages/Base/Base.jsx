import React from "react";
import s from "./Base.module.css";

import { faList, faCheckCircle, faCalendarDay, faCalendarCheck } from '@fortawesome/free-solid-svg-icons'

// Include components
import SmallInfoCard from "./../../OftenUsed/SmallInfoCard/index";
import TaskGroup from "./../../OftenUsed/TaskGroup/index";

const Base = () => {
    // Array with cards data
    const SmallCardData = [
        {
            "isPercnet": false,
            "name": "Open tasks",
            "value": 67,
            "color": "4e73df",
            "icon": faList,
        },
        {
            "isPercnet": true,
            "name": "Completed tasks",
            "value": [67, 48],
            "color": "1cc88a",
            "icon": faCheckCircle,
        },
        {
            "isPercnet": false,
            "name": "Tasks for today",
            "value": 9,
            "color": "36b9cc",
            "icon": faCalendarDay,
        },
        {
            "isPercnet": false,
            "name": "Completed today's tasks",
            "value": 3,
            "color": "f6c23e",
            "icon": faCalendarCheck,
        }
    ];
    // Array with task groups
    const TaskGroupsName = [
        {
            name: "My first task group",
        },
        {
            name: "Home work",
        },
    ];
    
    // Function to create cards
    const SmallCardCollection = target => target.map((card, index) => {
        return <SmallInfoCard key={index} isPercent={card.isPercnet} name={card.name} value={card.value} color={`#${card.color}`} icon={card.icon} />
    });
    // Function to create task groups
    let groupCollections = target => {
        return target.map((elem, index) =>
            <TaskGroup key={index} name={elem.name} />
        );
    };
    
    return (
        <div className={`base_wrapper`}>
            <h1 className={`base_title`}>Home</h1>
            
            {/* Auth user statistics */}
            <div className={s.main_statistics}>
                { SmallCardCollection(SmallCardData) }
            </div>
            
            {/* Auth user last seven days statistics */}
            <div className={`base_content_block ${s.task_groups}`}>
                <div className={`header`}>Task groups</div>
                <div className={`content`}>
                    { groupCollections(TaskGroupsName) }
                </div>
            </div>
        </div>
    );
}

export default Base;