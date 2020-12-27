/*
    * Entry Point of Calendar component
*/

import React, {useEffect, useState} from 'react'
import { Header } from './Header';
import useCalendar from './build';
import { Body } from './Body';
import WheelReact from 'wheel-react';

function Calender() {
    const { calendarRows, selectedDate, todayFormatted, daysShort, monthNames, getNextMonth, getPrevMonth, returnToday } = useCalendar();

    // Change Month on Up and Down Arrow
    const handleKeyPress = (e) => {
        if(e.keyCode == 40)
            getNextMonth()
        else if(e.keyCode == 38)
            getPrevMonth()
    }

    useEffect(async() => {
        document.addEventListener("keydown", handleKeyPress, false);
    }, [])


    // For Scrolling through Mouse wheel
    WheelReact.config({
        up: () => {
            getPrevMonth()
        },
        down: () => {
            getNextMonth()
        }
      });

    return (
        <div id="Calender" {...WheelReact.events}>
            <Header currentDate={selectedDate} getToday={() => returnToday()} next={() => getNextMonth()} prev= {() => getPrevMonth()} />
            <Body currentMonth={calendarRows} today={todayFormatted} />
        </div>
    )
}

export { Calender };

