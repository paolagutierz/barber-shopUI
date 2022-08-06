import React, { useContext, useEffect, useState } from 'react'
import Page from '../components/Page'
import '../css/style-reservation.css'
import Barber from '../components/Barber'
import { CartContext } from '../providers/cart'
import { TYPES, DEFAULT_MESSAGES } from '../components/Alert'
import axios from "axios"
import Loading from '../components/Loading'

function Reservation() {

    const { setAlert, jwt } = useContext(CartContext)

    const [barbers, setBarbers] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [reservations, setReservations] = useState([])

    useEffect(() => {
        setAlert({ text: "Las reservas deben cancelarse con un día antes de anticipación", type: TYPES.WARNING, timeout: 5000 })

        async function getBarbers() {
            try {
                const response = await axios("http://localhost:5001/barbers")
                setBarbers(response.data.data)
            } catch (error) {
                console.log(error)
                setAlert({ text: DEFAULT_MESSAGES.SERVER_ERROR, type: TYPES.ERROR, timeout: 5000 })
            }
        }

        setIsLoading(true)
        if (jwt && jwt != "") {
            getReservations()
        }
        getBarbers()
        setIsLoading(false)

        return (() => setAlert(null))
    }, [])

    const getReservations = async () => {
        try {
            axios.defaults.headers.common['Authorization'] = jwt;
            const response = await axios.get("http://localhost:5001/reservation/pending")
            setReservations(response.data.data)
        } catch (error) {
            console.log(error)
            setAlert({ text: DEFAULT_MESSAGES.SERVER_ERROR, type: TYPES.ERROR, timeout: 5000 })
        }
    }

    const cancelReservation = async (id) => {
        try {
            axios.defaults.headers.common['Authorization'] = jwt;
            const response = await axios.delete("http://localhost:5001/reservation/" + id)
            setAlert({ text: "Se cancelo correctamente", type: TYPES.SUCCESS })
            getReservations()
        } catch (error) {
            console.log(error)
            setAlert({ text: "Ha ocurrido un error, no se pude cancelar la reserva", type: TYPES.ERROR })
        }
    }

    return (
        <Page>
            <main>
                {jwt && jwt != "" &&
                    <div className="reservas-lista">
                        <h1>Reservas:</h1>
                        <ul>
                            {reservations.map(reservation =>
                                <li>
                                    {`${reservation.barber.name} ${reservation.barber.lastName},${reservation.date}, ${reservation.time}:00hs`}
                                    <button className="boton-lista" onClick={() => cancelReservation(reservation.id)}>Cancelar</button>
                                </li>
                            )}
                        </ul>
                    </div>
                }
                <h1 className="crear-reserva">Crea tu reserva</h1>
                <ul className="reserva">
                    {barbers.map(barber =>
                        <Barber name={barber.name}
                            lastName={barber.lastName}
                            imageUrl={barber.imageUrl}
                            description={barber.description}
                            id={barber.id}
                            getReservations={getReservations} />
                    )}
                </ul>
            </main>
            <Loading show={isLoading}></Loading>
        </Page>
    )
}

export default Reservation