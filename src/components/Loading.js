import React, { useEffect, useState } from 'react'
import Modal from "./Modal"
import barber from "../images/svg/barber.svg"
import barberShop from "../images/svg/barberShop.svg"
import hairBarber from "../images/svg/hairBarber.svg"
import hairDryer from "../images/svg/hairDryer.svg"
import pole from "../images/svg/pole.svg"
import razor from "../images/svg/razor.svg"

import "../css/components/barberIcon.css"

const ICONS = [barber, barberShop, hairBarber, hairDryer, pole, razor]

const getRandomIcon = () => {
    const index = Math.floor(Math.random() * (ICONS.length));
    return ICONS[index]
}

function Loading(props) {
    const [icon, setIcon] = useState();

    useEffect(() => {
        setIcon(getRandomIcon())
    }, [])

    return (
        <Modal show={props.show} closeModal={() => { }}>
            {icon &&
                <div className="barberIcon" >
                    <object data={icon}></object>
                    Loading...
                </div>
            }
        </Modal>
    )
}

export default Loading