import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerRideouts from '../components/BannerRideouts'

const Rideouts = (props) => (
    <Layout>
        <Helmet>
            <title>Rideouts</title>
            <meta name="description" content="Rideouts Page" />
        </Helmet>
    
        <BannerRideouts />

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <h2>Group Rideouts - Annual</h2>
                    <p>At the following dates an annual group rideout is planned.</p>
                    <p>1<sup>st</sup> Sunday of May</p>
                    <p>1<sup>st</sup> Sunday of August</p>
                    <p>1<sup>st</sup> Sunday of November</p>
                </div>
            </section>
        </div>

    </Layout>
)

export default Rideouts
