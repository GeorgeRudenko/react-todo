import React from 'react';
import s from './HiddenList.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faList } from '@fortawesome/free-solid-svg-icons'

import Link from "./Link/Link";

class HiddenList extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            smallStatus: this.props.smallStatus,
            isToggle: false,
            childCount: 0
        };
        
        // Bind all methods
        this.toggleLinkList = this.toggleLinkList.bind(this);
    }
    
    static getDerivedStateFromProps(nextProps){
        return {
            smallStatus: nextProps.smallStatus
        };
    }
    
    // Link Hidden List Switch
    toggleLinkList(children) {
        this.setState((state) => ({
            isToggle: !state.isToggle
        }));
    };
    
    render() {
        const calcLinkCount = (target) => {
            let counter = 0;
        
            target.forEach((elem) => {
                counter++;
            })
            
            // The operation with - and + is needed to calculate the height of all links
            // Link count * Link height - 1 Link (without margin-bottom, height 9) + 40 Link wrapper padding-top\bottom
            return (((counter - 1) * 27) + 59);
        }
    
        const LinkListCollection = this.props.linkList.map((elem, index) =>
            <Link key={index} link={elem.link} name={elem.name} />
        );
        
        return (
            <li className={this.state.isToggle ? `${s.list_link} ${s.hidden_list} ${s.active}` : `${s.list_link} ${s.hidden_list}`}>
                <div className={this.state.smallStatus ? `${s.link} ${s.list_header} ${s.small}` : `${s.link} ${s.list_header}`} onClick={this.toggleLinkList}>
                    <FontAwesomeIcon icon={faList} className={s.icon} />
                    <span>{this.props.name}</span>
                    <FontAwesomeIcon icon={faChevronRight} className={s.toggle_icon} />
                </div>
                <div className={s.list_content} style={{height: this.state.isToggle ? `${calcLinkCount(this.props.linkList)}px` : "0px"}}>
                    { LinkListCollection }
                </div>
            </li>
        );
    }
}

export default HiddenList;