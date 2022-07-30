import React from 'react'

function SiteUbication() {
    return (
        <section className="mapa">
            <h3 className="titulo-principal"> Nuestra Ubicación</h3>
            <p>
                Nuestro establecimiento está ubicado en el corazón de la ciudad
            </p>
            <div className="mapa-contenido">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d15863.841373219871!2d-75.56508540521573!3d6.268946002048618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1scalvario!5e0!3m2!1ses!2sco!4v1655240695001!5m2!1ses!2sco"
                    width="100%" height="300" style={{ border: 0 }} allowFullScreen=""></iframe>
                {
                    // etiqueta para colocar diferentes tipos de contenidos, mapas, videos, gifs, etc...
                }
            </div>

        </section>
    )
}

export default SiteUbication