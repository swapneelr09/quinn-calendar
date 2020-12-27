/* Calendar Body */

import React, {useEffect, useState} from 'react';
import { API } from '../../services';
import { Event } from './Event';

function Body(props) {
    const [rows, setRows] = useState([])
    const [animate, setAnimate] = useState('')
    const [events, setEvents] = useState([])
    
    const loadEvents = async() => {
        //Fetching Events from API
        let data = await API.getPosts()
        if(data){
            setEvents(data.data.ResponseObjects[0].Posts)
        }
    }

    useEffect(() => {
        //Fetching Calendar days from custom hook
        setRows([])
        for(let i = 1 ; i < 7 ; i++){
            setRows(rows => [...rows, props.currentMonth[i]])
        }

        //Setting Animation
        setAnimate('date-animation')
        setTimeout(() => {
            setAnimate('');
        }, 1000);

        if(events.length === 0){
            loadEvents()
        }
    }, [props.currentMonth, events])

    const loadDate = (val) => {
        //Matching Calendar date with event date
        let temp = []
        events.forEach((event) => {
            let timestamp = new Date(event.CalendarDateTime)
            let date = timestamp.getDate() +'-' + (timestamp.getMonth()+1) + '-'+ timestamp.getFullYear()
            if(date === val.date)
                temp.push(event)
        })
        if(temp.length == 0)
            return (<label  className={`day-element ${ animate} ${val.date === props.today ? 'highlight-today' : ''}`}>{val.value}</label>);
        else{
            return(
                <Event events={temp} day={val.value} isToday={val.date === props.today}/>
            )
        }
           
    }

    if(rows.length == 0)
        return (<></>)

    return (
        <div id="Body">
            {rows.map((week, index) => (
                <div className="week-row" key={index}>
                     {week.map((val, i) => (
                        <div className={`day ${i == 0 ? 'sunday' : ''} ${val.classes !== '' ? 'opaque' : ''}`} key={i}>
                            {loadDate(val)}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}

export {Body};
