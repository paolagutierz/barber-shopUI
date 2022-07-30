import React from 'react'
import diferenciales from '../images/diferenciales.jpg'

function Differentials() {
    return (
        <section className="diferenciales">

            <h3 className="titulo-principal">Diferenciales</h3>

            <div className="contenido-diferenciales">
                <ul className="lista-diferenciales">
                    <li className="items">Atencion personalizada a los clientes</li>
                    <li className="items">Espacio diferenciado</li>
                    <li className="items">Localizacion</li>
                    <li className="items">Profesionales calificados</li>
                    <li className="items">Puntualidad</li>
                    <li className="items">Limpieza</li>
                </ul><img src={diferenciales} className="imagen-diferenciales" />
            </div>

            <div className="video">
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/8pWtdanVz3I" title="YouTube video player"
                    frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>
            </div>
        </section>
    )
}

export default Differentials