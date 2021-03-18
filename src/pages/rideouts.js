import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

//import pic11 from '../assets/images/pic11.jpg'

const Rideouts = (props) => (
    <Layout>
        <Helmet>
            <title>Rideouts</title>
            <meta name="description" content="Rideouts Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Rideouts</h1>
                    </header>
                    //<span className="image main"><img src={pic11} alt="" /></span>
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
