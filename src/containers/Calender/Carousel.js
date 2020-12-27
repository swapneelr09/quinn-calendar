/* Carousel Component */

import React, {useState} from 'react';
import { FcNext, FcPrevious } from 'react-icons/fc';
import {AiFillStar} from 'react-icons/ai';
import Global from '../../store/config';

function Carousel(props) {
  const [index, setIndex] = useState(0);

  const returnRating = (rating) => {
    let r = []
    for(let i = 1 ; i <= 5 ; i++){
        if(i <= rating)
            r.push(<AiFillStar className="filled-star" size={20} />)
        else
            r.push(<AiFillStar className="not-filled-star" size={20} />)
    }
        
    return r
  }
  
  const returnDayTypes = (day, i) => {
    return (<div className={"dayType "+Global.treatments[day]} key={i}>{Global.treatments[day]}</div>)
  }

  const returnDate = (date) => {
    let timestamp = new Date(date)
    let calendarDate = timestamp.getDate() +' ' + Global.months3[timestamp.getMonth()] + ', '+ timestamp.getFullYear()
    return calendarDate
  }

  return (
    <div id="Carousel">
        <FcPrevious className={`iterator ${index == 0 ? 'disable' : ''}`} onClick={() => setIndex(index - 1)} />
        <div className="card">
            <img src={props.events[index].Images[0].ImageUrl} className="img" />
            <div className="highlights">
                <div className="typeDay">
                        {props.events[index].TypeOfDay.map((day, i) => (
                            returnDayTypes(day, i)
                        ))}
                </div>
                <div className="rating">
                    {returnRating(props.events[index].Rating)}
                </div>
            </div>
            <div className="date-now">{returnDate(props.events[index].CalendarDateTime)}</div>
            <div className="desc">{props.events[index].Text}</div>
        </div>

        <FcNext className={`iterator ${index + 1 == props.events.length ? 'disable' : ''}`} onClick={() => setIndex(index + 1)} />
    </div>
  );
}

export {Carousel};
