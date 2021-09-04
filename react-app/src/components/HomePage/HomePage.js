import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getOneLocation } from '../../store/locations';
import Footer from '../Footer/Footer'
import './HomePage.css';


function HomePage() {
    const location = useSelector((state) => state.locations)

    const [cMonth, setcMonth] = useState('')
    const [cDay, setcDay] = useState('')
    const [cYear, setcYear] = useState('')
    const [cHour, setcHour] = useState('')
    const [cMin, setcMin] = useState('')
    // console.log(cHour)

    useEffect(() => {

        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "July", "Aug", "Sep", "Oct", "Nov", "Dec"
        ];

        const month = new Date();
        const d = monthNames[month.getMonth()];
        setcMonth(d)

        const day = new Date().getDay();
        setcDay(day - 2)

        const year = new Date().getFullYear();
        setcYear(year)

        const hours = new Date()
        const hour = hours.getHours();
        setcHour(hour)

        const min = new Date().getMinutes();
        setcMin(min)
    }, []);

    const randomNumber = Math.floor(Math.random() * 15) + 1

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getOneLocation(randomNumber))
    }, [dispatch, randomNumber]);



    return (
        <>
            <div className='HomePage'>
                <h1>TRAVEL IN MOVIE TIME WITH THE DELOREAN TO EXPERIENCE MOVIE EVENTS IN REAL LIFE!</h1>
                <h2>Featured Movie Event:</h2>
                <div className='timeCircuit__div'>
                    <div className='_div_spacer'> </div>
                    <div className='circuitBox box1'>
                        <div className='_div_'>
                            <p className='sticker__label'>MONTH</p>
                            <p className='circuitDisplay'>{location.location?.month}</p>
                        </div>
                        <div className='_div_'>
                            <p className='sticker__label'>DAY</p>
                            <p className='circuitDisplay'>{location.location?.day}</p>
                        </div>
                        <div className='_div_'>
                            <p className='sticker__label'>YEAR</p>
                            <p className='circuitDisplay'>{location.location?.year}</p>
                        </div>
                        <div className='_div_'>
                            <p className='sticker__label'>AM</p>
                            <p className='on'></p>
                            <p className='sticker__label'>PM</p>
                            <p className='off'></p>
                        </div>
                        <div className='_div_ padding'>
                            <p className='sticker__label'>Hour</p>
                            <p className='circuitDisplay'>12</p>
                        </div>
                        <div className='_div_ padding'>
                            <p className='on time'></p>
                            <p className='on time'></p>
                        </div>
                        <div className='_div_ padding'>
                            <p className='sticker__label'>Min</p>
                            <p className='circuitDisplay'>55</p>
                        </div>
                        <p className='large__label'>Destination Time</p>
                    </div>
                    <div className='circuitBox box2'>
                        <div className='_div_'>
                            <p className='sticker__label'>MONTH</p>
                            <p className='circuitDisplay'>{cMonth}</p>
                        </div>
                        <div className='_div_'>
                            <p className='sticker__label'>DAY</p>
                            <p className='circuitDisplay'>{cDay}</p>
                        </div>
                        <div className='_div_'>
                            <p className='sticker__label'>YEAR</p>
                            <p className='circuitDisplay'>{cYear}</p>
                        </div>
                        <div className='_div_'>
                            <p className='sticker__label'>AM</p>
                            <p className='on'></p>
                            <p className='sticker__label'>PM</p>
                            <p className='off'></p>
                        </div>
                        <div className='_div_ padding'>
                            <p className='sticker__label'>Hour</p>
                            <p className='circuitDisplay'>{cHour}</p>
                        </div>
                        <div className='_div_ padding'>
                            <p className='on time'></p>
                            <p className='on time'></p>
                        </div>
                        <div className='_div_ padding'>
                            <p className='sticker__label'>Min</p>
                            <p className='circuitDisplay'>{cMin}</p>
                        </div>
                        <p className='large__label'>Present Time</p>
                    </div>
                    <div className='circuitBox box3'>
                        <div className='_div_'>
                            <p className='sticker__label'>MONTH</p>
                            <p className='circuitDisplay'>Nov</p>
                        </div>
                        <div className='_div_'>
                            <p className='sticker__label'>DAY</p>
                            <p className='circuitDisplay'>5</p>
                        </div>
                        <div className='_div_'>
                            <p className='sticker__label'>YEAR</p>
                            <p className='circuitDisplay'>1955</p>
                        </div>
                        <div className='_div_'>
                            <p className='sticker__label'>AM</p>
                            <p className='off'></p>
                            <p className='sticker__label'>PM</p>
                            <p className='on'></p>
                        </div>
                        <div className='_div_ padding'>
                            <p className='sticker__label'>Hour</p>
                            <p className='circuitDisplay'>6</p>
                        </div>
                        <div className='_div_ padding'>
                            <p className='on time'></p>
                            <p className='on time'></p>
                        </div>
                        <div className='_div_ padding'>
                            <p className='sticker__label'>Min</p>
                            <p className='circuitDisplay'>00</p>
                        </div>
                        <p className='large__label'>Last Time Departed</p>
                    </div>
                    <a href={`/locations/${location.location?.id}`} className='_links_'>
                        <div className='_div_1'>
                            <p className='large__label'>{location.location?.movieName}</p>
                            <p className='large__label'>{location.location?.city}</p>
                            <p className='large__label'>{location.location?.state}</p>
                        </div>
                    </a>
                </div>
                <div>
                    <h3 className='click__link'>click on location name to visit</h3>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default HomePage
