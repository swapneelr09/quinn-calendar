/* Event Tile of Calendar */

import React, {useState} from 'react';
import { MdHighlightOff } from "react-icons/md";
import {AiFillStar} from 'react-icons/ai';
import Global from '../../store/config';
import { Carousel } from './Carousel';

function Event(props) {
    const [expanded, setExpanded] = useState(false)
    
    const returnRating = (rating) => {
        let r = []
        for(let i = 1 ; i <= 5 ; i++){
            if(i <= rating)
                r.push(<AiFillStar className="filled-star" />)
            else
                r.push(<AiFillStar className="not-filled-star"/>)
        }
            
        return r
    }   

    const returnDayTypes = (day, index) => {
        return (<div className={"dayType "+Global.treatments[day]} key={index}>{Global.treatments[day]}</div>)
    }

    return (
            <div id="Event">
                {/* Event Carousel */}
                <div className="preloader" style={{display: expanded ? '' : 'none'}}>
                    <div className="close-back" onClick={() => setExpanded(!expanded)}>
                        <MdHighlightOff className="close" />
                    </div>
                    <Carousel events={props.events} />
                </div>

                <div onClick={() => setExpanded(!expanded)}>
                    <div className="header">
                        <div className="rating">
                            {returnRating(props.events[0].Rating)}
                        </div>
                        <span className={`daynum ${props.isToday ? 'highlight-today' : ''}`}>{props.day}</span>
                    </div>
                    <img src={props.events[0].Images[0].ImageUrl} className="img" />
                    <div className="typeOfDay">
                        {props.events[0].TypeOfDay.map((day, index) => (
                            returnDayTypes(day, index)
                        ))}
                    </div>
                </div>
            </div>
    )
}

export {Event};
