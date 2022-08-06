import React, { useContext, useEffect, useState } from 'react'
import Page from '../components/Page'
import '../css/style-reservation.css'
import Barber from '../components/Barber'
import { CartContext } from '../providers/cart'
import { TYPES, DEFAULT_MESSAGES } from '../components/Alert'
import axios from "axios"
import Loading from '../components/Loading'

const fakeReservations = [
    {
        name: "Jesus",
        lastName: "Valle",
        date: "29/08/2022",
        time: "15:00"
    }
    , {
        name: "Jesus",
        lastName: "Valle",
        date: "29/08/2022",
        time: "15:00"
    },
    {
        name: "Victor",
        lastName: "Valdés",
        date: "29/08/2022",
        time: "15:00"
    },
    {
        name: "Jesus",
        lastName: "Valle",
        date: "29/08/2022",
        time: "15:00"
    }
]

function Reservation() {

    const { setAlert } = useContext(CartContext)

    const [barbers, setBarbers] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setAlert({ text: "Las reservas deben cancelarse con un día antes de anticipación", type: TYPES.WARNING, timeout: 5000 })

        async function getBarbers() {
            setIsLoading(true)
            try {
                const response = await axios("http://localhost:5001/barbers")
                setBarbers(response.data.data)
            } catch (error) {
                console.log(error)
                setAlert({ text: DEFAULT_MESSAGES.SERVER_ERROR, type: TYPES.ERROR, timeout: 5000 })
            }
            setIsLoading(false)
        }

        getBarbers()

        return (() => setAlert(null))
    }, [])

    return (
        <Page>
            <main>
                <div className="reservas-lista">
                    <h1>Reservas:</h1>
                    <ul>
                        {fakeReservations.map(reservation =>
                            <li>
                                {`${reservation.name} ${reservation.lastName},${reservation.date}, ${reservation.time}hs`}
                                <button className="boton-lista">Cancelar</button>
                            </li>
                        )}
                    </ul>
                </div>
                <h1 className="crear-reserva">Crea tu reserva</h1>
                <ul className="reserva">
                    {barbers.map(barber =>
                        <Barber name={barber.name}
                            lastName={barber.lastName}
                            imageUrl={barber.imageUrl}
                            description={barber.description} />
                    )}
                </ul>
            </main>
            <Loading show={isLoading}></Loading>
        </Page>
    )
}

export default Reservation