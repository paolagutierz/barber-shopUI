import React from 'react'
import Header from './Header'
import Footer from './Footer'

function Page(props) {
    return (
        <>
            <Header></Header>
            {props.children}
            <Footer></Footer>
        </>
    )
}

export default Page