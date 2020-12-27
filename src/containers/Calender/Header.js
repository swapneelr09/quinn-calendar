/* Calendar Header Component */

import React, {useState, useEffect} from 'react';
import { Row, Col, Button } from 'reactstrap';
import { GrNext, GrPrevious } from 'react-icons/gr';
import Global from '../../store/config';

function Header({currentDate, getToday, next, prev}) {
    const [animate, setAnimate] = useState('data-animation');

    const getMonth = () => {
        return Global.Months[currentDate.getMonth()]
    }

    const getYear = () => {
        return currentDate.getFullYear()
    }

    useEffect(() => {
        //Setting Appear Animation
        setAnimate('date-animation')
        setTimeout(() => {
            setAnimate('');
        }, 1000);
    }, [currentDate])

    return(
        <div className="header-container">
            <div className={"current-date " + animate }>
                <div>
                    <label className="month">{getMonth()}, </label>
                    <label>{getYear()}</label>
                </div>
                <div className="current-date">
                    <Button className="today-btn" onClick={() => getToday()}>Today</Button>
                    <Button className="day-btn" onClick={() => prev()}><GrPrevious /></Button>
                    <Button className="day-btn" onClick={() => next()}><GrNext /></Button>
                </div>
                
            </div>
            <div className="week-group">
                <Row className="week-row">
                    {Global.weeks.map((day, index) => (
                        <Col xs="3" className="week-item">{day}</Col>
                    ))}
                </Row>
            </div>
        </div>
    )
}

export {Header};