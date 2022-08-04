import React from 'react'
import Page from '../components/Page'
import '../css/style-productos.css'

//remove
import kitBarba from '../images/Balsamo para barba.jpg'
import Shampoo from '../images/Shampoo para barba.jpg'
import Tonico from '../images/Tónico para cabello.jpg'
import Peine from '../images/Peine clásico.jpg'
import Kit from '../images/Kit de peines.jpg'
import Secador from '../images/Secador profesional.jpg'
import Product from '../components/Product'

const fakeResponse = [
    {
        id: 1,
        name: 'Kit para barba',
        image: kitBarba,
        description: 'Incluye aceite de argán, crema rasuradora y una cuchilla de afeitar de acero quirúrgico, para que te consientas como más lo mereces.',
        price: '25.00'
    },
    {
        id: 2,
        name: 'Shampoo para barba',
        image: Shampoo,
        description: 'Cuida tu barba con este shampoo anti resequedad para que brindes la mejor salud a tu barba.',
        price: '10.00'
    },
    {
        id: 3,
        name: 'Tónico para barba',
        image: Tonico,
        description: 'Bríndale brillo y vitalidad a tu barba con este tónico hecho de ingredientes naturales',
        price: '15.00'
    },
    {
        id: 4,
        name: 'Peine para barba',
        image: Peine,
        description: 'Dale a tu barba el toque más sutil y elegante con este peine clásico de barba hecho de material de alta calidad.',
        price: '8.00'
    },
    {
        id: 5,
        name: 'Kit de peines',
        image: Kit,
        description: 'Para cualquier tipo de cabello y ocasión, este kit de peines puede ser tu gran aliado a la hora de tratar tu cabello.',
        price: '20.00'
    },
    {
        id: 6,
        name: 'Secador profesional',
        image: Secador,
        description: 'Perfecciona y moldea tu look con este secador profesional de alta calidad.',
        price: '60.00'
    }
]

function Products() {
    return (
        <Page>
            <main>
                <ul class="productos">
                    {fakeResponse.map(product =>
                        <Product name={product.name} image={product.image} description={product.description} price={product.price} id={product.id}></Product>
                    )}
                </ul>
            </main>
        </Page>
    )
}

export default Products