import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerContact from '../components/BannerContact'
import Contact from './Contact'

const ContactPage = (props) => (
    <Layout>
        <Helmet>
            <title>Rideouts</title>
            <meta name="description" content="Rideouts Page" />
        </Helmet>
    
        <BannerContact />

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <Contact />
                </div>
            </section>
        </div>

    </Layout>
)

export default ContactPage
