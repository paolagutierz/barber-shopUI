import React, { useEffect, useState } from 'react'
import Modal from "./Modal"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import '../css/style-date.css'

const fakeResponse = [
    "13:00",
    "14:00",
    "15:00",
    "16:00"
]

function ModalCalendar(props) {

    const [startDate, setStartDate] = useState(new Date(new Date().setHours(24)));
    const [time, setTime] = useState()
    const [timeAvailable, setTimeAvailable] = useState([])
    const [isLoadingData, setIsLoadingData] = useState(false)

    useEffect(() => {
        async function getTime() {
            setIsLoadingData(true)
            //call the backend
            //set the timeAvailable array
            //replace timeAvailable for fakeResponse
            console.log(startDate)
            setIsLoadingData(false)
        }

        getTime()
    }, [startDate])

    return (
        <Modal show={props.show} closeModal={props.closeModal}>
            <div className='date-picker' style={{ background: "linear-gradient(180deg, white 20%, rgb(224, 126, 13) 80%)" }}>
                <h1 className='title'>Agende su cita con {props.barberName}</h1>
                <div >
                    <p className='date-title'>Date:</p>
                    <DatePicker className='calendar' selected={startDate} onChange={(date) => setStartDate(date)} />
                </div>
                <div className='time-picker'>
                    <p className='time-title'>Time:</p>
                    <div className='times'>
                        {fakeResponse.map(time => <button className='time-buttons' onClick={() => { setTime(time) }}>{time}</button>)}
                    </div>

                    <button className='reserve-button' onClick={() => console.log(startDate.toLocaleDateString() + " " + time)} disabled={isLoadingData ? true : false}>Reservar</button>
                </div>
            </div>
        </Modal>
    )
}

export default ModalCalendar