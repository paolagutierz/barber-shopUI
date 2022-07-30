import React from 'react'
import './../css/home.css'
import Page from '../components/Page'
import HomeDescription from '../components/HomeDescription'
import SiteUbication from '../components/SiteUbication'
import Differentials from '../components/Differentials'

function Home() {
    return (
        <Page>
            <main>
                <HomeDescription></HomeDescription>
                <SiteUbication></SiteUbication>
                <Differentials></Differentials>
            </main>
        </Page>
    )
}

export default Home